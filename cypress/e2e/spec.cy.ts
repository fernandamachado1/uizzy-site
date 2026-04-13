describe('Check if post not found / Go to a specific post', () => {

  beforeEach(() => {
    cy.visit("/")

    cy.get("button[data-test-id='btn-nav-mobile']").click();
    cy.get("div.nav-mobile").contains("Blog").click();

    cy.url().should("include", "/blog");
    cy.contains("UizzyTalks").should("be.visible");
    
    cy.get("input[data-test-id='input-post-search']").as("searchInput");
  })

  it("Show 'no results' when search term not found", () => {
    cy.get("@searchInput")
      .clear()
      .type("A example post who be not found");
    cy.contains("No posts were found").should("be.visible");
  });

  it("Navigate to post when search terms matches part of title", () => {
    cy.get("@searchInput")
      .clear()
      .type("Id est eu pariatur");
    cy.get("@searchInput").should("have.value", "Id est eu pariatur");

    cy.get("img[alt*='Uizzy Talks - Id est eu pariatur']").should("exist").click();

    cy.contains("English version test", { matchCase: false }).should("exist");
    cy.url().should("include", "/blog/post-test");
  });

})

"use server";

import { loadPosts } from "@/lib/loadPosts";

export default async function getBlogPosts() {
    const posts = await loadPosts("en");

    return {
        inputPlaceholder: "Search",
        noData: "No posts were found",
        posts: posts
    } as const;
}


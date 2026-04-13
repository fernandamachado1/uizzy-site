import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import getBlogPosts from "../../dictionaries/en/blog";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {

    const requested = await requestLocale;
    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale;

    const messages = (await import(`../../dictionaries/${locale}/index.ts`)).default;

    if(locale === "en") {
        const blogMessages = await getBlogPosts();
        messages.blog = blogMessages;
    }

    return {
        locale,
        messages
    }
})

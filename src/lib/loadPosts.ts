import fs from "fs";
import path from "path";

export async function loadPosts(locale: string) {

    const postsDir = path.join(process.cwd(), `dictionaries/${locale}/posts`);
    const files = fs.readdirSync(postsDir).filter(file => file.endsWith(".ts"));

    const posts: Record<string, any> = {};

    for (const file of files) {
        const module = await import(`../../dictionaries/${locale}/posts/${file}`);
        const data = module.default;
        posts[data.slug] = data;
    }

    return posts;
}

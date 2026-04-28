import type { Post } from "@/types/Post";
import { LinkOutlined } from "@ant-design/icons";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function PostTemplate(PostInfo: Post) {

    const staticTranslation = useTranslations("_static");

    const locale = useLocale();
    const postTranslation = locale === "en" ? useTranslations(`blog.posts.${PostInfo["slug"]}`) : null;
    
    function translate(translationKey: string, originalVersion: any) {
        if (locale === "en")
            if (translationKey === "content")
                return postTranslation?.rich("content", {
                    paragraph: (chunks) => <p>{chunks}</p>,
                    imagem: (chunks) => typeof chunks === 'string' ? <Image src={chunks} width={400} height={1000} alt="Imagem" /> : null,
                    link: (chunks) => <Link href="#test">{chunks}</Link>
                })
            else
                return postTranslation?.(translationKey);

        return originalVersion;
    }

    return <div className="post-container flex flex-col items-start pt-0 p-8 min-h-screen">

        <div className="flex flex-col gap-y-2 mb-8">
            <h2 className="text-3xl">
                {translate("title", PostInfo.title)}
            </h2>
            <p className="text-primary-5 text-sm my-1">
                {PostInfo.date.toLocaleDateString()}
            </p>

            <div className="flex items-center rounded-full p-2 gap-2 bg-primary-6 dark:bg-primary-5 w-fit">
                <div>
                    <Image src={PostInfo.author.photo} width={40} height={40} alt={`${PostInfo.author.name} Uizzy Talks`}
                        className="rounded-full"
                        style={{ aspectRatio: "auto 40 / 40 !important", height: "40px", objectFit: "cover" }} />
                </div>

                <div className="flex flex-col justify-center pr-2">
                    <h3 className="text-lg text-white font-bold -mb-1">{PostInfo.author.name}</h3>
                    <p className="font-light text-sm text-primary-4 dark:text-primary-9">
                        {translate("author.role", PostInfo.author.role)}
                    </p>
                </div>
            </div>
        </div>

        <div className="post-content gap-y-4 flex flex-col font-light mb-12">
            {/* {translate("content", PostInfo.content)} */}
            {translate("content", PostInfo.content)}
        </div>

        <div className="flex items-center justify-between w-full mt-auto">
            <div className="flex items-center justify-center gap-2">
                <div>
                    <Image src={PostInfo.author.photo} style={{ aspectRatio: "auto 40 / 40 !important", height: "40px", objectFit: "cover" }} width={40} height={40} alt={`${PostInfo.author.name} Uizzy Talks`}
                        className="rounded-full" />
                </div>

                <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-primary-6 dark:text-primary-7">{PostInfo.author.name}</h3>
                    <p className="text-sm font-light truncate">
                        {PostInfo.author.about ?
                            translate("author.about", PostInfo.author.about)
                            : staticTranslation("bioNotFound")
                        }
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-1 text-2xl">
                {
                    PostInfo.author.socialMedias?.map((social, i) =>
                        <Link key={i} href={social.url} target="_blank" title={`${PostInfo.author.name} Social Media`}>
                            {social.icon ?? <LinkOutlined />}
                        </Link>
                    )
                }
            </div>
        </div>

    </div>;
}

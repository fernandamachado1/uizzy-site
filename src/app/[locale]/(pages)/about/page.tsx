import CollaboratorCard from "@/components/CollaboratorCard";
import ButtonPrimary from "@/components/ButtonPrimary";
import EssenceCard from "@/components/EssenceCard";
import { LocaleProps } from "@/types/LocaleParams";
import { LinkedinFilled, RightOutlined } from "@ant-design/icons";
import { Metadata } from "next";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

const whatsappUrl = "https://wa.me/5541995868883";

export async function generateMetadata({ params }: LocaleProps): Promise<Metadata> {
    
    const { locale } = await params;

    const metaDataTranslation = await getTranslations({ locale, namespace: "_metadata" })
    return {
        title: metaDataTranslation("aboutTitle"),
        description: metaDataTranslation("aboutDescription"),
        alternates: {
            languages: {
                "pt-BR": "/about",
                "en": "/en/about",
            },
        },
    }
}

export default function About() {

    const translation = useTranslations("about");
    const titleParts = translation("aboutTitle").split(" ");
    const highlightedTitleWord = titleParts.pop() ?? "";
    const mainTitle = titleParts.join(" ");
    const narrativeItems = [
        {
            number: "01",
            title: translation("proofItem1Title"),
            description: translation("aboutDesc2"),
        },
        {
            number: "02",
            title: translation("proofItem2Title"),
            description: translation("aboutDesc3"),
        },
        {
            number: "03",
            title: translation("proofItem3Title"),
            description: translation("aboutDesc4"),
        },
    ];

    const visionGlyph = (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-7">
            <path
                d="M2.5 12c1.9-3.9 5.4-6.5 9.5-6.5s7.6 2.6 9.5 6.5c-1.9 3.9-5.4 6.5-9.5 6.5s-7.6-2.6-9.5-6.5Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle
                cx="12"
                cy="12"
                r="2.8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );

    const missionGlyph = (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-7">
            <circle
                cx="12"
                cy="12"
                r="7.8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="12" cy="12" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.7" />
            <path d="M12 2.8v3.1M12 18.1v3.1M21.2 12h-3.1M5.9 12H2.8" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
    );

    const valuesGlyph = (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-7">
            <path
                d="M12 2.8 20.2 8 12 21.2 3.8 8 12 2.8Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
            />
            <path
                d="M7.2 8.8 12 2.8l4.8 6-4.8 12.4-4.8-12.4Z"
                fill="none"
                stroke="currentColor"
                strokeOpacity="0.9"
                strokeWidth="1.2"
                strokeLinejoin="round"
            />
        </svg>
    );

    return <main className="relative overflow-hidden">
        <section className="relative overflow-hidden bg-primary-1 text-primary-10 dark:bg-[#12111A] dark:text-white">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-100 dark:hidden"
                style={{
                    background:
                        "radial-gradient(circle at 10% 10%, rgba(146, 113, 255, 0.12) 0%, rgba(255, 255, 255, 0) 34%), linear-gradient(90deg, #FFFFFF 0%, #F7F2FF 58%)",
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 hidden opacity-90 dark:block"
                style={{
                    background:
                        "radial-gradient(circle at 10% 10%, rgba(165, 131, 255, 0.12) 0%, rgba(0, 0, 0, 0) 34%), linear-gradient(90deg, #0E0F16 0%, #12111A 60%)",
                }}
            />
            <div className="container relative px-8 py-20 lg:px-16 lg:py-24 xl:py-28">
                <div className="grid w-full gap-14 xl:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.9fr)] xl:gap-18">
                    <div className="max-w-[760px]">
                        <p className="mb-5 text-sm font-semibold tracking-[0.26em] text-primary-6 uppercase dark:text-primary-9">
                            {translation("historyLabel")}
                        </p>

                        <h1 className="max-w-[760px] text-[clamp(3.2rem,8vw,6rem)] leading-[0.92] font-semibold tracking-[-0.05em]">
                            {mainTitle}{" "}
                            <span className="text-primary-5 dark:text-primary-9">{highlightedTitleWord}</span>
                        </h1>

                        <p className="mt-8 max-w-[700px] text-[clamp(1.05rem,1.8vw,1.5rem)] leading-[1.58] font-light text-primary-10/80 dark:text-white/82">
                            {translation("aboutDesc1")}
                        </p>

                        <div className="mt-10">
                            <Link href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex w-max">
                                <ButtonPrimary
                                    text={translation("aboutCta")}
                                    size="large"
                                    icon={<RightOutlined />}
                                    bgColor="!bg-primary-6"
                                />
                            </Link>
                        </div>
                    </div>

                    <div className="xl:pt-8">
                        <div className="space-y-0">
                            {narrativeItems.map((item) => (
                                <article
                                    key={item.number}
                                    className="grid gap-5 border-t border-primary-3/40 py-8 first:border-t-0 first:pt-0 last:pb-0 dark:border-white/10 sm:grid-cols-[72px_1fr]"
                                >
                                    <span className="text-[2rem] font-semibold leading-none tracking-[-0.06em] text-primary-5 dark:text-primary-9 sm:pt-1">
                                        {item.number}
                                    </span>

                                    <div className="max-w-[520px]">
                                        <h3 className="text-[clamp(1.55rem,2vw,2.1rem)]/[1.02] font-semibold tracking-[-0.04em] text-primary-10 dark:text-white">
                                            {item.title}
                                        </h3>
                                        <p className="mt-4 text-[clamp(1rem,1.2vw,1.15rem)] leading-[1.7] font-light text-primary-10/70 dark:text-white/72">
                                            {item.description}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="essence" className="relative overflow-hidden scroll-mt-[var(--header-height)] border-y border-[#6E5AC6]/25 text-white">
            <div
                aria-hidden
                className="absolute inset-0 dark:hidden"
                style={{
                    background:
                        "linear-gradient(180deg, #5F38B7 0%, #5735A8 100%)",
                }}
            />
            <div
                aria-hidden
                className="absolute inset-0 hidden dark:block"
                style={{
                    background:
                        "linear-gradient(180deg, #3E217C 0%, #311A66 100%)",
                }}
            />
            <div className="container relative px-8 py-20 lg:px-16 lg:py-28">
                <div className="mb-12 max-w-4xl">
                    <p className="mb-4 text-sm font-semibold tracking-[0.24em] text-white/72 uppercase">
                        {translation("essenceEyebrow")}
                    </p>
                    <h2 className="max-w-[9ch] text-[clamp(2.7rem,6vw,4.8rem)]/[0.94] font-semibold tracking-[-0.05em] text-white">
                        {translation("essenceTitle")}
                    </h2>
                    <p className="mt-6 max-w-lg text-[clamp(1.05rem,1.45vw,1.35rem)] leading-[1.68] font-light text-white/76">
                        {translation("essenceLead")}
                    </p>
                </div>

                <div className="grid xl:grid-cols-3">
                    <EssenceCard
                        icon={visionGlyph}
                        title={translation("visionTitle")}
                        description={translation("visionDesc")}
                    />

                    <EssenceCard
                        icon={missionGlyph}
                        title={translation("missionTitle")}
                        description={translation("missionDesc")}
                    />

                    <EssenceCard
                        icon={valuesGlyph}
                        title={translation("valuesTitle")}
                        description={translation("valuesDesc")}
                    />
                </div>
            </div>
        </section>

        <section className="bg-primary-1 text-primary-6 dark:bg-[#0D0914] dark:text-white">
            <div className="container px-8 py-20 lg:px-16 lg:py-28">
                <div className="grid gap-12 xl:grid-cols-[0.4fr_1fr] xl:gap-16">
                    <div>
                        <p className="mb-4 text-sm font-semibold tracking-[0.24em] text-primary-6/70 uppercase dark:text-primary-9/70">
                            Uizzy
                        </p>
                        <h2 className="text-[clamp(2.6rem,5vw,4rem)]/[0.96] font-semibold text-primary-6 dark:text-white">
                            {translation("ourTeam")}
                        </h2>
                    </div>

                    <div className="grid gap-x-12 lg:grid-cols-2">
                    <CollaboratorCard image={"/logo.svg"}
                        name="Ahmad Neto"
                        description="CEO - Chief Executive Officer" links={
                            [{
                                url: "https://linkedin.com",
                                icon: <LinkedinFilled />
                            }]
                        } />

                    <CollaboratorCard image={"/team/eduardo.svg"}
                        name="Eduardo Gandolfo"
                        description="CTO - Chief Tecnology Officer" links={
                            [{
                                url: "https://linkedin.com",
                                icon: <LinkedinFilled />
                            }]
                        } />

                    <CollaboratorCard image={"/logo.svg"}
                        name="Helena Hamdar"
                        description="Product Manager" links={
                            [{
                                url: "https://linkedin.com",
                                icon: <LinkedinFilled />
                            }]
                        } />

                    <CollaboratorCard image={"/team/fernanda.svg"}
                        name="Fernanda Machado"
                        description="Fullstack Developer" links={
                            [{
                                url: "https://linkedin.com",
                                icon: <LinkedinFilled />
                            }]
                        } />
                    </div>
                </div>
            </div>
        </section>

    </main>
}

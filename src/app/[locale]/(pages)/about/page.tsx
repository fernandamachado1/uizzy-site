import CollaboratorCard from "@/components/CollaboratorCard";
import EssenceCard from "@/components/EssenceCard";
import { LocaleProps } from "@/types/LocaleParams";
import { AimOutlined, EyeOutlined, LinkedinFilled, RubyOutlined } from "@ant-design/icons";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

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
        translation("aboutDesc2"),
        translation("aboutDesc3"),
        translation("aboutDesc4"),
    ];

    return <main className="relative overflow-hidden">
        <section className="relative min-h-[100dvh] overflow-hidden bg-primary-1 text-primary-10 dark:bg-primary-7 dark:text-white">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-100 dark:hidden"
                style={{
                    background:
                        "linear-gradient(90deg, #FFFFFF 0%, #F7F2FF 58%)",
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 hidden opacity-90 dark:block"
                style={{
                    background:
                        "linear-gradient(90deg, #15161D 0%, #13131A 60%)",
                }}
            />
            <div className="container relative flex min-h-[100dvh] items-center px-8 py-24 lg:px-16 lg:py-32">
                <div className="grid w-full gap-12 xl:grid-cols-[minmax(0,0.9fr)_minmax(420px,0.72fr)] xl:items-end xl:gap-20">
                    <div>
                        <p className="mb-5 text-sm font-semibold tracking-[0.24em] text-primary-6 uppercase dark:text-primary-9">
                            {translation("historyLabel")}
                        </p>

                        <h1 className="max-w-[760px] text-[clamp(3rem,7.5vw,5.4rem)] leading-[0.94] font-semibold">
                            {mainTitle}{" "}
                            <span className="text-primary-5 dark:text-primary-9">{highlightedTitleWord}</span>
                        </h1>

                        <p className="mt-9 max-w-[820px] text-[clamp(1.18rem,2vw,1.85rem)] leading-[1.48] font-light text-primary-10/88 dark:text-white/88">
                            {translation("aboutDesc1")}
                        </p>
                    </div>

                    <div className="border-l-0 border-primary-3/60 xl:border-l xl:pl-10 dark:border-primary-3/25">
                        <div className="mb-7 h-1 w-28 bg-primary-4 dark:bg-primary-8" />

                        <div className="space-y-7">
                            {narrativeItems.map((item, index) => (
                                <div key={item} className="grid gap-4 sm:grid-cols-[48px_1fr]">
                                    <span className="text-sm font-semibold tracking-[0.18em] text-primary-5/72 dark:text-primary-9/72">
                                        0{index + 1}
                                    </span>
                                    <p className="text-base leading-[1.72] font-light text-primary-10/76 md:text-lg dark:text-white/72">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="border-y border-primary-3/40 bg-primary-2 text-primary-6 dark:border-primary-3/20 dark:bg-primary-5 dark:text-white">
            <div className="container px-8 py-20 lg:px-16 lg:py-28">
                <div className="mb-12 max-w-4xl">
                    <p className="mb-4 text-sm font-semibold tracking-[0.24em] text-primary-6/70 uppercase dark:text-white/70">
                        Uizzy
                    </p>
                    <h2 className="text-[clamp(2.5rem,5vw,4rem)]/[0.98] font-semibold">
                        {translation("essenceTitle")}
                    </h2>
                </div>

                <div className="grid xl:grid-cols-3">
                <EssenceCard icon={<EyeOutlined />} 
                title={translation("visionTitle")}
                description={translation("visionDesc")} />

                <EssenceCard icon={<AimOutlined />} 
                title={translation("missionTitle")}
                description={translation("missionDesc")} />

                <EssenceCard icon={<RubyOutlined />} 
                title={translation("valuesTitle")}
                description={translation("valuesDesc")} />

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

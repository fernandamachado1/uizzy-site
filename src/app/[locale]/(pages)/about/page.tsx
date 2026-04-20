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

    return <main className="relative overflow-hidden">
        <section className="relative min-h-[100dvh] overflow-hidden bg-[#F8F6FC] pt-[var(--header-height)] text-primary-10 dark:bg-[#13131A] dark:text-white">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-100 dark:hidden"
                style={{
                    background:
                        "radial-gradient(65% 55% at 100% 18%, rgba(133,68,253,.12) 0%, rgba(248,246,252,0) 72%), radial-gradient(56% 42% at 0% 88%, rgba(133,68,253,.08) 0%, rgba(248,246,252,0) 70%), linear-gradient(90deg, #FDFDFF 0%, #F8F6FC 58%)",
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 hidden opacity-90 dark:block"
                style={{
                    background:
                        "radial-gradient(65% 50% at 100% 18%, rgba(133,68,253,.24) 0%, rgba(19,19,26,0) 72%), radial-gradient(54% 38% at 0% 88%, rgba(133,68,253,.16) 0%, rgba(19,19,26,0) 70%), linear-gradient(90deg, #15161D 0%, #13131A 60%)",
                }}
            />
            <div className="container relative min-h-[calc(100dvh_-_var(--header-height))] px-8 py-10 lg:px-16 lg:py-18">
                <div className="flex h-full flex-col justify-center">
                    <div className="w-full max-w-[1180px]">
                        <p className="mb-5 text-sm font-bold tracking-[0.12em] text-primary-6 uppercase dark:text-[#7D4CFF]">
                            {translation("historyLabel")}
                        </p>

                        <h1 className="mb-9 max-w-[760px] text-[clamp(3rem,7vw,6.2rem)] leading-[0.9] font-bold">
                            {mainTitle}{" "}
                            <span className="text-primary-6 dark:text-[#7D4CFF]">{highlightedTitleWord}</span>
                        </h1>

                        <p className="mb-10 max-w-[1060px] text-[clamp(1.7rem,2.1vw,3rem)] leading-[1.32] font-light text-primary-10/90 dark:text-white/92">
                            {translation("aboutDesc1")}
                        </p>

                        <div className="grid max-w-[1060px] gap-10 md:grid-cols-2 md:gap-14">
                            <div>
                                <div className="mb-4 h-1 w-14 bg-primary-6 dark:bg-[#7D4CFF]" />
                                <p className="text-[clamp(1.25rem,1.25vw,2rem)] leading-[1.46] font-light text-primary-10/76 dark:text-white/74">
                                    {translation("aboutDesc2")}
                                </p>
                            </div>

                            <div>
                                <div className="mb-4 h-1 w-14 bg-primary-6 dark:bg-[#7D4CFF]" />
                                <p className="text-[clamp(1.25rem,1.25vw,2rem)] leading-[1.46] font-light text-primary-10/76 dark:text-white/74">
                                    {translation("aboutDesc3")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-[#120338] text-white min-h-[100dvh] pt-[var(--header-height)]">
            <div className="container min-h-[calc(100dvh_-_var(--header-height))] flex flex-col justify-center xl:flex-row xl:items-end">
                <EssenceCard icon={<EyeOutlined />} 
                title={translation("visionTitle")}
                description={translation("visionDesc")} 
                className="xl:rounded-tl-2xl" />

                <div className="divider xl:hidden" style={{
                    background: `linear-gradient(
                to right, 
                #642FD6, 
                #642FD6 50%,
                transparent 50%,
                transparent 80%,
                #642FD6 80%,
                #642FD6 100%
                )`}}></div>

                <EssenceCard icon={<AimOutlined />} 
                title={translation("missionTitle")}
                description={translation("missionDesc")}
                className="xl:pt-48 xl:rounded-t-2xl xl:bg-[#471EB0]!" biggerText={true} />

                <div className="divider xl:hidden" style={{
                    background: `linear-gradient(
                to right, 
                #642FD6, 
                #642FD6 20%,
                transparent 20%,
                transparent 50%,
                #642FD6 50%,
                #642FD6 100%
                )`}}></div>

                <EssenceCard icon={<RubyOutlined />} 
                title={translation("valuesTitle")}
                description={translation("valuesDesc")}
                className="xl:rounded-tr-2xl" />

            </div>
        </section>

        <section className="p-8 dark:text-white dark:bg-neutral-3 text-center min-h-[100dvh] pt-[var(--header-height)]">
            <div className="container min-h-[calc(100dvh_-_var(--header-height))] flex flex-col justify-center">
                <h2 className="text-5xl/[92%] font-bold text-[#2F118A] dark:text-[#EFE4FA] mb-8">
                    {translation("ourTeam")}
                </h2>

                <div className="flex flex-col items-center justify-center lg:flex-wrap lg:flex-row lg:justify-start gap-y-12">
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
        </section>

    </main>
}

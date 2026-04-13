import CollaboratorCard from "@/components/CollaboratorCard";
import EssenceCard from "@/components/EssenceCard";
import { LocaleProps } from "@/types/LocaleParams";
import { AimOutlined, EyeOutlined, LinkedinFilled, RubyOutlined } from "@ant-design/icons";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export async function generateMetadata({ params }: LocaleProps): Promise<Metadata> {
    
    const { locale } = await params;

    const metaDataTranslation = await getTranslations({ locale, namespace: "_metadata" })
    return {
        title: metaDataTranslation("aboutTitle"),
        description: metaDataTranslation("aboutDescription"),
    }
}

export default function About() {

    const translation = useTranslations("about");

    return <main className="relative overflow-hidden">
        <section className="about min-h-[100dvh] pt-[var(--header-height)] px-8 pb-8 dark:text-white dark:bg-neutral-3">
            <div className="container min-h-[calc(100dvh_-_var(--header-height))] flex flex-col justify-center">

                <Image src="/logo.svg" width={125} height={200} alt="Logo Uizzy"
                    className="absolute rotate-45 -right-5 top-15
                    lg:-right-10 lg:-top-5 lg:w-60 
                    xl:top-0 xl:w-90" />

                <h1 className="text-6xl/[92%] font-semibold max-w-10 mb-8 xl:max-w-150">
                    {translation("aboutTitle")}
                </h1>

                <p>{translation("aboutDesc1")}</p>

                <p>{translation("aboutDesc2")}</p>

                <p>{translation("aboutDesc3")}</p>

                <p>{translation("aboutDesc4")}</p>

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

"use client"

import { ConfigProvider, theme } from "@/lib/antd"
import Footer from "./Footer"
import Header from "./header"

import { AppContextType, ThemeOption } from "@/types/AppContextType"
import { LinkedinFilled } from "@ant-design/icons"
import { useLocale } from "next-intl"
import { DM_Sans } from "next/font/google"
import Image from "next/image"
import { useState } from "react"
import Context from "./AppContext"

const dmSans = DM_Sans({
    variable: "--font-dm-sans",
    preload: true,
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900", "1000"],
    subsets: ["latin"],
});

export default function AppProvider({ children }: { children: React.ReactNode }) {

    const locale = useLocale();

    const [themeValue, setThemeValue] = useState<ThemeOption>("light");

    const contextConfig: AppContextType = {
        themeContext: { themeValue, setThemeValue },
        blogContext: {
            posts: [
                {
                    title: "Id est eu pariatur qui ex irure excepteur nostrud enim aute incididunt.",
                    thumbnail: "/thumbnail.svg",
                    author: {
                        name: "Guilherme",
                        photo: "https://img.freepik.com/vetores-gratis/ilustracao-do-jovem-sorridente_1308-174669.jpg?semt=ais_hybrid&w=740&q=80",
                        role: "Desenvolvedor Fullstack",
                        socialMedias: [
                            {
                                url: "https://linkedin.com/",
                                icon: <LinkedinFilled />
                            },
                            {
                                url: "https://linkedin.com/",
                                icon: <LinkedinFilled />
                            },
                            {
                                url: "https://linkedin.com/",
                                icon: <LinkedinFilled />
                            },
                        ]
                    },
                    content: <>
                        <p>Laborum voluptate officia proident laboris eu consectetur elit occaecat nisi laboris occaecat aliqua ea. Ullamco ullamco nostrud dolor esse aliqua irure duis enim aliquip esse aliqua. Cupidatat incididunt nisi nostrud laborum amet ut do.</p>
                        <p>Duis ullamco incididunt reprehenderit eiusmod officia sint aliquip nisi consectetur labore occaecat veniam tempor.</p>
                        <Image src="https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=" width={400} height={1000} alt="Imagem" />
                        <p>Duis ullamco incididunt reprehenderit eiusmod officia sint aliquip nisi consectetur labore occaecat veniam tempor <a className="font-black underline" href='https://google.com/'>Click Here</a>.</p>
                    </>,
                    date: new Date("2024-01-01T00:00:00.000Z"),
                    slug: "post-test"
                },

            ]
        }
    }

    return <Context value={contextConfig}>

        <html lang={locale}>
            <body suppressHydrationWarning className={`${dmSans.variable} antialiased bg-neutral-1`}>

                <ConfigProvider theme={{
                    algorithm: themeValue === "light" ? theme.defaultAlgorithm : theme.darkAlgorithm,
                    token: {
                        fontFamily: "var(--font-dm-sans), Arial, sans-serif",
                    },
                    components: {
                        Radio: {
                            buttonSolidCheckedBg: "var(--primary-6)",
                            buttonSolidCheckedActiveBg: "var(--primary-6)",
                            buttonSolidCheckedHoverBg: "var(--primary-6)",
                            buttonBg: "white",
                            buttonColor: "black",
                            colorPrimary: "var(--primary-6)"
                        },
                        Menu: {
                            itemSelectedBg: "#8544fd90",
                            itemSelectedColor: "var(--primary-10)",
                            itemHoverBg: "#8544fd6d",
                        },
                        Tabs: {
                            inkBarColor: "var(--primary-5)",
                            itemSelectedColor: "var(--primary-7)",
                            itemHoverColor: "var(--primary-7)",
                            horizontalItemPadding: "4px",
                            horizontalMargin: "0",
                        },
                        Switch: {
                            colorPrimary: "var(--primary-6)",
                            colorPrimaryBorder: "var(--primary-7)",
                            colorPrimaryBorderHover: "var(--primary-8)",
                            colorPrimaryHover: "var(--primary-7)"
                        },
                    }
                }}>
                    <Header />

                    {children}

                    <Footer />
                </ConfigProvider>

            </body>
        </html>

    </Context>
}

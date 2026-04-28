"use client"

import { MenuOutlined } from "@ant-design/icons";
import type { TabsProps } from "@/lib/antd";
import { Button, ConfigProvider, Tabs } from "@/lib/antd";
import Image from "next/image";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useEffect, useState } from "react";
import LanguagesHandler from "../LanguagesHandler";
import MobileMenu from "../MobileMenu";
import ThemeButton from "../ThemeButton";
import { useNavItems } from "./props/NavItemsProps";

export default function Header() {

    const router = useRouter();
    const pathname = usePathname();

    const menuItems = useNavItems();

    const [selectedMenuItem, setSelectedNavItem] = useState<string>("home");
    const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);

    const toggleNavMobile = () => {
        setIsNavMobileOpen(!isNavMobileOpen);
    }

    useEffect(() => {
        const segment = pathname.split("/")[1] || "";
        setSelectedNavItem(segment);

    }, [pathname])

    return <div className="mb-12">

        <MobileMenu isNavMobileOpen={isNavMobileOpen} toggleNavMobile={toggleNavMobile} selectedNavItem={selectedMenuItem} />

        <header className="px-4 xl:px-8 py-2 fixed top-0 w-full bg-primary-1/90 backdrop-blur-md z-9999999 dark:bg-black flex items-center justify-between gap-x-3">
            <div className="flex gap-x-3 items-center">
                <ConfigProvider theme={{
                    components: {
                        Button: {
                            defaultHoverBg: "var(--neutral-5)",
                            defaultHoverBorderColor: "none",
                            defaultHoverColor: "var(--primary-6)",
                            defaultActiveBorderColor: "var(--primary-7)",
                            defaultActiveColor: "var(--primary-6)"
                        },
                    }
                }}>
                    <Button icon={<MenuOutlined />} data-test-id="btn-nav-mobile" onClick={() => toggleNavMobile()} className="xl:hidden!"></Button>
                </ConfigProvider>

                <Link href="/" title="Home Uizzy" className="flex items-center gap-x-2">
                    <Image src="/logo.svg" width={30} height={24} alt="Logo Uizzy" />
                    <h1 className="hidden xl:block font-bold text-3xl text-primary-6 dark:text-white">uizzy</h1>
                </Link>
            </div>

            <div className="flex gap-3 items-center">
                <Tabs activeKey={selectedMenuItem} items={menuItems as TabsProps['items']}
                className="hidden! xl:block! xl:mr-4!"
                tabBarStyle={{ alignItems: "center", justifyContent: "center" }}
                onChange={(key) => {
                    setSelectedNavItem(key);
                    router.push(key ? `/${key}` : "/");
                }}/>

                <LanguagesHandler />
                
                <ThemeButton className="hidden xl:block" />
            </div>
        </header>

    </div>

}

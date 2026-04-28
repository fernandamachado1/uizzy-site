import { Menu } from "@/lib/antd";
import Image from "next/image";
import { useRouter } from "@/i18n/navigation";
import { useEffect, useState } from "react";
import { MenuItem, useNavItems } from "./default/props/NavItemsProps";
import ThemeButton from "./ThemeButton";

interface IMobileMenuProps {
    isNavMobileOpen: boolean,
    toggleNavMobile: () => void,
    selectedNavItem: string
}

export default function MobileMenu({ isNavMobileOpen, toggleNavMobile, selectedNavItem }: IMobileMenuProps) {

    const router = useRouter();
    const menuItems = useNavItems();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return <div>
        <div className={`nav-mobile-bg z-99999999
                bg-black/30 w-full h-screen
                fixed inset-0
                transition duration-500 ease-in-out
                ${isNavMobileOpen ? "block! opacity-100" : "opacity-0 pointer-events-none"}`} onClick={() => toggleNavMobile()}>
        </div>

        <div className={`nav-mobile z-999999999
            w-1.5/2 h-screen bg-primary-1 dark:bg-black
            fixed -left-full top-0
            flex flex-col items-start px-4 py-12 gap-y-8
            transition-[left] duration-500 ease-in-out
            ${isNavMobileOpen && "left-0"}`} onClick={(e) => e.stopPropagation()}>
            <div className="flex mx-auto items-center justify-center gap-2">
                <Image src="/logo.svg" width={64} height={64} alt="Logo Uizzy" />
                <h1 className="text-5xl font-bold text-primary-6 dark:text-white">uizzy</h1>
            </div>

            {isMounted && (
                <Menu
                    style={{ backgroundColor: "transparent", border: "none", fontFamily: "DM Sans" }}
                    selectedKeys={[selectedNavItem ?? ""]}
                    mode="inline"
                    items={menuItems as MenuItem[]}
                    onSelect={(info) => {
                        toggleNavMobile();
                        router.push(info.key ? `/${info.key}` : "/");
                    }}
                />
            )}

            <ThemeButton className="mt-auto" />
        </div>
    </div>
}

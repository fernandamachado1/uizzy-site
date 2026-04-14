"use client"

import { LinkedinFilled } from "@ant-design/icons";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {

    const translation = useTranslations("_static");

    return <footer className="
        flex flex-col items-center justify-center
        border-t border-primary-3/40 dark:border-primary-3/30
        bg-primary-2 dark:bg-primary-1
        text-primary-10 dark:text-[#F3E8FF]
        p-4 gap-y-2"
    >
        <div className="flex items-center justify-center gap-x-2 text-2xl">
            <Link href="https://www.linkedin.com/company/uizzy/" target="_blank" title="Uizzy LinkedIn">
                <LinkedinFilled />
            </Link>
        </div>

        <div className="flex items-center justify-center gap-x-2">
            <Image src="/logo.svg" width={20} height={20} className="lg:w-8" alt="Logo Uizzy" />

            <p className="font-semibold">© {translation("footer")}</p>
        </div>
    </footer>
}

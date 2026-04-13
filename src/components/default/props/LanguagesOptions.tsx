import { MenuProps } from "@/lib/antd";
import Image from "next/image";

export const LanguagesOptions: MenuProps["items"] = [
    {
        key: "en",
        label: <div className="flex items-center gap-2 justify-center xl:justify-start">
            <Image src="/flags/en.png" width={16} height={16} alt="Language English" />
            <p className="hidden xl:block">English</p>
        </div>,
        style: {
            width: "100%"
        }
    },
    {
        key: "pt",
        label: <div className="flex items-center gap-2 justify-center xl:justify-start">
            <Image src="/flags/pt.png" width={16} height={16} alt="Idioma Português Brasileiro" />
            <p className="hidden xl:block">Português</p>
        </div>,
        style: {
            width: "100%"
        }
    }
]

"use client"

import { MenuProps, TabsProps } from "@/lib/antd";
import { useTranslations } from "next-intl";

export type MenuItem = Required<MenuProps>["items"][number];

export function useNavItems(): MenuItem[] | TabsProps['items'] {

    const staticTranslation = useTranslations("_static");

    return [
        {
            key: "",
            label: staticTranslation("navHome"),
        },
        {
            key: "about",
            label: staticTranslation("navAboutUs"),
        }
    ]
}

"use client"

import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Switch } from "@/lib/antd";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useAppContext } from "./default/AppContext";

export default function ThemeButton({ className }: { className?: string }) {

    const staticTranslation = useTranslations("_static");

    const { themeContext } = useAppContext();

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark").matches;

        const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);
        setIsDarkMode(shouldBeDark);
        themeContext.setThemeValue(shouldBeDark ? "dark" : "light")

        document.documentElement.classList.toggle("dark", shouldBeDark);
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDarkMode;

        setIsDarkMode(newTheme);

        document.documentElement.classList.toggle("dark", newTheme);
        localStorage.setItem("theme", newTheme ? "dark" : "light");
        themeContext.setThemeValue(newTheme ? "dark" : "light")

    }

    return <ConfigProvider theme={{
        components: {
            Button: {
                defaultBg: "transparent",
                lineWidth: 0,
                defaultShadow: "none",
                defaultHoverColor: "var(--primary-6)",
                defaultActiveColor: "var(--primary-6)",
                defaultHoverBg: "var(--neutral-5)",
                defaultHoverBorderColor: 'none'
            }
        }
    }}>
        <div className={`relative ${className}`}>
            <Button icon={isDarkMode ? <MoonOutlined /> : <SunOutlined />}
                onClick={toggleTheme}
                className="w-auto pr-11! justify-start! xl:border-1!">
                {isDarkMode ? staticTranslation("darkMode") : staticTranslation("lightMode")}
            </Button>

            <Switch size="small"
                className="absolute! top-[50%] right-2"
                style={{ transform: "translate(0, -45%)"}}
                checked={isDarkMode}
                onChange={toggleTheme}
                onClick={(_, e) => e.stopPropagation()} />
        </div>
    </ConfigProvider>
}

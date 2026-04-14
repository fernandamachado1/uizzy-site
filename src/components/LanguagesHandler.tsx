import { DownOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Dropdown } from "@/lib/antd";
import { useLocale } from "next-intl";
import Image from "next/image";
import { usePathname, useRouter } from "@/i18n/navigation";
import { LanguagesOptions } from "./default/props/LanguagesOptions";

export default function LanguagesHandler() {

    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();

    function setLocale(locale: "en" | "pt") {
        router.replace(pathname, { locale });
    }

    return <ConfigProvider theme={{
        components: {
            Button: {
                defaultBg: "transparent",
                defaultHoverBg: "var(--neutral-5)",
                defaultHoverBorderColor: "none",
                defaultHoverColor: "var(--primary-6)",
                defaultActiveBorderColor: "none",
                defaultActiveColor: "var(--primary-7)",
                defaultShadow: "none"
            },
            Dropdown: {
                controlItemBgActive: "#8544fd90",
                controlItemBgActiveHover: "#8544fd6d",
                controlItemBgHover: "#8544fd6d",
                colorPrimary: "var(--primary-10)",
            }
        }
    }}>

        <Dropdown
            trigger={["click"]}
            menu={{
                items: LanguagesOptions,
                selectable: true,
                selectedKeys: [locale],
                style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "4px"
                },
                onClick: (info) => setLocale(info.key as "en" | "pt")
            }}
            className="px-2!"
            overlayStyle={{ zIndex: 1200 }}
        >
            <Button iconPosition="end" icon={<DownOutlined />}>
                <p className="hidden xl:block mx-1">
                    {
                        locale === "en"
                            ? "English"
                            : "Português"
                    }
                </p>

                <Image src={`/flags/${locale}.png`} width={16} height={16} alt="language en" />
            </Button>
        </Dropdown>

    </ConfigProvider>
}

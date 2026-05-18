import { IButtonPrimary } from "@/interfaces/ButtonPrimary";
import { Button, ConfigProvider } from "@/lib/antd";

export default function ButtonPrimary({ bgColor, text, icon, size, className }: IButtonPrimary) {
    return <ConfigProvider theme={{
            components: {
                Button: {
                    defaultHoverBorderColor: "var(--primary-7)",
                    defaultColor: "white",
                    defaultHoverColor: "currentColor",
                    defaultBorderColor: "none",
                    defaultActiveColor: "currentColor",
                    defaultActiveBorderColor: "var(--primary-9)"
            }
        }
    }}>
        <Button size={size ?? "middle"} icon={icon ?? null} className={`${bgColor} ${className}`}>
            {text}
        </Button>
    </ConfigProvider>
}

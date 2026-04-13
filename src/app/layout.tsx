import "../components/carousel/embla.css";
import "./globals.css";

type Props = {
    children: Readonly<React.ReactNode>;
}

export default async function RootLayout({ children }: Props) {
    return children;
}

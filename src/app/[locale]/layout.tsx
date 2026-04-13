import AppProvider from "@/components/default/AppProvider";
import { routing } from "@/i18n/routing";
import { LocaleProps } from "@/types/LocaleParams";
import { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: LocaleProps): Promise<Metadata> {
  
  const { locale } = await params;

  const metaDataTranslation = await getTranslations({ locale, namespace: "_metadata" })
  return {
    title: metaDataTranslation("defaultTitle"),
    description: metaDataTranslation("defaultDescription"),
    openGraph: {
      title: metaDataTranslation("defaultTitle"),
      description: metaDataTranslation("defaultDescription"),
      url: "https://uizzy.com.br",
      siteName: "Uizzy",
      type: "website",
      images: [
        {
          width: 1200,
          height: 630,
          url: "https://uizzy.com.br/og-image.png"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      images: [
        "https://uizzy.com.br/og-image.png"
      ]
    }
  }

}

type Props = {
  children: Readonly<React.ReactNode>;
  params: Promise<{
    locale: string;
  }>
}

export default async function RootLayout({ children, params }: Props) {

  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }


  return (
    <NextIntlClientProvider locale={locale}>
      <AppProvider>
        {children}
      </AppProvider>
    </NextIntlClientProvider>
  );
}

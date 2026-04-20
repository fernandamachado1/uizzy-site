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
    metadataBase: new URL("https://uizzy.com.br"),
    title: metaDataTranslation("defaultTitle"),
    description: metaDataTranslation("defaultDescription"),
    applicationName: "Uizzy",
    creator: "Uizzy",
    publisher: "Uizzy",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
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

  const metaDataTranslation = await getTranslations({ locale, namespace: "_metadata" });
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Uizzy",
    url: "https://uizzy.com.br",
    logo: "https://uizzy.com.br/logo.svg",
    description: metaDataTranslation("defaultDescription"),
    sameAs: ["https://www.linkedin.com/company/uizzy/"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+55 41 3083-9600",
        contactType: "customer support",
        areaServed: "BR",
        availableLanguage: ["pt-BR", "en"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+41 99586-8883",
        contactType: "customer support",
        areaServed: "BR",
        availableLanguage: ["pt-BR", "en"],
      },
    ],
  } as const;

  return (
    <NextIntlClientProvider locale={locale}>
      <AppProvider>
        <script
          type="application/ld+json"
          // JSON-LD can live in the body; Google still reads it and it won't affect UI.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </AppProvider>
    </NextIntlClientProvider>
  );
}

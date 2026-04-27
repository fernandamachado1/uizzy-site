import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import HomeClient, { type HomeClientMessages } from "./HomeClient";
import { LocaleProps } from "@/types/LocaleParams";

export async function generateMetadata({ params }: LocaleProps): Promise<Metadata> {
  const { locale } = await params;
  const canonical = locale === "en" ? "/en" : "/";

  return {
    alternates: {
      canonical,
      languages: {
        "pt-BR": "/",
        "en": "/en",
      },
    },
    openGraph: {
      locale: locale === "en" ? "en_US" : "pt_BR",
      alternateLocale: locale === "en" ? ["pt_BR"] : ["en_US"],
    },
  };
}

export default async function Home({ params }: LocaleProps) {
  const { locale } = await params;

  const tHome = await getTranslations({ locale, namespace: "home" });
  const tStatic = await getTranslations({ locale, namespace: "_static" });

  const messages: HomeClientMessages = {
    _static: {
      seeMore: tStatic("seeMore"),
    },
    home: {
      heroEyebrow: tHome("heroEyebrow"),
      hero: tHome("hero"),
      heroDesc: tHome("heroDesc"),
      heroPrimaryCta: tHome("heroPrimaryCta"),
      heroSecondaryCta: tHome("heroSecondaryCta"),
      heroProof1: tHome("heroProof1"),
      heroProof2: tHome("heroProof2"),
      heroProof3: tHome("heroProof3"),
      meetUizzy: tHome("meetUizzy"),
      meetUizzyDesc: tHome("meetUizzyDesc"),
      aboutCard1Title: tHome("aboutCard1Title"),
      aboutCard1Desc: tHome("aboutCard1Desc"),
      aboutCard2Title: tHome("aboutCard2Title"),
      aboutCard2Desc: tHome("aboutCard2Desc"),
      aboutCard3Title: tHome("aboutCard3Title"),
      aboutCard3Desc: tHome("aboutCard3Desc"),
      aboutEyebrow: tHome("aboutEyebrow"),
      ourServices: tHome("ourServices"),
      servicesEyebrow: tHome("servicesEyebrow"),
      servicesIntro: tHome("servicesIntro"),
      designDesc: tHome("designDesc"),
      development: tHome("development"),
      developmentDesc: tHome("developmentDesc"),
      contactEyebrow: tHome("contactEyebrow"),
      whereTitle: tHome("whereTitle"),
      whereDesc: tHome("whereDesc"),
      whereCity: tHome("whereCity"),
      whereScheduling: tHome("whereScheduling"),
      whereCta: tHome("whereCta"),
      whereWhatsAppLabel: tHome("whereWhatsAppLabel"),
      wherePhoneLabel: tHome("wherePhoneLabel"),
    },
  };

  return <HomeClient messages={messages} />;
}

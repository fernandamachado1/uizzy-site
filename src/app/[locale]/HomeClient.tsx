"use client"

import Ball from "@/components/Ball";
import ButtonPrimary from "@/components/ButtonPrimary";
// import Carousel from "@/components/carousel/Carousel";
import { ClockCircleOutlined, EnvironmentOutlined, PhoneOutlined, RightOutlined, WhatsAppOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export type HomeClientMessages = {
  _static: {
    seeMore: string;
  };
  home: {
    hero: string;
    heroDesc: string;
    heroCtaPrimary: string;
    heroCtaSecondary: string;
    meetUizzy: string;
    meetUizzyDesc: string;
    meetUizzyTag: string;
    ourServices: string;
    ourServicesTag: string;
    ourServicesDesc: string;
    designDesc: string;
    development: string;
    developmentDesc: string;
    whereTag: string;
    whereTitle: string;
    whereDesc: string;
    whereCity: string;
    whereScheduling: string;
    whereCta: string;
    whereWhatsAppLabel: string;
    wherePhoneLabel: string;
  };
};

const mapsQueryUrl = "https://www.google.com/maps/search/?api=1&query=-25.4352558,-49.2785467";
const mapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.0899596797894!2d-49.27854670000001!3d-25.435255800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce473798ef84b%3A0x36a39506f4f0c152!2sUIZZY%20Tecnologia%20Intuitiva!5e0!3m2!1spt-BR!2sbr!4v1776705081205!5m2!1spt-BR!2sbr";
const whatsappUrl = "https://wa.me/5541995868883";
const phoneUrl = "tel:+554130839600";

export default function HomeClient({ messages }: { messages: HomeClientMessages }) {
  const t = messages.home;
  const sectionEyebrowClass = "mb-4 text-sm font-semibold uppercase tracking-[0.24em]";

  const serviceCopy = useMemo(
    () => ({
      design: { title: "Design UI/UX", description: t.designDesc },
      development: { title: t.development, description: t.developmentDesc },
    }),
    [t.designDesc, t.development, t.developmentDesc],
  );

  const [service, setService] = useState<{ title: string; description: string }>(serviceCopy.design);

  return (
    <main>
      <section className="relative bg-primary-2 text-primary-6 min-h-[100dvh] overflow-hidden dark:bg-primary-5 dark:text-white">
        <div className="container mx-auto relative flex min-h-[100dvh] flex-col gap-8 px-6 pb-0 pt-4 sm:px-8 sm:pt-6 lg:px-16 xl:flex-row xl:items-stretch xl:gap-14 xl:py-10">
          <div className="relative z-10 flex flex-col justify-start pt-6 sm:pt-8 xl:flex-1 xl:max-w-[560px] xl:justify-center xl:pt-0">
            <p className={`${sectionEyebrowClass} text-primary-6/70 dark:text-white/70`}>Uizzy Tecnologia</p>
            <h1 className="max-w-[10.5ch] font-[700] text-[clamp(1.95rem,9.5vw,3.9rem)] leading-[0.98] tracking-[-0.05em] sm:max-w-none sm:text-[clamp(2.25rem,6.5vw,3.9rem)]">
              {t.hero}
            </h1>
            <p className="mt-5 max-w-[480px] text-[clamp(0.98rem,3.7vw,1.55rem)] font-[400] leading-[1.4] text-primary-6/90 dark:text-white/90 sm:mt-6 sm:text-[clamp(1.05rem,2.7vw,1.55rem)]">
              {t.heroDesc}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
              <Link href={whatsappUrl} target="_blank" rel="noreferrer" className="w-max">
                <ButtonPrimary
                  text={t.heroCtaPrimary}
                  size="large"
                  icon={<WhatsAppOutlined />}
                  bgColor="!bg-primary-6"
                />
              </Link>

              <Link href="#services" className="w-max">
                <ButtonPrimary
                  text={t.heroCtaSecondary}
                  size="large"
                  icon={<RightOutlined />}
                  bgColor="!bg-transparent"
                  className="!border !border-primary-6/20 !bg-primary-1/70 !text-primary-6 hover:!border-primary-6/35 hover:!bg-primary-1/90 dark:!border-primary-1/30 dark:!bg-primary-1/10 dark:!text-white dark:hover:!border-primary-1/50 dark:hover:!bg-primary-1/15"
                />
              </Link>
            </div>

          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex justify-center px-6 sm:px-8 xl:static xl:flex-1 xl:items-end xl:justify-end xl:px-0">
            <div className="relative h-full w-full max-w-[420px] sm:max-w-[560px] lg:max-w-[680px] xl:max-w-[780px]">
              <div
                className="absolute right-[-88px] bottom-[-84px] h-[clamp(280px,88vw,560px)] w-[clamp(280px,88vw,560px)] rounded-full bg-primary-4 opacity-55 sm:right-[30px] sm:bottom-[-120px] xl:right-[68px] xl:bottom-[-122px] dark:bg-primary-6 dark:opacity-90"
                aria-hidden
              />
              <div className="relative z-10 flex h-full items-end justify-center overflow-visible xl:top-[50px]">
                <Image
                  src="/hero.svg"
                  width={1400}
                  height={2200}
                  quality={600}
                  sizes="(min-width: 1280px) 780px, (min-width: 1024px) 92vw, 92vw"
                  className="h-auto w-full object-contain sm:w-[94%] xl:w-full"
                  alt="Uizzy Ester"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-primary-1 dark:bg-black text-primary-10 relative z-1 overflow-hidden min-h-[100dvh] pt-[var(--header-height)] scroll-mt-[var(--header-height)]">
        <div className="container flex min-h-[calc(100dvh_-_var(--header-height))] items-center px-8 py-24 lg:px-16 lg:py-32 xl:py-40">
          <div className="relative w-full max-w-4xl">
            <div className="absolute left-[-8%] top-[-8%] h-44 w-44 rounded-full bg-primary-2/70 blur-3xl dark:bg-primary-3/20" aria-hidden />

            <div className="relative">
              <p className={`${sectionEyebrowClass} text-primary-6 dark:text-primary-9`}>{t.meetUizzyTag}</p>

              <h2 className="mt-6 max-w-4xl text-[clamp(3rem,7.5vw,4.8rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-primary-10 dark:text-white">
                <span>{t.meetUizzy.split(" ").slice(0, -1).join(" ")}</span>{" "}
                <span className="bg-gradient-to-r from-primary-5 via-primary-4 to-primary-6 bg-clip-text text-transparent">
                  {t.meetUizzy.split(" ").slice(-1).join(" ")}
                </span>
              </h2>

              <p className="mt-10 max-w-3xl text-[clamp(1.15rem,2.2vw,1.65rem)] leading-[1.6] text-primary-9/90 dark:text-primary-10/86">
                {t.meetUizzyDesc}
              </p>

              <div className="mt-10">
                <Link href="about" className="w-max">
                  <ButtonPrimary
                    text={messages._static.seeMore}
                    size="large"
                    icon={<RightOutlined />}
                    bgColor="!bg-primary-6"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Ball
          size="size-70 lg:size-90 xl:size-130"
          bg="bg-primary-3 dark:bg-primary-3 opacity-40"
          position="top-[15%] left-[85%] sm:left-[78%] md:left-[71%] lg:left-[80%] xl:left-[78%]"
        />

        <Ball size="size-70 lg:size-120 xl:size-170" bg="bg-primary-3 dark:bg-primary-3" position="top-[50%] left-[50%]" />

        <Ball
          size="size-70 lg:size-90 xl:size-130"
          bg="bg-primary-3 dark:bg-primary-3 opacity-40"
          position="top-[85%] left-[15%] sm:left-[22%] md:left-[29%] lg:left-[20%] xl:left-[22%]"
        />
      </section>

      <section id="services" className="bg-primary-2 text-primary-6 min-h-[100dvh] pt-[var(--header-height)] scroll-mt-[var(--header-height)] dark:bg-primary-5 dark:text-white">
        <div className="container flex min-h-[calc(100dvh_-_var(--header-height))] flex-col px-8 py-12 lg:px-16 lg:py-16">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
            <p className={`${sectionEyebrowClass} text-primary-6/70 dark:text-white/70`}>{t.ourServicesTag}</p>

            <h2 className="mt-6 text-center text-[clamp(2.85rem,7.5vw,4.8rem)] font-semibold leading-[0.94] tracking-[-0.04em] text-primary-6 dark:text-white">
              <span>{t.ourServices.split(" ")[0]}</span>{" "}
              <span className="text-primary-5 dark:text-primary-2">
                {t.ourServices.split(" ").slice(1).join(" ")}
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-[1.6] text-primary-6/85 sm:text-xl dark:text-white/88">
              {t.ourServicesDesc}
            </p>

            <div className="!mt-8 !mb-10 inline-flex rounded-full bg-primary-6 p-1 shadow-sm dark:bg-primary-8">
              <button
                type="button"
                onClick={() => setService(serviceCopy.design)}
                className={`rounded-full px-5 py-3 text-sm font-medium transition-colors ${
                  service.title === "Design UI/UX"
                    ? "bg-primary-8 text-white shadow-sm dark:bg-primary-6"
                    : "bg-transparent text-primary-1/72 hover:text-white dark:text-white/72 dark:hover:text-white"
                }`}
              >
                Design UI/UX
              </button>

              <button
                type="button"
                onClick={() => setService(serviceCopy.development)}
                className={`rounded-full px-5 py-3 text-sm font-medium transition-colors ${
                  service.title === t.development
                    ? "bg-primary-8 text-white shadow-sm dark:bg-primary-6"
                    : "bg-transparent text-primary-1/72 hover:text-white dark:text-white/72 dark:hover:text-white"
                }`}
              >
                {t.development}
              </button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-5xl">
            <p className="text-[clamp(1.5rem,2.5vw,2.4rem)] font-semibold text-primary-6 dark:text-white">{service.title}</p>
            <div className="mb-6 mt-1 h-1 w-20 bg-primary-4 lg:mt-2 lg:w-50 dark:bg-primary-2"></div>

            <p className="max-w-[75%] text-lg font-light text-primary-6/90 lg:max-w-[85%] lg:text-xl dark:text-white/88" dangerouslySetInnerHTML={{ __html: service.description }} />
          </div>
        </div>
      </section>

      <section id="contact" className="bg-primary-2 dark:bg-black text-primary-10 dark:text-primary-10 relative overflow-hidden border-t border-primary-3/40 dark:border-primary-3/20 scroll-mt-[var(--header-height)]">
        <div className="container px-8 py-16 lg:px-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className={`${sectionEyebrowClass} text-primary-6 dark:text-primary-9`}>{t.whereTag}</p>
              <h2 className="text-[clamp(2.5rem,5vw,4rem)]/[1] font-semibold">{t.whereTitle}</h2>

              {/* <p className="mt-5 text-lg font-light text-primary-10/80 dark:text-[#F3E8FF]/85 lg:text-xl">{t.whereDesc}</p> */}

              <div className="mt-7 flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <EnvironmentOutlined className="mt-1 text-primary-6 dark:text-primary-9" />
                  <p className="text-base font-light lg:text-lg">{t.whereCity}</p>
                </div>

                <div className="flex items-start gap-3">
                  <ClockCircleOutlined className="mt-1 text-primary-6 dark:text-primary-9" />
                  <p className="text-base font-light lg:text-lg">{t.whereScheduling}</p>
                </div>

                <div className="flex items-start gap-3">
                  <WhatsAppOutlined className="mt-1 text-primary-6 dark:text-primary-9" />
                  <p className="text-base font-light lg:text-lg">
                    <Link
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-primary-6/40 underline-offset-4 hover:decoration-primary-6"
                      aria-label={`${t.whereWhatsAppLabel}: 41 99586-8883`}
                    >
                      {t.whereWhatsAppLabel}: 41 99586-8883
                    </Link>
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <PhoneOutlined className="mt-1 text-primary-6 dark:text-primary-9" />
                  <p className="text-base font-light lg:text-lg">
                    <Link
                      href={phoneUrl}
                      className="underline decoration-primary-6/40 underline-offset-4 hover:decoration-primary-6"
                      aria-label={`${t.wherePhoneLabel}: (41) 3083-9600`}
                    >
                      {t.wherePhoneLabel}: (41) 3083-9600
                    </Link>
                  </p>
                </div>
              </div>

              <Link href={mapsQueryUrl} target="_blank" rel="noreferrer" className="mt-8 inline-block w-max">
                <ButtonPrimary text={t.whereCta} size="large" icon={<RightOutlined />} bgColor="!bg-primary-6" />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-primary-3/50 bg-primary-1 shadow-[0_24px_80px_rgba(0,0,0,0.12)] dark:border-primary-3/20 dark:bg-black">
                <iframe
                  src={mapsEmbedUrl}
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Uizzy location map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

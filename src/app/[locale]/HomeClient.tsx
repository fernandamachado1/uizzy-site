"use client"

import Ball from "@/components/Ball";
import ButtonPrimary from "@/components/ButtonPrimary";
// import Carousel from "@/components/carousel/Carousel";
import { ClockCircleOutlined, EnvironmentOutlined, PhoneOutlined, RightOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Radio } from "antd";
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
    meetUizzy: string;
    meetUizzyDesc: string;
    ourServices: string;
    designDesc: string;
    development: string;
    developmentDesc: string;
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

  const serviceCopy = useMemo(
    () => ({
      design: { title: "Design UI/UX", description: t.designDesc },
      development: { title: t.development, description: t.developmentDesc },
    }),
    [t.designDesc, t.development, t.developmentDesc],
  );

  const [service, setService] = useState<{ title: string; description: string }>(serviceCopy.design);

  function toggleService() {
    if (service.title === "Design UI/UX") {
      setService(serviceCopy.development);
      return true;
    }

    setService(serviceCopy.design);
    return true;
  }

  return (
    <main>
      <section className="relative bg-primary-5 text-white min-h-[100dvh] overflow-hidden pt-[var(--header-height)]">
        <div className="container mx-auto grid min-h-[calc(100dvh_-_var(--header-height))] grid-rows-[auto_1fr] gap-10 px-6 pt-10 pb-0 sm:px-8 lg:px-16 xl:flex xl:flex-row xl:items-stretch xl:py-10">
          <div className="flex flex-col justify-center xl:flex-1 xl:max-w-[520px]">
            <h1 className="font-[700] text-[clamp(2.5rem,8vw,4.5rem)] leading-[1] tracking-[-2px]">{t.hero}</h1>
            <p className="mt-6 max-w-[460px] text-[clamp(1.25rem,4vw,2rem)] font-[400] leading-[1.2] text-white/90">{t.heroDesc}</p>
          </div>

          <div className="self-end h-full flex justify-center xl:h-auto xl:flex-1 xl:items-end xl:justify-end">
            <div className="relative h-full max-h-[calc(100dvh_-_var(--header-height))] w-full max-w-[420px] sm:max-w-[560px] lg:max-w-[680px] xl:max-w-[780px]">
              <div
                className="absolute right-[-88px] bottom-[-84px] h-[clamp(280px,88vw,560px)] w-[clamp(280px,88vw,560px)] rounded-full bg-primary-6 opacity-90 sm:right-[30px] sm:bottom-[-120px] xl:right-[68px] xl:bottom-[-122px]"
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

      <section className="bg-white dark:bg-black text-primary-10 relative z-1 overflow-hidden min-h-[100dvh] pt-[var(--header-height)]">
        <div className="container flex flex-col py-24 px-8 lg:py-32 lg:px-16 xl:py-48 justify-center min-h-[calc(100dvh_-_var(--header-height))]">
          <h2 className="text-6xl/[92%] font-semibold max-w-10 lg:text-6xl lg:max-w-none">{t.meetUizzy}</h2>

          <p className="max-w-[80%] font-light my-6 text-xl lg:text-xl lg:max-w-[70%]">{t.meetUizzyDesc}</p>

          <Link href="about" className="w-max">
            <ButtonPrimary
              text={messages._static.seeMore}
              icon={<RightOutlined />}
              bgColor="!bg-primary-6"
              className="!py-4 !px-3"
            />
          </Link>
        </div>

        <Ball
          size="size-70 lg:size-90 xl:size-130"
          bg="bg-primary-3 dark:bg-[#30195c] opacity-40"
          position="top-[15%] left-[85%] sm:left-[78%] md:left-[71%] lg:left-[80%] xl:left-[78%]"
        />

        <Ball size="size-70 lg:size-120 xl:size-170" bg="bg-primary-3 dark:bg-[#30195c]" position="top-[50%] left-[50%]" />

        <Ball
          size="size-70 lg:size-90 xl:size-130"
          bg="bg-primary-3 dark:bg-[#30195c] opacity-40"
          position="top-[85%] left-[15%] sm:left-[22%] md:left-[29%] lg:left-[20%] xl:left-[22%]"
        />
      </section>

      <section className="bg-[#1E0B63] text-white min-h-[100dvh] pt-[var(--header-height)]">
        <div className="container py-12 px-8 lg:py-16 lg:px-16 flex flex-col min-h-[calc(100dvh_-_var(--header-height))]">
          <h2 className="text-6xl/[92%] font-semibold max-w-10 lg:text-6xl lg:max-w-none">{t.ourServices}</h2>

          <Radio.Group defaultValue="design" buttonStyle="solid" className="!my-6" size="large" onChange={() => toggleService()}>
            <Radio.Button value="design">Design UI/UX</Radio.Button>
            <Radio.Button value="development">{t.development}</Radio.Button>
          </Radio.Group>

          <p className="text-2xl font-semibold lg:text-4xl">{service.title}</p>
          <div className="h-1 w-20 bg-primary-6 mb-6 mt-1 lg:mt-2 lg:w-50"></div>

          <p className="text-lg max-w-[75%] lg:text-xl lg:max-w-[85%] font-light" dangerouslySetInnerHTML={{ __html: service.description }} />
        </div>
      </section>

      <section className="bg-white dark:bg-black text-primary-10 dark:text-[#F3E8FF] relative overflow-hidden border-t border-primary-3/40 dark:border-primary-3/20">
        <div className="container px-8 py-16 lg:px-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <h2 className="text-5xl/[100%] font-semibold lg:text-6xl/[92%]">{t.whereTitle}</h2>

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
                <ButtonPrimary text={t.whereCta} icon={<RightOutlined />} bgColor="!bg-primary-6" className="!py-4 !px-3" />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-primary-3/50 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.12)] dark:border-primary-3/20 dark:bg-black">
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

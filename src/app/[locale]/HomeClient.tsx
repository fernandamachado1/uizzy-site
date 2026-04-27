"use client"

import Ball from "@/components/Ball";
import ButtonPrimary from "@/components/ButtonPrimary";
// import Carousel from "@/components/carousel/Carousel";
import { ClockCircleOutlined, EnvironmentOutlined, PhoneOutlined, RightOutlined, WhatsAppOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

export type HomeClientMessages = {
  _static: {
    seeMore: string;
  };
  home: {
    heroEyebrow: string;
    hero: string;
    heroDesc: string;
    heroPrimaryCta: string;
    heroSecondaryCta: string;
    heroProof1: string;
    heroProof2: string;
    heroProof3: string;
    meetUizzy: string;
    meetUizzyDesc: string;
    aboutCard1Title: string;
    aboutCard1Desc: string;
    aboutCard2Title: string;
    aboutCard2Desc: string;
    aboutCard3Title: string;
    aboutCard3Desc: string;
    aboutEyebrow: string;
    ourServices: string;
    servicesEyebrow: string;
    servicesIntro: string;
    designDesc: string;
    development: string;
    developmentDesc: string;
    contactEyebrow: string;
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

  return (
    <main>
      <section className="relative bg-primary-5 text-white min-h-[100dvh] overflow-hidden pt-[var(--header-height)]">
        <div className="container mx-auto grid min-h-[calc(100dvh_-_var(--header-height))] grid-rows-[auto_1fr] gap-10 px-6 py-10 sm:px-8 lg:px-16 xl:grid-cols-[1.05fr_0.95fr] xl:grid-rows-1 xl:gap-14 xl:py-10">
          <div className="flex flex-col justify-center gap-6 xl:max-w-[640px]">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/70">{t.heroEyebrow}</p>
            <div className="space-y-5">
              <h1 className="max-w-[12ch] font-[700] text-[clamp(2.9rem,7vw,4.8rem)] leading-[0.95] tracking-[-2px]">
                {t.hero}
              </h1>
              <p className="max-w-[560px] text-[clamp(1.1rem,3vw,1.5rem)] font-[400] leading-[1.35] text-white/90">
                {t.heroDesc}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="about" className="w-full sm:w-max">
                <ButtonPrimary text={t.heroPrimaryCta} icon={<RightOutlined />} bgColor="!bg-primary-6" className="!py-4 !px-4 w-full sm:w-auto" />
              </Link>
              <Link href={whatsappUrl} target="_blank" rel="noreferrer" className="w-full sm:w-max">
                <ButtonPrimary text={t.heroSecondaryCta} icon={<WhatsAppOutlined />} bgColor="!bg-white/10" className="!py-4 !px-4 w-full sm:w-auto" />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[t.heroProof1, t.heroProof2, t.heroProof3].map((item) => (
                <div key={item} className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium text-white/90 backdrop-blur">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="self-end flex h-full justify-center xl:h-auto xl:items-end xl:justify-end">
            <div className="relative h-full max-h-[calc(100dvh_-_var(--header-height))] w-full max-w-[420px] sm:max-w-[560px] lg:max-w-[680px] xl:max-w-[760px]">
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

      <section id="about" className="bg-white dark:bg-black text-primary-10 relative z-1 overflow-hidden border-t border-primary-3/30 dark:border-primary-3/15">
        <div className="container px-6 py-20 sm:px-8 lg:px-16 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary-6">{t.aboutEyebrow}</p>
              <h2 className="max-w-[12ch] text-5xl/[96%] font-semibold lg:text-6xl/[92%]">
                {t.meetUizzy}
              </h2>
              <p className="max-w-[560px] text-lg font-light leading-[1.7] text-primary-10/80 lg:text-xl">
                {t.meetUizzyDesc}
              </p>
              <Link href="about" className="w-max">
                <ButtonPrimary text={messages._static.seeMore} icon={<RightOutlined />} bgColor="!bg-primary-6" className="!py-4 !px-4" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-3xl border border-primary-3/40 bg-primary-1/60 p-6 shadow-sm dark:border-primary-3/15 dark:bg-white/5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-6">{t.aboutCard1Title}</p>
                <p className="mt-4 text-base font-light leading-[1.65] text-primary-10/80 dark:text-[#F3E8FF]/82">{t.aboutCard1Desc}</p>
              </div>
              <div className="rounded-3xl border border-primary-3/40 bg-primary-1/60 p-6 shadow-sm dark:border-primary-3/15 dark:bg-white/5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-6">{t.aboutCard2Title}</p>
                <p className="mt-4 text-base font-light leading-[1.65] text-primary-10/80 dark:text-[#F3E8FF]/82">{t.aboutCard2Desc}</p>
              </div>
              <div className="rounded-3xl border border-primary-3/40 bg-primary-1/60 p-6 shadow-sm dark:border-primary-3/15 dark:bg-white/5 sm:col-span-2 xl:col-span-1">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-6">{t.aboutCard3Title}</p>
                <p className="mt-4 text-base font-light leading-[1.65] text-primary-10/80 dark:text-[#F3E8FF]/82">{t.aboutCard3Desc}</p>
              </div>
            </div>
          </div>
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

      <section id="services" className="bg-[#1E0B63] text-white min-h-[100dvh] pt-[var(--header-height)]">
        <div className="container flex min-h-[calc(100dvh_-_var(--header-height))] flex-col gap-10 px-6 py-20 sm:px-8 lg:px-16 lg:py-24">
          <div className="max-w-[760px] space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/65">{t.servicesEyebrow}</p>
            <h2 className="text-5xl/[96%] font-semibold lg:text-6xl/[92%]">{t.ourServices}</h2>
            <p className="max-w-[620px] text-lg font-light leading-[1.7] text-white/80 lg:text-xl">
              {t.servicesIntro}
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            <article className="rounded-[2rem] border border-white/10 bg-white/6 p-7 shadow-[0_24px_80px_rgba(0,0,0,0.2)] backdrop-blur-sm lg:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-4">Design UI/UX</p>
              <div className="mt-4 h-1 w-16 bg-primary-6" />
              <p className="mt-6 text-2xl font-semibold lg:text-3xl">Experiências claras para produtos digitais mais fáceis de usar.</p>
              <div className="mt-6 space-y-5 text-lg font-light leading-[1.75] text-white/82" dangerouslySetInnerHTML={{ __html: t.designDesc }} />
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-white/6 p-7 shadow-[0_24px_80px_rgba(0,0,0,0.2)] backdrop-blur-sm lg:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-4">{t.development}</p>
              <div className="mt-4 h-1 w-16 bg-primary-6" />
              <p className="mt-6 text-2xl font-semibold lg:text-3xl">Produtos sólidos, escaláveis e prontos para evoluir com o negócio.</p>
              <div className="mt-6 space-y-5 text-lg font-light leading-[1.75] text-white/82" dangerouslySetInnerHTML={{ __html: t.developmentDesc }} />
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white dark:bg-black text-primary-10 dark:text-[#F3E8FF] relative overflow-hidden border-t border-primary-3/40 dark:border-primary-3/20">
        <div className="container px-6 py-20 sm:px-8 lg:px-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary-6">{t.contactEyebrow}</p>
              <h2 className="text-5xl/[96%] font-semibold lg:text-6xl/[92%]">{t.whereTitle}</h2>
              <p className="max-w-[560px] text-lg font-light leading-[1.75] text-primary-10/80 dark:text-[#F3E8FF]/82 lg:text-xl">
                {t.whereDesc}
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-primary-3/40 bg-primary-1/60 p-5 dark:border-primary-3/20 dark:bg-white/5">
                  <div className="flex items-start gap-3">
                    <EnvironmentOutlined className="mt-1 text-primary-6 dark:text-primary-9" />
                    <p className="text-base font-light lg:text-lg">{t.whereCity}</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-primary-3/40 bg-primary-1/60 p-5 dark:border-primary-3/20 dark:bg-white/5">
                  <div className="flex items-start gap-3">
                    <ClockCircleOutlined className="mt-1 text-primary-6 dark:text-primary-9" />
                    <p className="text-base font-light lg:text-lg">{t.whereScheduling}</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-primary-3/40 bg-primary-1/60 p-5 dark:border-primary-3/20 dark:bg-white/5">
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
                </div>
                <div className="rounded-2xl border border-primary-3/40 bg-primary-1/60 p-5 dark:border-primary-3/20 dark:bg-white/5">
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
              </div>

              <Link href={mapsQueryUrl} target="_blank" rel="noreferrer" className="inline-block w-max">
                <ButtonPrimary text={t.whereCta} icon={<RightOutlined />} bgColor="!bg-primary-6" className="!py-4 !px-4" />
              </Link>
            </div>

            <div className="lg:pt-3">
              <div className="overflow-hidden rounded-[2rem] border border-primary-3/50 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.12)] dark:border-primary-3/20 dark:bg-black">
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

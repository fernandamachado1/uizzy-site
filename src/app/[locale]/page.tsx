"use client"

import Ball from "@/components/Ball";
import ButtonPrimary from "@/components/ButtonPrimary";
// import Carousel from "@/components/carousel/Carousel";
import { RightOutlined } from "@ant-design/icons";
import { Radio } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// import { useAppContext } from "@/components/default/AppContext";
// import { EmblaOptionsType } from 'embla-carousel';
import { useTranslations } from "next-intl";

export default function Home() {

  const staticTranslation = useTranslations("_static");
  const translation = useTranslations("home");

  // const { blogContext } = useAppContext();

  const [service, setService] = useState<{ title: string, description: string }>({
    title: "Design UI/UX",
    description: translation("designDesc")
  })

  function toggleService() {

    if (service.title === "Design UI/UX") {
      setService({
        title: translation("development"),
        description: translation("developmentDesc")     
      })

      return true;
    }

    setService({
      title: "Design UI/UX",
      description: translation("designDesc")
    })

    return true;

  }

  // const carouselOptions: EmblaOptionsType = {
  //   loop: true,
  //   align: "center",
  // }

  return (

    <main>

      <section className="relative bg-primary-5 text-white min-h-[100dvh] overflow-hidden pt-[var(--header-height)]">
        <div className="container mx-auto flex min-h-[calc(100dvh_-_var(--header-height))] flex-col gap-10 px-6 py-10 sm:px-8 lg:flex-row lg:items-stretch lg:px-16">

          <div className="flex flex-1 flex-col justify-center lg:max-w-[520px]">
            <h1 className="font-[700] text-[clamp(2.5rem,8vw,4.5rem)] leading-[1] tracking-[-2px]">
              {translation("hero")}
            </h1>
            <p className="mt-6 max-w-[460px] text-[clamp(1.25rem,4vw,2rem)] font-[400] leading-[1.2] text-white/90">
              {translation("heroDesc")}
            </p>
          </div>

          <div className="flex flex-1 items-end justify-center lg:justify-end">
            <div className="relative h-full max-h-[calc(100dvh_-_var(--header-height))] w-full max-w-[420px] sm:max-w-[560px] lg:max-w-[680px] xl:max-w-[780px]">
              <div
                className="absolute right-[-88px] bottom-[-84px] h-[clamp(280px,88vw,560px)] w-[clamp(280px,88vw,560px)] rounded-full bg-primary-6 opacity-90 sm:right-[30px] sm:bottom-[-120px] lg:right-[68px] lg:bottom-[-122px]"
                aria-hidden
              />
              <div className="relative z-10 flex h-full items-end justify-center overflow-visible top-[50px]">
                <Image
                  src="/hero.svg"
                  width={1400}
                  height={2200}
                  quality={600}
                  sizes="(min-width: 1280px) 780px, (min-width: 1024px) 680px, 92vw"
                  className="h-auto w-full object-contain sm:w-[94%] lg:w-full"
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

          <h2 className="text-6xl/[92%] font-semibold max-w-10 lg:text-6xl lg:max-w-none">
            {translation("meetUizzy")}
          </h2>

          <p className="max-w-[80%] font-light my-6 text-xl lg:text-xl lg:max-w-[70%]">
            {translation("meetUizzyDesc")}
          </p>

          <Link href="about" className="w-max">
            <ButtonPrimary text={staticTranslation("seeMore")} icon={<RightOutlined />} bgColor="!bg-primary-6" className="!py-4 !px-3" />
          </Link>

        </div>

        <Ball
          size="size-70 lg:size-90 xl:size-130"
          bg="bg-primary-3 dark:bg-[#30195c] opacity-40"
          position="top-[15%] left-[85%] sm:left-[78%] md:left-[71%] lg:left-[80%] xl:left-[78%]" />

        <Ball
          size="size-70 lg:size-120 xl:size-170"
          bg="bg-primary-3 dark:bg-[#30195c]"
          position="top-[50%] left-[50%]" />

        <Ball
          size="size-70 lg:size-90 xl:size-130"
          bg="bg-primary-3 dark:bg-[#30195c] opacity-40"
          position="top-[85%] left-[15%] sm:left-[22%] md:left-[29%] lg:left-[20%] xl:left-[22%]" />
      </section>

      <section className="bg-[#1E0B63] text-white min-h-[100dvh] pt-[var(--header-height)]">
        <div className="container py-12 px-8 lg:py-16 lg:px-16 flex flex-col min-h-[calc(100dvh_-_var(--header-height))]">

          <h2 className="text-6xl/[92%] font-semibold max-w-10 lg:text-6xl lg:max-w-none">
            {translation("ourServices")}
          </h2>

          <Radio.Group defaultValue="design" buttonStyle="solid" className="!my-6" size="large" onChange={() => toggleService()}>
            <Radio.Button value="design">Design UI/UX</Radio.Button>
            <Radio.Button value="development">{translation("development")}</Radio.Button>
          </Radio.Group>

          <p className="text-2xl font-semibold lg:text-4xl">{service.title}</p>
          <div className="h-1 w-20 bg-primary-6 mb-6 mt-1 lg:mt-2 lg:w-50"></div>

          <p className="text-lg max-w-[75%] lg:text-xl lg:max-w-[85%] font-light" dangerouslySetInnerHTML={{ __html: service.description}}></p>

        </div>
      </section>

    </main>



  );
}

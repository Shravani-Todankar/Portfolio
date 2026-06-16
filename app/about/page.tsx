import { Education } from "@/components/about/education";
import { Experience } from "@/components/about/experience";
import { PolaroidStrip } from "@/components/about/polaroid-strip";
import { Skills } from "@/components/about/skills";
import { Stack } from "@/components/about/stack";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "About Shravani — Front-end Developer & Designer",
  description:
    "Mumbai-based front-end developer with 2+ years building production sites for real-estate, fintech, edtech and D2C brands. Skills, experience, education and what I'm shipping next.",
  path: "/about",
});

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-312 pt-40 sm:pt-56">
        <PolaroidStrip />
      </section>

      <section className="mx-auto w-full max-w-160 px-6 pt-20 pb-16 sm:px-10 sm:pt-28 sm:pb-24">
        <FadeIn delay={0.5}>
          <div className="rounded-4xl border border-foreground/5 bg-foreground/1.5 p-8 sm:p-12 dark:bg-foreground/3">
            <h1 className="font-serif text-[1.75rem] font-medium tracking-tight text-foreground sm:text-[2rem]">
              Hello! I&rsquo;m <span className="border-b border-foreground/30 pb-0.5">Shravani Todankar</span>.
            </h1>
            <div className="mt-8 space-y-6 text-[17px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[18px]">
              <p>
                A <strong className="font-semibold text-foreground">creative web developer</strong> with a knack for building sleek, functional websites using modern tools like <strong className="font-semibold text-foreground">WordPress, Webflow, Shopify and React JS</strong>. I focus on clean, engaging digital experiences that feel fast on every device.
              </p>
              <p>
                I started out building static landing pages and grew into shipping full marketing sites, e-commerce storefronts and custom learning platforms. Along the way I&rsquo;ve picked up a strong sense of <strong className="font-semibold text-foreground">responsive design</strong>, cross-browser compatibility, and basic SEO best practices.
              </p>
              <p>
                Currently working as a <strong className="font-semibold text-foreground">Jr. Executive Web Developer at TechInfinity</strong>, where I help brands ship websites that look great and convert well. Always up for thoughtful, well-crafted product work.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-[40rem] px-6 pb-20 sm:px-10 sm:pb-28">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-10">
            <Experience />
            <Education />
            <Skills />
            <Stack />
          </div>
        </FadeIn>
      </section>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}

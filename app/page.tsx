import { ContactCard } from "@/components/contact/contact-card";
import { Hero } from "@/components/hero/hero";
import { LogosMarquee } from "@/components/home/logos-marquee";
import { Services } from "@/components/home/services";
import { Stats } from "@/components/home/stats";
import { Projects } from "@/components/projects/projects";
import { createMetadata, siteConfig } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Home",
  description: `Welcome to ${siteConfig.name}. ${siteConfig.description}`,
  path: "/",
});

export default function HomePage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col gap-20 sm:gap-28">
      <Hero />
      <Stats />
      <LogosMarquee />
      <Projects withHeadline viewMoreVisible />
      <Services />
      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}

import {
  Code2,
  Globe,
  Layers,
  ShoppingBag,
  Sparkles,
  Wrench,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";

type Service = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  body: string;
};

const SERVICES: Service[] = [
  {
    icon: Code2,
    title: "Hard-coded sites",
    body:
      "Custom landing pages and marketing sites in HTML, CSS, and JavaScript — built for speed and clarity.",
  },
  {
    icon: Globe,
    title: "WordPress & WooCommerce",
    body:
      "Content-rich sites with custom themes, LMS integrations, and a tidy editing experience.",
  },
  {
    icon: ShoppingBag,
    title: "Shopify storefronts",
    body:
      "Conversion-focused product pages, smoother checkout, and brand-aligned theme work.",
  },
  {
    icon: Layers,
    title: "Webflow & Framer",
    body:
      "CMS-driven, animation-rich sites that the team can update without touching code.",
  },
  {
    icon: Sparkles,
    title: "React front-ends",
    body:
      "Reusable component systems and interactive UIs powered by modern React.",
  },
  {
    icon: Wrench,
    title: "Domain, hosting & migrations",
    body:
      "Seamless site migrations with minimal downtime and zero data loss.",
  },
];

export function Services(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <FadeIn className="flex flex-col items-center gap-5 pb-10 text-center sm:pb-14">
          <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
            What I build
          </h2>
          <p className="max-w-[40ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
            Six ways I help brands ship websites that look great and work even
            better.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.title} delay={Math.min(i * 0.05, 0.25)}>
              <article className="flex h-full flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-5 transition-colors hover:bg-foreground/4 sm:p-6">
                <span className="border-foreground/10 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-background">
                  <service.icon
                    className="h-4 w-4 text-foreground"
                    aria-hidden="true"
                  />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[18px] font-medium leading-tight tracking-tight text-foreground sm:text-[20px]">
                    {service.title}
                  </h3>
                  <p className="text-[14px] leading-[1.5] tracking-tight text-foreground/65 sm:text-[15px]">
                    {service.body}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

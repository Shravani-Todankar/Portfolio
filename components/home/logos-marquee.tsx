import type { ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";

const LOGOS: string[] = [
  "Enpower School",
  "Enpower Skill Lab",
  "India's Future Tycoon",
  "Spenta Corporation",
  "Kunuts",
  "EatProt",
  "Techinfinity",
  "Hyperality",
  "BespokeBliss",
  "Rapoo India",
  "MosaicMinds",
  "Partagali Math",
];

export function LogosMarquee(): ReactNode {
  const items = [...LOGOS, ...LOGOS];
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <FadeIn>
          <p className="mb-6 text-center text-[13px] uppercase tracking-[0.12em] text-foreground/45 sm:mb-8">
            Brands I&rsquo;ve built for
          </p>
          <div className="logos-marquee relative overflow-hidden rounded-3xl border border-foreground/8 bg-background py-5 sm:py-6">
            <div className="logos-marquee__track flex w-max gap-10 sm:gap-14">
              {items.map((logo, i) => (
                <span
                  key={`${logo}-${i}`}
                  className="shrink-0 font-serif text-[20px] font-medium tracking-tight text-foreground/55 sm:text-[24px]"
                >
                  {logo}
                </span>
              ))}
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent sm:w-24"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent sm:w-24"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

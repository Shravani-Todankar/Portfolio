import type { ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";

type Brand = {
  name: string;
  logo?: string;
};

const LOGOS: Brand[] = [
  { name: "Enpower School", logo: "/logos/enpower.png" },
  { name: "Enpower Skill Lab", logo: "/logos/enpower.png" },
  { name: "India's Future Tycoon", logo: "/logos/IFT_logo.png" },
  { name: "Spenta Corporation", logo: "/logos/spenta.png" },
  { name: "Kunuts", logo: "/logos/kunuts.png" },
  { name: "EatProt", logo: "/logos/eatprot.png" },
  { name: "Techinfinity", logo: "/logos/techinfinity.png" },
  { name: "HypeReality", logo: "/logos/quidich.jpeg" },
  { name: "BespokeBliss", logo: "/logos/bespokebliss.webp" },
  { name: "Partagali Math", logo: "/logos/partagali-math.webp" },
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
          <div className="logos-marquee relative overflow-hidden rounded-3xl border border-foreground/8 bg-background py-6 sm:py-8">
            <div className="logos-marquee__track flex w-max items-center gap-12 sm:gap-16">
              {items.map((brand, i) =>
                brand.logo ? (
                  <span
                    key={`${brand.name}-${i}`}
                    className="inline-flex h-12 w-28 shrink-0 items-center justify-center sm:h-14 sm:w-36"
                    title={brand.name}
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-full max-w-full object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                      draggable={false}
                    />
                  </span>
                ) : null
              )}
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

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
  { name: "HypeReality" },
  { name: "BespokeBliss", logo: "/logos/bespokebliss.webp" },
  { name: "Partagali Math", logo: "/logos/partagali-math.webp" },
  { name: "Quidich", logo: "/logos/quidich.jpeg" },
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
            <div className="logos-marquee__track flex w-max items-center gap-10 sm:gap-14">
              {items.map((brand, i) => (
                <span
                  key={`${brand.name}-${i}`}
                  className="text-foreground/65 inline-flex shrink-0 items-center gap-3"
                >
                  {brand.logo ? (
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white sm:h-10 sm:w-10">
                      <img
                        src={brand.logo}
                        alt=""
                        className="h-7 w-7 object-contain sm:h-8 sm:w-8"
                        draggable={false}
                      />
                    </span>
                  ) : null}
                  <span className="font-serif text-[18px] font-medium tracking-tight sm:text-[22px]">
                    {brand.name}
                  </span>
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

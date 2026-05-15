import type { ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";

type Stat = {
  value: string;
  label: string;
};

const STATS: Stat[] = [
  { value: "14+", label: "Websites delivered" },
  { value: "5+", label: "CMS platforms" },
  { value: "2+ yrs", label: "Industry experience" },
  { value: "O grade", label: "BCA, Mumbai University" },
];

export function Stats(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <FadeIn>
          <div className="rounded-4xl border border-foreground/8 bg-background p-1.5 shadow-sm">
            <div className="grid grid-cols-2 gap-2 rounded-[1.6rem] bg-foreground/2 p-3 sm:grid-cols-4 sm:gap-3 sm:p-5 dark:bg-foreground/5">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-start gap-1 rounded-3xl border border-foreground/5 bg-background px-5 py-5 sm:px-6 sm:py-6"
                >
                  <span className="font-serif text-[2rem] font-medium leading-none tracking-tight text-foreground sm:text-[2.5rem]">
                    {stat.value}
                  </span>
                  <span className="text-[13px] tracking-tight text-foreground/60 sm:text-[14px]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";

type Stat = {
  target: number;
  suffix: string;
  label: string;
};

const STATS: Stat[] = [
  { target: 45, suffix: "+", label: "Websites delivered" },
  { target: 8, suffix: "+", label: "CMS platforms" },
  { target: 2, suffix: "+ yrs", label: "Industry experience" },
  { target: 100, suffix: "%", label: "Mobile-friendly delivery" },
];

const EASE = [0.22, 1, 0.36, 1] as const;
const DURATION = 1.6;

export function Stats(): ReactNode {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(containerRef, { once: true, margin: "0px 0px -10% 0px" });

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <FadeIn>
          <div
            ref={containerRef}
            className="rounded-4xl border border-foreground/8 bg-background p-1.5 shadow-sm"
          >
            <div className="grid grid-cols-2 gap-2 rounded-[1.6rem] bg-foreground/2 p-3 sm:grid-cols-4 sm:gap-3 sm:p-5 dark:bg-foreground/5">
              {STATS.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} start={inView} delay={i * 0.12} />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  start,
  delay,
}: {
  stat: Stat;
  start: boolean;
  delay: number;
}): ReactNode {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return;
    const controls = animate(0, stat.target, {
      duration: DURATION,
      delay,
      ease: EASE,
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [start, stat.target, delay]);

  return (
    <div className="flex flex-col items-start gap-1 rounded-3xl border border-foreground/5 bg-background px-5 py-5 sm:px-6 sm:py-6">
      <span className="font-serif text-[2rem] font-medium leading-none tracking-tight text-foreground tabular-nums sm:text-[2.5rem]">
        {Math.round(display)}
        <span className="text-foreground/85">{stat.suffix}</span>
      </span>
      <span className="text-[13px] tracking-tight text-foreground/60 sm:text-[14px]">
        {stat.label}
      </span>
    </div>
  );
}

import { Quote, Star } from "lucide-react";
import type { ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";
import {
  getInitials,
  TESTIMONIAL_SUMMARY,
  TESTIMONIALS,
  type Testimonial,
} from "@/lib/testimonials";

function Stars({ rating }: { rating: number }): ReactNode {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            i < rating
              ? "h-3.5 w-3.5 fill-emerald-500 text-emerald-500"
              : "h-3.5 w-3.5 text-foreground/20"
          }
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }): ReactNode {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 text-[13px] font-semibold tracking-tight text-emerald-700 dark:text-emerald-400"
    >
      {getInitials(name)}
    </span>
  );
}

function Identity({ t }: { t: Testimonial }): ReactNode {
  return (
    <div className="flex items-center gap-3">
      <Avatar name={t.name} />
      <div className="flex flex-col">
        <span className="text-[14px] font-medium leading-tight tracking-tight text-foreground">
          {t.name}
        </span>
        <span className="text-[12.5px] leading-tight tracking-tight text-foreground/55">
          {t.role}
          {t.company ? ` · ${t.company}` : ""}
        </span>
      </div>
    </div>
  );
}

function Card({ t }: { t: Testimonial }): ReactNode {
  if (t.variant === "feature") {
    return (
      <article className="flex flex-col gap-5 rounded-3xl border border-foreground/8 bg-foreground/2 p-6 dark:bg-foreground/5 sm:p-7">
        <div className="flex items-center justify-between">
          <Identity t={t} />
          <Stars rating={t.rating} />
        </div>
        <p className="font-serif text-[22px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[26px]">
          {t.headline}
        </p>
        <p className="text-[14px] leading-[1.6] tracking-tight text-foreground/65 sm:text-[15px]">
          {t.quote}
        </p>
      </article>
    );
  }

  if (t.variant === "accent") {
    return (
      <article className="flex flex-col gap-4 rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-6 dark:bg-emerald-500/[0.07]">
        <Quote
          className="h-6 w-6 text-emerald-600 dark:text-emerald-400"
          aria-hidden="true"
        />
        <p className="text-[15px] leading-[1.6] tracking-tight text-foreground/85 sm:text-[16px]">
          {t.quote}
        </p>
        <div className="mt-1 flex items-center justify-between">
          <Identity t={t} />
          <Stars rating={t.rating} />
        </div>
      </article>
    );
  }

  return (
    <article className="flex flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-6 transition-colors hover:bg-foreground/4">
      <Stars rating={t.rating} />
      <p className="text-[14.5px] leading-[1.6] tracking-tight text-foreground/70 sm:text-[15px]">
        {t.quote}
      </p>
      <div className="mt-auto pt-1">
        <Identity t={t} />
      </div>
    </article>
  );
}

function ScoreBadge(): ReactNode {
  return (
    <article className="flex flex-col gap-2 rounded-3xl border border-foreground/8 bg-background p-6">
      <div className="flex items-center gap-2">
        <Star
          className="h-5 w-5 fill-emerald-500 text-emerald-500"
          aria-hidden="true"
        />
        <span className="font-serif text-[28px] font-medium leading-none tracking-tight text-foreground">
          {TESTIMONIAL_SUMMARY.averageRating.toFixed(1)}
          <span className="text-foreground/40">/5</span>
        </span>
      </div>
      <p className="text-[13px] leading-tight tracking-tight text-foreground/55">
        Average rating from {TESTIMONIAL_SUMMARY.count} colleagues & clients
      </p>
    </article>
  );
}

export function Testimonials(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <FadeIn className="flex flex-col items-center gap-5 pb-10 text-center sm:pb-14">
          <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
            Kind words
          </h2>
          <p className="max-w-[42ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
            What teammates, designers and clients say about working with me.
          </p>
        </FadeIn>

        <div className="gap-4 sm:gap-5 [column-fill:_balance] columns-1 sm:columns-2 lg:columns-3">
          <div className="mb-4 break-inside-avoid sm:mb-5">
            <FadeIn>
              <ScoreBadge />
            </FadeIn>
          </div>
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} className="mb-4 break-inside-avoid sm:mb-5">
              <FadeIn delay={Math.min(i * 0.04, 0.2)}>
                <Card t={t} />
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

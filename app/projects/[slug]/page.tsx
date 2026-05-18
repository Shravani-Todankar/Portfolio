import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import {
  PROJECTS,
  getProjectBySlug,
  type Project,
  type StackByCategory,
} from "@/lib/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return createMetadata({ title: "Project not found" });
  return createMetadata({
    title: project.iconLabel,
    description: project.tagline,
    path: `/projects/${project.slug}`,
    image: project.image,
  });
}

const STACK_LABELS: Record<keyof StackByCategory, string> = {
  platform: "Platform",
  frontend: "Frontend",
  backend: "Backend",
  infrastructure: "Infrastructure",
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<Params>;
}): Promise<ReactNode> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = PROJECTS.findIndex((p) => p.slug === project.slug);
  const related: Project[] = [];
  for (let i = 1; i <= 3; i++) {
    related.push(PROJECTS[(index + i) % PROJECTS.length]!);
  }
  const Icon = project.icon;

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-275 px-6 pt-32 pb-8 sm:px-10 sm:pt-44 sm:pb-10">
        <FadeIn>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium tracking-tight text-foreground/65 transition-colors hover:text-foreground"
          >
            <ArrowLeft
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5"
              aria-hidden="true"
            />
            All projects
          </Link>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-275 px-6 pb-10 sm:px-10 sm:pb-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr] md:gap-12">
          <FadeIn delay={0.05} className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="border-foreground/10 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-background">
                <Icon className="h-4 w-4 text-foreground" aria-hidden="true" />
              </span>
              <span className="text-[15px] font-medium tracking-tight text-foreground">
                {project.iconLabel}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-foreground/8 bg-foreground/2 px-3 py-1 text-[12px] font-medium tracking-tight text-foreground/70 dark:bg-foreground/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-serif text-[2.25rem] font-medium leading-[1.05] tracking-tight text-foreground sm:text-[3rem] lg:text-[3.5rem]">
              {project.title}
            </h1>
            <p className="max-w-[58ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              {project.tagline}
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex h-11 items-center gap-2 rounded-xl bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Live demo
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                href="/projects"
                className="border border-foreground/8 focus-ring inline-flex h-11 items-center gap-2 rounded-xl bg-background px-5 text-sm font-medium text-foreground/80 transition-colors hover:bg-foreground/4 hover:text-foreground"
              >
                More projects
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <aside className="border-foreground/8 bg-foreground/2 dark:bg-foreground/5 rounded-3xl border p-5 sm:p-6 md:sticky md:top-28">
              <dl className="flex flex-col divide-y divide-foreground/8">
                <MetaRow label="Client" value={project.client} />
                <MetaRow label="Role" value={project.role} />
                <MetaRow label="Team" value={project.team} />
                <MetaRow label="Timeline" value={project.timeline} />
                <MetaRow label="Status" value={project.status} accent />
              </dl>
            </aside>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <FadeIn delay={0.05}>
          <div
            className="ring-foreground/5 relative w-full overflow-hidden rounded-3xl bg-foreground/5 ring-1"
            style={{ aspectRatio: project.imageRatio }}
          >
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 1280px) 1100px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-200 px-6 pt-20 sm:px-10 sm:pt-28">
        <FadeIn>
          <SectionLabel>01 — Overview</SectionLabel>
          <p className="mt-5 text-[17px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[19px]">
            {project.overview}
          </p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mt-16 sm:mt-24">
            <SectionLabel>02 — Approach</SectionLabel>
            <p className="mt-5 text-[17px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[19px]">
              {project.approach}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mt-16 sm:mt-24">
            <SectionLabel>03 — What this site does</SectionLabel>
            <ul className="mt-6 flex flex-col gap-3">
              {project.features.map((f) => (
                <li
                  key={f}
                  className="bg-foreground/2 dark:bg-foreground/5 border-foreground/5 flex items-start gap-3 rounded-2xl border p-4"
                >
                  <span className="border-foreground/10 mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border bg-background">
                    <Check
                      className="h-3.5 w-3.5 text-foreground"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-[15px] leading-[1.5] tracking-tight text-foreground/80 sm:text-[16px]">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mt-16 sm:mt-24">
            <SectionLabel>04 — Tech stack</SectionLabel>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
              {(Object.keys(STACK_LABELS) as Array<keyof StackByCategory>)
                .filter((k) => project.stack[k] && project.stack[k]!.length > 0)
                .map((key) => (
                  <div
                    key={key}
                    className="border-foreground/8 rounded-3xl border bg-background p-5 sm:p-6"
                  >
                    <p className="text-[12px] uppercase tracking-[0.1em] text-foreground/50">
                      {STACK_LABELS[key]}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack[key]!.map((tech) => (
                        <span
                          key={tech}
                          className="border-foreground/8 bg-foreground/2 dark:bg-foreground/5 rounded-full border px-3 py-1.5 text-[13px] tracking-tight text-foreground/80 sm:text-[14px]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mt-16 sm:mt-24">
            <SectionLabel>05 — Why I built &amp; maintained this</SectionLabel>
            <ul className="mt-6 flex flex-col gap-0 divide-y divide-foreground/8 border-y border-foreground/8">
              {project.whyBuilt.map((w, i) => (
                <li
                  key={w}
                  className="flex items-start gap-5 py-5 sm:py-6"
                >
                  <span className="font-serif text-[18px] font-medium leading-none text-foreground/40 tabular-nums sm:text-[20px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[16px] leading-[1.55] tracking-tight text-foreground/80 sm:text-[17px]">
                    {w}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mt-16 sm:mt-24">
            <SectionLabel>06 — After launch &amp; impact</SectionLabel>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {project.impact.map((o) => (
                <li
                  key={o}
                  className="border-foreground/8 rounded-2xl border bg-background p-5"
                >
                  <p className="text-[15px] leading-[1.5] tracking-tight text-foreground/80 sm:text-[16px]">
                    {o}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-275 px-6 pt-20 sm:px-10 sm:pt-28">
        <FadeIn>
          <div className="flex items-end justify-between gap-6">
            <SectionLabel>Related work</SectionLabel>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-medium tracking-tight text-foreground/65 transition-colors hover:text-foreground"
            >
              All projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </FadeIn>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
          {related.map((rp, i) => (
            <FadeIn key={rp.slug} delay={Math.min(i * 0.05, 0.2)}>
              <Link
                href={`/projects/${rp.slug}`}
                className="focus-ring group block"
              >
                <article className="flex h-full flex-col gap-3 rounded-3xl border border-foreground/8 bg-background p-3 transition-colors hover:bg-foreground/4">
                  <div
                    className="ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
                    style={{ aspectRatio: 4 / 3 }}
                  >
                    <Image
                      src={rp.image}
                      alt={rp.imageAlt}
                      fill
                      sizes="(min-width: 768px) 30vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 px-2 pb-2 pt-1">
                    <span className="text-[12px] uppercase tracking-[0.08em] text-foreground/50">
                      {rp.iconLabel}
                    </span>
                    <p className="text-[15px] font-medium leading-tight tracking-tight text-foreground sm:text-[16px]">
                      {rp.title}
                    </p>
                  </div>
                </article>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}

function SectionLabel({ children }: { children: ReactNode }): ReactNode {
  return (
    <h2 className="font-serif text-[1.5rem] font-medium tracking-tight text-foreground sm:text-[2rem]">
      {children}
    </h2>
  );
}

function MetaRow({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}): ReactNode {
  return (
    <div className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0">
      <dt className="text-[12px] uppercase tracking-[0.08em] text-foreground/50">
        {label}
      </dt>
      <dd className="flex items-center gap-2 text-right text-[14px] font-medium tracking-tight text-foreground sm:text-[15px]">
        {accent && (
          <span
            aria-hidden="true"
            className="inline-block h-1.5 w-1.5 rounded-full bg-[#0AE448]"
          />
        )}
        {value}
      </dd>
    </div>
  );
}

import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import { PROJECTS, getProjectBySlug } from "@/lib/projects";

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

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<Params>;
}): Promise<ReactNode> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = PROJECTS.findIndex((p) => p.slug === project.slug);
  const next = PROJECTS[(index + 1) % PROJECTS.length]!;
  const Icon = project.icon;

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-275 px-6 pt-32 pb-10 sm:px-10 sm:pt-44 sm:pb-12">
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

        <FadeIn delay={0.05}>
          <div className="mt-8 flex items-center gap-3 sm:mt-12">
            <span className="border-foreground/10 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-background">
              <Icon className="h-4 w-4 text-foreground" aria-hidden="true" />
            </span>
            <span className="text-[15px] font-medium tracking-tight text-foreground">
              {project.iconLabel}
            </span>
          </div>

          <h1 className="mt-6 font-serif text-[2.25rem] font-medium leading-[1.05] tracking-tight text-foreground sm:text-[3rem] lg:text-[3.5rem]">
            {project.title}
          </h1>
          <p className="mt-5 max-w-[58ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[22px]">
            {project.tagline}
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-y border-foreground/8 py-6 sm:grid-cols-4 sm:py-8">
            <MetaItem label="Client" value={project.client} />
            <MetaItem label="Role" value={project.role} />
            <MetaItem label="Year" value={project.year} />
            <MetaItem label="Type" value={project.iconLabel} />
          </dl>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <FadeIn delay={0.1}>
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

      <section className="mx-auto w-full max-w-200 px-6 pt-16 sm:px-10 sm:pt-24">
        <FadeIn>
          <SectionTitle>Overview</SectionTitle>
          <p className="mt-4 text-[17px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[18px]">
            {project.overview}
          </p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mt-14 sm:mt-20">
            <SectionTitle>Approach</SectionTitle>
            <p className="mt-4 text-[17px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[18px]">
              {project.approach}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mt-14 sm:mt-20">
            <SectionTitle>Key features</SectionTitle>
            <ul className="mt-6 flex flex-col gap-3">
              {project.features.map((f) => (
                <li
                  key={f}
                  className="bg-foreground/2 dark:bg-foreground/5 border-foreground/5 flex items-start gap-3 rounded-2xl border p-4"
                >
                  <span className="border-foreground/10 mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border bg-background">
                    <Check className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
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
          <div className="mt-14 sm:mt-20">
            <SectionTitle>Tech stack</SectionTitle>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-foreground/8 bg-background px-4 py-2 text-[14px] tracking-tight text-foreground/85 sm:text-[15px]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mt-14 sm:mt-20">
            <SectionTitle>Outcome</SectionTitle>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {project.outcomes.map((o) => (
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
          <SectionTitle>Gallery</SectionTitle>
        </FadeIn>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          {project.gallery.map((src, i) => (
            <FadeIn key={src} delay={Math.min(i * 0.05, 0.2)}>
              <div
                className={`ring-foreground/5 relative w-full overflow-hidden rounded-3xl bg-foreground/5 ring-1 ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
                style={{ aspectRatio: i === 0 ? 16 / 9 : 4 / 3 }}
              >
                <Image
                  src={src}
                  alt={`${project.iconLabel} gallery image ${i + 1}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-275 px-6 pt-20 sm:px-10 sm:pt-28">
        <FadeIn>
          <Link
            href={`/projects/${next.slug}`}
            className="border-foreground/8 group flex items-center justify-between gap-4 rounded-3xl border bg-background p-6 transition-colors hover:bg-foreground/4 sm:p-8"
          >
            <div className="flex min-w-0 flex-col gap-1">
              <span className="text-[13px] tracking-tight text-foreground/55">
                Next project
              </span>
              <span className="truncate font-serif text-[1.5rem] font-medium tracking-tight text-foreground sm:text-[2rem]">
                {next.iconLabel}
              </span>
            </div>
            <ArrowRight
              className="h-5 w-5 shrink-0 text-foreground/65 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-foreground"
              aria-hidden="true"
            />
          </Link>
        </FadeIn>
      </section>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}

function SectionTitle({ children }: { children: ReactNode }): ReactNode {
  return (
    <h2 className="font-serif text-[1.75rem] font-medium tracking-tight text-foreground sm:text-[2.25rem]">
      {children}
    </h2>
  );
}

function MetaItem({ label, value }: { label: string; value: string }): ReactNode {
  return (
    <div className="flex flex-col gap-1">
      <dt className="text-[12px] uppercase tracking-[0.08em] text-foreground/50">
        {label}
      </dt>
      <dd className="text-[15px] font-medium tracking-tight text-foreground sm:text-[16px]">
        {value}
      </dd>
    </div>
  );
}

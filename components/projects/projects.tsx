import {
  ArrowRight,
  Briefcase,
  Building2,
  GraduationCap,
  Landmark,
  Leaf,
  Mouse,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";

/**
 * Project imagery below is mockup-only. All visuals are sourced from
 * Dribbble and credit belongs to the original creators on dribbble.com.
 * Replace these with your own work before shipping.
 */

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
};

const PROJECTS: Project[] = [
  {
    id: "tycoon",
    icon: Sparkles,
    iconLabel: "India's Future Tycoon",
    title: "Brand landing experience for India's Future Tycoon.",
    description:
      "Hard-coded marketing site built with HTML, CSS and JavaScript, designed to capture leads and present the program with cinematic polish.",
    meta: "Web Developer, 2025",
    imageRatio: 1024 / 768,
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1024&q=80",
    imageAlt: "India's Future Tycoon landing page mockup",
  },
  {
    id: "spenta",
    icon: Building2,
    iconLabel: "Spenta",
    title: "Real Estate CRM front-end for Spenta.",
    description:
      "Built the CRM front-end for one of Mumbai's premier real estate developers, focused on clean data presentation and an effortless agent workflow.",
    meta: "Front-end Developer, 2025",
    imageRatio: 752 / 497,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1024&q=80",
    imageAlt: "Spenta real estate CRM mockup",
  },
  {
    id: "enpower",
    icon: GraduationCap,
    iconLabel: "ENpower",
    title: "School learning platform revamp for ENpower.",
    description:
      "Redesigned and re-engineered the dashboards, report cards and admin tools for the neoRiSE Skill Passport program used across partner schools.",
    meta: "Full-stack Developer, 2025",
    imageRatio: 1024 / 768,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1024&q=80",
    imageAlt: "ENpower school learning platform mockup",
  },
  {
    id: "partagalimath",
    icon: Landmark,
    iconLabel: "Partagalimath",
    title: "Hard-coded landing page for Partagalimath.",
    description:
      "A static, performance-first landing page hand-coded in HTML/CSS/JS, designed to honour the institution's heritage while staying fast on any device.",
    meta: "Front-end Developer, 2024",
    imageRatio: 1024 / 768,
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1024&q=80",
    imageAlt: "Partagalimath heritage landing page mockup",
  },
  {
    id: "mosaic",
    icon: Leaf,
    iconLabel: "Mosaic Minds",
    title: "WordPress + LMS education website for Mosaic Minds.",
    description:
      "Built a WordPress site with an integrated LMS, custom course flows and a streamlined enrolment journey for learners and parents.",
    meta: "WordPress Developer, 2024",
    imageRatio: 1024 / 768,
    image:
      "https://images.unsplash.com/photo-1610484826917-0f101a7c63b9?w=1024&q=80",
    imageAlt: "Mosaic Minds LMS website mockup",
  },
  {
    id: "sarvatra",
    icon: Briefcase,
    iconLabel: "Sarvatra Technologies",
    title: "Corporate website revamp for Sarvatra Technologies.",
    description:
      "Reimagined the marketing site for a fintech infrastructure company — clearer storytelling, modern UI patterns and a tighter content system.",
    meta: "Web Developer, 2024",
    imageRatio: 752 / 497,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1024&q=80",
    imageAlt: "Sarvatra Technologies website revamp mockup",
  },
  {
    id: "eatprot",
    icon: ShoppingBag,
    iconLabel: "EatProt",
    title: "E-commerce revamp for EatProt.",
    description:
      "Reworked the Shopify storefront and product flows for a high-protein food brand — faster pages, sharper PDPs, smoother checkout.",
    meta: "Shopify Developer, 2024",
    imageRatio: 1024 / 768,
    image:
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=1024&q=80",
    imageAlt: "EatProt e-commerce storefront mockup",
  },
  {
    id: "rapoo",
    icon: Mouse,
    iconLabel: "Rapoo India",
    title: "E-commerce website revamp for Rapoo India.",
    description:
      "Rebuilt the Rapoo India storefront with a richer product catalogue, cleaner navigation and a more confident brand presence.",
    meta: "E-commerce Developer, 2024",
    imageRatio: 1024 / 768,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=1024&q=80",
    imageAlt: "Rapoo India e-commerce website mockup",
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
              My projects
            </h2>
            <p className="max-w-[33ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              From playful experiments to thoughtful systems, a look at the
              work I&rsquo;m proud to have shipped.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              View all projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const Icon = project.icon;
  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      <article className="project-card flex cursor-pointer flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 sm:p-3.5">
        <header className="flex items-center gap-2.5 px-1 pt-2">
          <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
            <Icon className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
          </span>
          <span className="text-sm font-medium tracking-tight text-foreground">
            {project.iconLabel}
          </span>
        </header>

        <div
          className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
          style={{ aspectRatio: project.imageRatio }}
        >
          <div className="project-card__image-inner">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
              className="object-cover"
              priority={index < 2}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2.5 px-1 pb-1">
          <h3 className="text-[20px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[22px]">
            {project.title}
          </h3>
          <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
            {project.description}
          </p>
        </div>

        <p className="px-1 pb-2 text-[12px] tracking-tight text-foreground/50">
          {project.meta}
        </p>
      </article>
    </FadeIn>
  );
}

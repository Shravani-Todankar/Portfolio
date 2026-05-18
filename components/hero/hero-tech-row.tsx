import type { ReactNode } from "react";

type Tech = {
  label: string;
  slug: string;
  color: string;
};

const TECHS: Tech[] = [
  { label: "React", slug: "react", color: "61DAFB" },
  { label: "JavaScript", slug: "javascript", color: "F7DF1E" },
  { label: "GSAP", slug: "greensock", color: "88CE02" },
  { label: "Shopify", slug: "shopify", color: "7AB55C" },
  { label: "WordPress", slug: "wordpress", color: "21759B" },
  { label: "Webflow", slug: "webflow", color: "146EF5" },
];

export function HeroTechRow(): ReactNode {
  return (
    <ul
      aria-label="Technologies"
      className="mt-2 flex flex-wrap gap-2"
    >
      {TECHS.map((tech) => (
        <li
          key={tech.label}
          className="border-foreground/8 bg-background/80 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[13px] font-medium tracking-tight text-foreground/85 backdrop-blur-sm sm:text-[14px]"
        >
          <img
            src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
            alt=""
            width={16}
            height={16}
            className="h-4 w-4 shrink-0"
            draggable={false}
          />
          {tech.label}
        </li>
      ))}
    </ul>
  );
}

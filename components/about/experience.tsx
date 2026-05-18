import { Globe, Linkedin } from "lucide-react";
import type { ReactNode } from "react";

type Tech = {
  label: string;
  slug: string;
  color: string;
};

type Entry = {
  company: string;
  role: string;
  period: string;
  location: string;
  status: { label: string; tone: "live" | "done" };
  website?: string;
  linkedin?: string;
  techs: Tech[];
  bullets: string[];
};

const TECH: Record<string, Tech> = {
  WordPress: { label: "WordPress", slug: "wordpress", color: "21759B" },
  Webflow: { label: "Webflow", slug: "webflow", color: "146EF5" },
  Shopify: { label: "Shopify", slug: "shopify", color: "7AB55C" },
  Framer: { label: "Framer", slug: "framer", color: "0055FF" },
  React: { label: "React", slug: "react", color: "61DAFB" },
  JavaScript: { label: "JavaScript", slug: "javascript", color: "F7DF1E" },
  HTML: { label: "HTML", slug: "html5", color: "E34F26" },
  CSS: { label: "CSS", slug: "css3", color: "1572B6" },
  Elementor: { label: "Elementor", slug: "elementor", color: "92003B" },
  MySQL: { label: "MySQL", slug: "mysql", color: "4479A1" },
};

const ENTRIES: Entry[] = [
  {
    company: "TechInfinity",
    role: "Jr. Executive — Web Developer",
    period: "Aug 2024 – Present",
    location: "Mumbai (On-site)",
    status: { label: "Working", tone: "live" },
    website: "https://techinfinity.io",
    linkedin: "https://www.linkedin.com/company/techinfinity",
    techs: [
      TECH.WordPress!,
      TECH.Webflow!,
      TECH.Shopify!,
      TECH.Framer!,
      TECH.Elementor!,
      TECH.HTML!,
      TECH.CSS!,
      TECH.JavaScript!,
    ],
    bullets: [
      "Built and optimised responsive websites using HTML, CSS, JavaScript and CMS platforms (WordPress, Webflow, Shopify, Framer), ensuring high performance and cross-device compatibility.",
      "Designed and developed both static and dynamic websites aligned with client requirements, focusing on usability, scalability and modern UI standards.",
      "Crafted intuitive, visually engaging interfaces using tools like Elementor, improving overall user experience and interaction flow.",
      "Managed domain and hosting operations, including seamless website migrations with minimal downtime and zero data loss.",
    ],
  },
  {
    company: "TechInfinity",
    role: "Web Developer Intern",
    period: "May 2024 – Aug 2024",
    location: "Mumbai (On-site)",
    status: { label: "Completed", tone: "done" },
    website: "https://techinfinity.io",
    linkedin: "https://www.linkedin.com/company/techinfinity",
    techs: [
      TECH.WordPress!,
      TECH.Webflow!,
      TECH.Shopify!,
      TECH.HTML!,
      TECH.CSS!,
      TECH.JavaScript!,
    ],
    bullets: [
      "Assisted in the development and maintenance of websites using WordPress, Webflow and Shopify.",
      "Gained hands-on experience with hardcoding by creating and implementing custom features to enhance website functionality and design.",
    ],
  },
];

export function Experience(): ReactNode {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-0.5">
        <span className="text-[12px] uppercase tracking-[0.12em] text-foreground/45">
          Featured
        </span>
        <h3 className="font-serif text-[1.5rem] font-medium tracking-tight text-foreground sm:text-[1.75rem]">
          Experience
        </h3>
      </div>

      <div className="mt-2 flex flex-col gap-4">
        {ENTRIES.map((entry, i) => (
          <ExperienceCard key={`${entry.company}-${entry.period}-${i}`} entry={entry} />
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({ entry }: { entry: Entry }): ReactNode {
  const initials = entry.company.charAt(0);
  return (
    <article className="border-foreground/8 bg-foreground/2 dark:bg-foreground/5 flex flex-col gap-5 rounded-3xl border p-5 sm:p-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="flex items-start gap-4">
          <span
            className="ring-foreground/8 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[20px] font-semibold tracking-tight text-foreground ring-1 dark:bg-white dark:text-neutral-900"
            aria-hidden="true"
          >
            {initials}
          </span>
          <div className="flex min-w-0 flex-col gap-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[17px] font-semibold tracking-tight text-foreground sm:text-[18px]">
                {entry.company}
              </span>
              <span className="flex items-center gap-1.5 text-foreground/55">
                {entry.website && (
                  <a
                    href={entry.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${entry.company} website`}
                    className="focus-ring inline-flex h-6 w-6 items-center justify-center rounded-md transition-colors hover:text-foreground"
                  >
                    <Globe className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}
                {entry.linkedin && (
                  <a
                    href={entry.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${entry.company} on LinkedIn`}
                    className="focus-ring inline-flex h-6 w-6 items-center justify-center rounded-md transition-colors hover:text-foreground"
                  >
                    <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}
              </span>
              <StatusPill status={entry.status} />
            </div>
            <span className="text-[14px] tracking-tight text-foreground/65 sm:text-[15px]">
              {entry.role}
            </span>
          </div>
        </div>

        <div className="flex flex-col text-left text-[13px] tracking-tight text-foreground/60 sm:text-right sm:text-[14px]">
          <span>{entry.period}</span>
          <span>{entry.location}</span>
        </div>
      </header>

      <div className="flex flex-col gap-3">
        <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-foreground/55">
          Technologies
        </span>
        <ul className="flex flex-wrap gap-2">
          {entry.techs.map((tech) => (
            <li
              key={tech.label}
              className="border-foreground/8 bg-background inline-flex items-center gap-2 rounded-xl border px-2.5 py-1.5 text-[13px] font-medium tracking-tight text-foreground/85 sm:text-[14px]"
            >
              <span
                className="inline-flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden rounded-[5px]"
                aria-hidden="true"
              >
                <img
                  src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
                  alt=""
                  width={16}
                  height={16}
                  className="h-4 w-4"
                  draggable={false}
                />
              </span>
              {tech.label}
            </li>
          ))}
        </ul>
      </div>

      <ul className="flex flex-col gap-2.5 text-[14px] leading-[1.6] tracking-tight text-foreground/75 sm:text-[15px]">
        {entry.bullets.map((b) => (
          <li key={b} className="flex gap-3">
            <span aria-hidden="true" className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-foreground/45" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function StatusPill({ status }: { status: Entry["status"] }): ReactNode {
  const isLive = status.tone === "live";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium tracking-tight sm:text-[12px] ${
        isLive
          ? "bg-[#0AE448]/12 text-[#0AE448] ring-1 ring-[#0AE448]/30"
          : "bg-foreground/8 text-foreground/65 ring-1 ring-foreground/10"
      }`}
    >
      <span
        aria-hidden="true"
        className={`inline-block h-1.5 w-1.5 rounded-full ${
          isLive ? "bg-[#0AE448]" : "bg-foreground/50"
        }`}
      />
      {status.label}
    </span>
  );
}

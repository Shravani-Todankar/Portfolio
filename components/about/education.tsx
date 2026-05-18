import { MapPin } from "lucide-react";
import type { ReactNode } from "react";

type Entry = {
  group: "Courses" | "Qualification";
  school: string;
  degree: string;
  period: string;
  location: string;
  grade: { label: string; tone: "top" | "first" };
};

const ENTRIES: Entry[] = [
  {
    group: "Courses",
    school: "Dr. BMN College of Home Science, Matunga",
    degree: "Bachelor of Computer Application (BCA)",
    period: "2021 – 2024",
    location: "Mumbai, India",
    grade: { label: "'O' Grade", tone: "top" },
  },
  {
    group: "Qualification",
    school: "R. A. Podar College of Commerce and Economics, Matunga",
    degree: "Higher Secondary Certificate (HSC)",
    period: "2019 – 2021",
    location: "Mumbai, India",
    grade: { label: "81.54% · First Class", tone: "first" },
  },
  {
    group: "Qualification",
    school: "Radha Purushottam Patwardhan Madhyamik Vidyalaya, Kurdhe",
    degree: "Secondary School Certificate (SSC)",
    period: "2019",
    location: "Ratnagiri, India",
    grade: { label: "84.50% · First Class", tone: "first" },
  },
];

export function Education(): ReactNode {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-0.5">
        <span className="text-[12px] uppercase tracking-[0.12em] text-foreground/45">
          Academic
        </span>
        <h3 className="font-serif text-[1.5rem] font-medium tracking-tight text-foreground sm:text-[1.75rem]">
          Education
        </h3>
      </div>

      <div className="mt-2 flex flex-col gap-4">
        {ENTRIES.map((entry, i) => (
          <EducationCard key={`${entry.school}-${i}`} entry={entry} />
        ))}
      </div>
    </div>
  );
}

function EducationCard({ entry }: { entry: Entry }): ReactNode {
  const initials = entry.school
    .replace(/^(Dr\.|R\.|Radha)\s+/, "")
    .charAt(0);
  return (
    <article className="border-foreground/8 bg-foreground/2 dark:bg-foreground/5 flex flex-col gap-4 rounded-3xl border p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <span
          className="border-foreground/15 text-foreground/65 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border bg-background text-[20px] font-semibold tracking-tight"
          aria-hidden="true"
        >
          {initials}
        </span>
        <div className="flex min-w-0 flex-col gap-1.5">
          <span className="text-[11px] uppercase tracking-[0.12em] text-foreground/45">
            {entry.group}
          </span>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[17px] font-semibold leading-tight tracking-tight text-foreground sm:text-[18px]">
              {entry.degree}
            </span>
            <GradePill grade={entry.grade} />
          </div>
          <span className="text-[14px] tracking-tight text-foreground/65 sm:text-[15px]">
            {entry.school}
          </span>
        </div>
      </div>

      <div className="border-foreground/8 flex flex-wrap items-center gap-x-4 gap-y-1 border-t pt-4 text-[13px] tracking-tight text-foreground/60 sm:text-[14px]">
        <span>{entry.period}</span>
        <span aria-hidden="true" className="h-0.5 w-0.5 rounded-full bg-foreground/30" />
        <span className="inline-flex items-center gap-1">
          <MapPin className="h-3 w-3" aria-hidden="true" />
          {entry.location}
        </span>
      </div>
    </article>
  );
}

function GradePill({ grade }: { grade: Entry["grade"] }): ReactNode {
  const isTop = grade.tone === "top";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-medium tracking-tight sm:text-[12px] ${
        isTop
          ? "bg-[#0AE448]/12 text-[#0AE448] ring-1 ring-[#0AE448]/30"
          : "bg-foreground/8 text-foreground/75 ring-1 ring-foreground/10"
      }`}
    >
      <span
        aria-hidden="true"
        className={`inline-block h-1.5 w-1.5 rounded-full ${
          isTop ? "bg-[#0AE448]" : "bg-foreground/45"
        }`}
      />
      {grade.label}
    </span>
  );
}

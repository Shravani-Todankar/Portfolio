import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/metadata";
import { PROJECTS } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const lastModified = new Date();

  return [
    { url: base, lastModified, changeFrequency: "weekly", priority: 1 },
    {
      url: `${base}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/projects`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...PROJECTS.map((p) => ({
      url: `${base}/projects/${p.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}

import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "You're offline",
  description: "No internet connection detected.",
  path: "/offline",
  noIndex: true,
});

export default function OfflinePage(): ReactNode {
  return (
    <main
      id="main-content"
      className="flex flex-1 flex-col items-center justify-center px-6 py-40 text-center"
    >
      <div className="rounded-4xl border border-foreground/5 bg-foreground/1.5 p-8 sm:p-12 dark:bg-foreground/3">
        <h1 className="font-serif text-[1.75rem] font-medium tracking-tight text-foreground sm:text-[2rem]">
          You&rsquo;re offline
        </h1>
        <p className="mt-4 max-w-sm text-foreground/60">
          This page hasn&rsquo;t been saved for offline viewing yet. Reconnect
          to the internet and try again.
        </p>
      </div>
    </main>
  );
}

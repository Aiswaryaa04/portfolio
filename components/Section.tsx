import type { ReactNode } from "react";

export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-14 scroll-mt-24">
      <div className="flex items-center gap-4 mb-8">
        <span className="inline-flex rounded-md border border-black/10 dark:border-white/10 px-3 py-1 text-xs tracking-wide">
          {title.toUpperCase()}
        </span>
        <div className="h-px flex-1 bg-black/10 dark:bg-white/10" />
      </div>
      {children}
    </section>
  );
}

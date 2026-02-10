import Section from "./Section";

export type StackCard = {
  title: string;
  meta?: string;
  body: string[];
  tags?: string[];
};

export default function StackedCards({
  id,
  title,
  cards,
}: {
  id: string;
  title: string;
  cards: StackCard[];
}) {
  return (
    <Section id={id} title={title}>
      {/* The outer wrapper creates scroll space */}
      <div className="relative">
        <div className="stack-space" />

        {/* Sticky stage */}
        <div className="stack-stage">
          <div className="stack-frame">
            {cards.map((c, idx) => (
              <article
                key={idx}
                className="stack-card"
                style={{
                  // Each next card sits a bit lower (like Neha)
                  transform: `translateY(${idx * 18}px)`,
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{c.title}</h3>
                    {c.meta ? (
                      <p className="mt-1 text-sm text-neutral-600 dark:text-white/70">{c.meta}</p>
                    ) : null}
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-white/75">
                  {c.body.map((b, i) => (
                    <p key={i}>• {b}</p>
                  ))}
                </div>

                {c.tags?.length ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs rounded-md border border-black/10 dark:border-white/10 px-2 py-1 text-neutral-600 dark:text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>

        <div className="stack-space" />
      </div>
    </Section>
  );
}

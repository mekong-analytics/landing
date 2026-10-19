const AUDIENCES = [
  {
    label: "For Funds",
    title: "Information advantage in a frontier market.",
    body: "Translated transcripts and disclosures from Vietnam's listed companies — delivered in a format your analysts can actually work with.",
  },
  {
    label: "For Data Aggregators",
    title: "Enterprise feeds, ready to ingest.",
    body: "A clean, structured pipeline of Vietnamese corporate communications for terminal providers and quantitative platforms.",
  },
];

export function Coverage() {
  return (
    <section id="coverage" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <span className="mb-3 block text-xs font-semibold tracking-wider text-mekong-clay uppercase">
            Who We Serve
          </span>
          <h2 className="text-4xl leading-[1.08] font-bold tracking-tight md:text-5xl">
            Built for serious capital.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {AUDIENCES.map((audience) => (
            <div
              key={audience.label}
              className="rounded-xl border border-border bg-white p-10 transition-colors hover:border-mekong-clay/50 md:p-12"
            >
              <span className="mb-5 block text-xs font-semibold tracking-wider text-mekong-clay uppercase">
                {audience.label}
              </span>
              <h3 className="mb-4 text-2xl leading-snug font-bold">{audience.title}</h3>
              <p className="leading-relaxed text-mekong-deep/65">{audience.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

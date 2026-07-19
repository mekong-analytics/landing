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
    <section id="coverage" className="section pt-0">
      <div className="container">
        <div className="mb-16 max-w-2xl">
          <span className="overline mb-4">Who We Serve</span>
          <h2 className="text-4xl leading-[1.15] font-extrabold tracking-[-0.025em] md:text-5xl">
            Built for serious capital.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {AUDIENCES.map((audience) => (
            <div
              key={audience.label}
              className="rounded-xl border border-[var(--color-border)] bg-white p-10 shadow-[0_2px_8px_rgba(0,0,0,.06)] transition-transform duration-[400ms] ease hover:-translate-y-1 md:p-14"
            >
              <span className="overline mb-6">{audience.label}</span>
              <h3 className="mb-5 text-2xl leading-tight font-bold md:text-3xl">
                {audience.title}
              </h3>
              <p className="leading-relaxed text-[var(--color-deep)]/70">
                {audience.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const FEATURES = [
  {
    number: "01",
    title: "Nuanced Translation",
    body: "Beyond literal translation — we preserve the idioms, regulatory language and market context unique to the Vietnamese market.",
  },
  {
    number: "02",
    title: "Aggregator Ready",
    body: "Structured, machine-readable delivery designed for seamless ingestion into terminals, quant models and research stacks.",
  },
  {
    number: "03",
    title: "Coverage You Can Trust",
    body: "Earnings calls, AGM notes and investor relations materials — captured close to the source and delivered without delay.",
  },
];

export function Approach() {
  return (
    <section id="methodology" className="section border-t border-[var(--color-border)]">
      <div className="container grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <Image
          src="/images/approach.jpg"
          alt="Modern glass facade of a building in Ho Chi Minh City"
          width={1280}
          height={800}
          loading="lazy"
          className="aspect-[4/3] w-full rounded-xl object-cover shadow-xl shadow-[var(--color-deep)]/10"
        />
        <div>
          <span className="eyebrow mb-4">Our Approach</span>
          <h2 className="mb-10 font-serif text-4xl leading-[1.1] font-semibold tracking-[-0.025em] md:text-5xl">
            Local context, <span className="italic">global</span> standards.
          </h2>
          <div className="flex flex-col gap-10">
            {FEATURES.map((feature) => (
              <div key={feature.number} className="flex gap-6">
                <div className="shrink-0 font-serif text-4xl leading-none italic text-[var(--color-clay)]">
                  {feature.number}
                </div>
                <div>
                  <h3 className="mb-2 text-xs font-bold tracking-[0.1em] uppercase">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-[var(--color-deep)]/70">
                    {feature.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

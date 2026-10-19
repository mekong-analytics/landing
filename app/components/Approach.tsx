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
    <section id="methodology" className="bg-secondary px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Image
            src="/images/methodology.jpg"
            alt="Modern glass facade of a building in Ho Chi Minh City"
            width={1280}
            height={800}
            sizes="(min-width: 1024px) 50vw, 100vw"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg shadow-mekong-deep/10"
          />
        </div>
        <div>
          <span className="mb-3 block text-xs font-semibold tracking-wider text-mekong-clay uppercase">
            Our Approach
          </span>
          <h2 className="mb-10 text-4xl leading-[1.08] font-bold tracking-tight md:text-5xl">
            Local context, global standards.
          </h2>
          <div className="space-y-8">
            {FEATURES.map((feature) => (
              <div key={feature.number} className="flex gap-5">
                <div className="mt-0.5 w-8 shrink-0 text-sm leading-none font-bold text-mekong-clay">
                  {feature.number}
                </div>
                <div>
                  <h4 className="mb-1.5 text-base font-semibold">{feature.title}</h4>
                  <p className="text-[15px] leading-relaxed text-mekong-deep/65">
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

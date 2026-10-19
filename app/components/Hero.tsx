import Image from "next/image";

export function Hero() {
  return (
    <header className="px-6 pt-24 pb-20 md:px-10 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="mb-6 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              Vietnam Market Intelligence
            </span>
            <h2 className="mb-6 text-3xl leading-tight font-bold tracking-tight md:text-4xl">
              Every word from the market, in English.
            </h2>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-mekong-deep/65">
              Translated earnings calls, AGM notes and investor relations
              materials from the Vietnamese market — built for global funds
              and data aggregators.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#access"
                className="rounded-md bg-mekong-clay px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-mekong-clay/90"
              >
                Request Access
              </a>
              <a
                href="#methodology"
                className="rounded-md border border-border px-6 py-3 text-sm font-semibold text-mekong-deep/70 transition-colors hover:border-mekong-clay hover:text-mekong-clay"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <Image
              src="/images/hero-street.jpg"
              alt="Aerial view of a boat on the Mekong River passing lush greenery"
              width={800}
              height={1024}
              sizes="(min-width: 1024px) 40vw, 100vw"
              priority
              className="aspect-[4/5] w-full rounded-xl object-cover shadow-lg shadow-mekong-deep/10"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

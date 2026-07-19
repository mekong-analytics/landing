import Image from "next/image";

export function Hero() {
  return (
    <header className="section pt-32 md:pt-40">
      <div className="container grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <span className="mb-6 inline-block rounded-full border border-[var(--color-clay)] px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-[var(--color-clay)] uppercase">
            Vietnam Market Intelligence
          </span>
          <h1 className="mb-8 text-5xl leading-[1.12] font-extrabold tracking-[-0.025em] md:text-6xl lg:text-7xl">
            Vietnam&apos;s Capital Markets{" "}
            <span className="text-[var(--color-clay)]">Clarified</span>.
          </h1>
          <p className="mb-10 max-w-xl text-lg text-[var(--color-deep)]/70 md:text-xl">
            Translated earnings calls, AGM notes and investor relations
            materials from the Vietnamese market — built for global funds
            and data aggregators.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#access" className="btn btn-primary">
              Request Access
            </a>
            <a
              href="#methodology"
              className="text-[11px] font-bold tracking-[0.15em] text-[var(--color-deep)]/60 uppercase transition-colors hover:text-[var(--color-clay)]"
            >
              Learn More →
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <Image
            src="/images/hero.jpg"
            alt="Aerial view of a boat on the Mekong River passing lush greenery"
            width={800}
            height={1024}
            priority
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl shadow-[var(--color-deep)]/20"
          />
        </div>
      </div>
    </header>
  );
}

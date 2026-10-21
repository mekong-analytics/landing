import Image from "next/image";


export function Footer() {
  return (
    <footer className="border-t border-border bg-white px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-mekong-deep/50 md:flex-row">
        <Image
          src="/brand/mekong-analytics-logo.svg"
          alt="Mekong Analytics"
          width={110}
          height={20}
          className="h-5 w-auto"
        />

        <span>© 2026 · Singapore</span>
      </div>
    </footer>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-12">
      <div className="container flex flex-col items-center justify-between gap-4 text-[10px] font-bold tracking-[0.1em] text-[var(--color-deep)]/45 uppercase md:flex-row">
        <span className="font-serif text-base font-semibold tracking-tight text-[var(--color-deep)] normal-case">
          Mekong Analytics
        </span>
        <span>© 2026 · Ho Chi Minh City</span>
      </div>
    </footer>
  );
}

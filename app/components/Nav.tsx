export function Nav() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-paper)]/80 backdrop-blur-[16px]">
      <div className="container flex items-center justify-between py-5">
        <a href="#" className="font-serif text-2xl font-semibold tracking-tight">
          Mekong Analytics
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#methodology" className="text-xs font-bold tracking-[0.1em] uppercase transition-colors hover:text-[var(--color-clay)]">
            Approach
          </a>
          <a href="#coverage" className="text-xs font-bold tracking-[0.1em] uppercase transition-colors hover:text-[var(--color-clay)]">
            Coverage
          </a>
          <a href="#access" className="btn btn-primary">
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}

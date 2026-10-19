export function Nav() {
  return (
    <nav className="px-6 md:px-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between py-5">
        <a href="#" className="text-lg font-bold tracking-tight">
          Mekong Analytics
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium text-mekong-deep/70 md:flex">
          <a href="#methodology" className="transition-colors hover:text-mekong-clay">
            Approach
          </a>
          <a href="#coverage" className="transition-colors hover:text-mekong-clay">
            Coverage
          </a>
          <a
            href="#access"
            className="rounded-md bg-mekong-clay px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-mekong-clay/90"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}

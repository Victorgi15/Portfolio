const Navbar = ({ navigation }) => {
  const focusRing =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-base)]';

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[color:var(--color-border)] bg-[rgba(10,14,20,0.85)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className={`font-display text-base font-semibold text-white ${focusRing}`}
        >
          {navigation.brand}
        </a>
        <div className="hidden items-center gap-6 text-sm text-[color:var(--color-muted)] md:flex">
          {navigation.links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`transition hover:text-white ${focusRing}`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href={navigation.cta.href}
          className={`inline-flex items-center justify-center rounded-full border border-[color:var(--color-border)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-white transition hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] ${focusRing}`}
        >
          {navigation.cta.label}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

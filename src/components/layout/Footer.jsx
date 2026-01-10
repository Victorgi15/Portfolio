const Footer = ({ note }) => (
  <footer className="border-t border-[color:var(--color-border)] py-8">
    <div className="mx-auto w-full max-w-6xl px-6">
      <p className="text-sm text-[color:var(--color-muted)]">{note}</p>
    </div>
  </footer>
);

export default Footer;

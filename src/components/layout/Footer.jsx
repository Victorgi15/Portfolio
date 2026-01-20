const Footer = ({ note }) => (
  <footer className="border-t border-[color:var(--color-border)] py-8">
    <div className="mx-auto w-full max-w-[1400px] px-6">
      <p className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
        {note}
      </p>
    </div>
  </footer>
);

export default Footer;

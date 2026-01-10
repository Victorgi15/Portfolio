const Tag = ({ label }) => (
  <span className="rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-panel-soft)] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
    {label}
  </span>
);

export default Tag;

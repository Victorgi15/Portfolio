const Panel = ({ children, className = '', ...rest }) => (
  <div
    data-gravity-card="true"
    {...rest}
    className={`rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-panel)] shadow-panel ${className}`}
  >
    {children}
  </div>
);

export default Panel;

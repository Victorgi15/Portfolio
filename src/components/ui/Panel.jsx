const Panel = ({ children, className = '', ...rest }) => (
  <div
    {...rest}
    className={`rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-panel)] shadow-panel ${className}`}
  >
    {children}
  </div>
);

export default Panel;

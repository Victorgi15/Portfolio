const SectionHeader = ({ eyebrow, title, description, align = 'left' }) => {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
        {eyebrow}
      </p>
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-display font-semibold text-white sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-base text-[color:var(--color-muted)]">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default SectionHeader;

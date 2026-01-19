const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = 'left',
  titlePlatform = false,
  eyebrowPlatform = false,
}) => {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  const eyebrowClass = eyebrowPlatform ? 'inline-block w-fit' : '';
  const titleClass = titlePlatform ? 'inline-block w-fit' : '';

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      <p
        className={`text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)] ${eyebrowClass}`}
        data-stick-platform={eyebrowPlatform ? 'true' : undefined}
      >
        {eyebrow}
      </p>
      <div className="flex flex-col gap-3">
        <h2
          className={`text-3xl font-display font-semibold text-white sm:text-4xl ${titleClass}`}
          data-stick-platform={titlePlatform ? 'true' : undefined}
        >
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

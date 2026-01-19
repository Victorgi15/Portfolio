import { useEffect, useState } from 'react';
import MotionReveal from '../ui/MotionReveal';
import Panel from '../ui/Panel';
import SectionHeader from '../ui/SectionHeader';
import Tag from '../ui/Tag';

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-base)]';

const ProjectCarousel = ({ images, title }) => {
  const [index, setIndex] = useState(0);
  const total = images.length;
  const current = images[index];
  const isContain = current.fit === 'contain';

  useEffect(() => {
    if (total <= 1) return undefined;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return undefined;

    const intervalId = window.setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % total);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, [total]);

  return (
    <div
      className={`relative h-44 overflow-hidden rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-panel-soft)] ${
        isContain ? 'p-3' : ''
      }`}
    >
      <img
        src={current.src}
        alt={current.alt || title}
        className={`h-full w-full brightness-90 ${
          isContain ? 'object-contain' : 'object-cover'
        }`}
        loading="lazy"
      />
      {total > 1 ? (
        <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2">
          {images.map((image, imageIndex) => (
            <button
              key={`${image.src}-${imageIndex}`}
              type="button"
              onClick={() => setIndex(imageIndex)}
              className={`rounded-full p-1 ${focusRing}`}
              aria-label={`Show image ${imageIndex + 1} of ${total}`}
            >
              <span
                className={`block h-2 w-2 rounded-full transition ${
                  imageIndex === index ? 'bg-white scale-110' : 'bg-white/40'
                }`}
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

const Projects = ({ data }) => {
  const [showAll, setShowAll] = useState(false);
  const totalItems = data.items.length;
  const visibleItems = showAll ? data.items : data.items.slice(0, 6);
  const hasMore = totalItems > 6;

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto w-full max-w-[1400px] px-6">
        <MotionReveal>
          <SectionHeader
            eyebrow={data.eyebrow}
            title={data.title}
            description={data.description}
            titlePlatform
            eyebrowPlatform
          />
        </MotionReveal>
        <div className="mt-12 grid gap-12 lg:gap-14 lg:grid-cols-2 xl:grid-cols-3">
          {visibleItems.map((project, index) => {
            const hasSite = Boolean(project.site?.href);
            const hasSource = Boolean(project.link?.href);
            const cardHref = hasSite ? project.site.href : project.link?.href;
            const statusLabel =
              project.status === 'Open source' ? 'View source code' : project.status;
            const showSourceButton =
              hasSite && hasSource && project.status === 'Open source';
            const isClickable = Boolean(cardHref);
            const shouldAnimate = !showAll || index < 6;

            const handleCardClick = () => {
              if (!cardHref) return;
              window.open(cardHref, '_blank', 'noopener,noreferrer');
            };

            const handleKeyDown = (event) => {
              if (!isClickable) return;
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                handleCardClick();
              }
            };

            const card = (
              <div
                role={isClickable ? 'link' : undefined}
                tabIndex={isClickable ? 0 : undefined}
                onClick={isClickable ? handleCardClick : undefined}
                onKeyDown={isClickable ? handleKeyDown : undefined}
                className={`group block h-full ${isClickable ? `cursor-pointer ${focusRing}` : ''}`}
              >
                <Panel
                  className="relative flex h-full flex-col gap-4 p-6 transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:border-[color:var(--color-accent)] group-hover:shadow-glow"
                  data-stick-platform="true"
                >
                  {showSourceButton ? (
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="absolute right-6 top-6 inline-flex min-h-6 items-center justify-center rounded-full border border-[color:var(--color-border)] px-3 py-1 text-center text-[9px] uppercase leading-tight tracking-[0.2em] text-[color:var(--color-muted)] whitespace-nowrap transition hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
                    >
                      {statusLabel}
                    </a>
                  ) : (
                    <span className="absolute right-6 top-6 inline-flex min-h-6 items-center justify-center rounded-full border border-[color:var(--color-border)] px-3 py-1 text-center text-[9px] uppercase leading-tight tracking-[0.2em] text-[color:var(--color-muted)] whitespace-nowrap">
                      {statusLabel}
                    </span>
                  )}
                  <div className="flex items-start pr-28">
                    <h3 className="project-title text-lg font-display font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                  <p className="project-summary text-sm text-[color:var(--color-muted)]">
                    {project.summary}
                  </p>
                  {project.images && project.images.length ? (
                    <ProjectCarousel images={project.images} title={project.title} />
                  ) : project.video ? (
                    <div
                      className={`h-44 overflow-hidden rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-panel-soft)] box-border ${
                        project.videoFit === 'contain' ? 'p-3' : ''
                      }`}
                    >
                      <video
                        src={project.video}
                        className={`h-full w-full ${
                          project.videoFit === 'contain'
                            ? 'object-contain'
                            : 'object-cover brightness-90'
                        }`}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        aria-label={project.videoAlt || project.title}
                      />
                    </div>
                  ) : project.image ? (
                    <div
                      className={`h-44 overflow-hidden rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-panel-soft)] box-border ${
                        project.imageFit === 'contain' ? 'p-3' : ''
                      }`}
                    >
                      <img
                        src={project.image}
                        alt={project.imageAlt || project.title}
                        className={`h-full w-full ${
                          project.imageFit === 'contain'
                            ? 'object-contain'
                            : 'object-cover brightness-90'
                        }`}
                        loading="lazy"
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-wrap gap-2 text-xs">
                    {project.stack.map((item) => (
                      <Tag key={item} label={item} />
                    ))}
                  </div>
                  <div className="mt-auto space-y-2">
                    {project.impact.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm text-white">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]"></span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </Panel>
              </div>
            );

            return shouldAnimate ? (
              <MotionReveal key={project.title} delay={index * 0.05}>
                {card}
              </MotionReveal>
            ) : (
              <div key={project.title}>{card}</div>
            );
          })}
        </div>
        {hasMore ? (
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {showAll ? (
              <button
                type="button"
                onClick={() => setShowAll(false)}
                data-stick-platform="true"
                className={`inline-flex items-center justify-center rounded-full border border-[color:var(--color-border)] px-6 py-2.5 text-sm uppercase tracking-[0.22em] text-white transition hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] ${focusRing}`}
              >
                Collapse projects
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setShowAll(true)}
                data-stick-platform="true"
                className={`shine-button inline-flex items-center justify-center rounded-full border border-[color:var(--color-border)] px-6 py-2.5 text-sm uppercase tracking-[0.22em] text-white transition hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] ${focusRing}`}
              >
                View all projects
              </button>
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Projects;

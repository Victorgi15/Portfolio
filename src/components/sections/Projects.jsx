import { useState } from 'react';
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

  return (
    <div className="relative overflow-hidden rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-panel-soft)]">
      <img
        src={current.src}
        alt={current.alt || title}
        className="h-44 w-full object-cover brightness-90"
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
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto w-full max-w-[1400px] px-6">
        <MotionReveal>
          <SectionHeader
            eyebrow={data.eyebrow}
            title={data.title}
            description={data.description}
          />
        </MotionReveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {data.items.map((project, index) => (
            <MotionReveal key={project.title} delay={index * 0.05}>
              <Panel className="flex h-full flex-col gap-4 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-display font-semibold text-white">
                    {project.title}
                  </h3>
                    {project.link ? (
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex min-h-6 items-center justify-center rounded-full border border-[color:var(--color-border)] px-3 py-1 text-center text-[10px] uppercase leading-none tracking-[0.3em] text-[color:var(--color-text)] transition hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] ${focusRing}`}
                    >
                      {project.status}
                    </a>
                    ) : (
                      <span className="inline-flex min-h-6 items-center justify-center rounded-full border border-[color:var(--color-border)] px-3 py-1 text-center text-[10px] uppercase leading-none tracking-[0.3em] text-[color:var(--color-muted)]">
                        {project.status}
                    </span>
                  )}
                </div>
                <p className="text-sm text-[color:var(--color-muted)]">{project.summary}</p>
                {project.images && project.images.length ? (
                  <ProjectCarousel images={project.images} title={project.title} />
                ) : project.video ? (
                  <div
                    className={`overflow-hidden rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-panel-soft)] ${
                      project.videoFit === 'contain' ? 'p-3' : ''
                    }`}
                  >
                    <video
                      src={project.video}
                      className={`h-44 w-full ${
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
                    className={`overflow-hidden rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-panel-soft)] ${
                      project.imageFit === 'contain' ? 'p-3' : ''
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.imageAlt || project.title}
                      className={`h-44 w-full ${
                        project.imageFit === 'contain'
                          ? 'object-contain'
                          : 'object-cover brightness-90'
                      }`}
                      loading="lazy"
                    />
                  </div>
                ) : null}
                {project.site ? (
                  <a
                    href={project.site.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-fit rounded-full border border-[color:var(--color-border)] px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-text)] transition hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] ${focusRing}`}
                  >
                    {project.site.label}
                  </a>
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
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

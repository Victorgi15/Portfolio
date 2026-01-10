import MotionReveal from '../ui/MotionReveal';
import Panel from '../ui/Panel';
import SectionHeader from '../ui/SectionHeader';
import Tag from '../ui/Tag';

const Projects = ({ data }) => {
  const focusRing =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-base)]';

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <MotionReveal>
          <SectionHeader
            eyebrow={data.eyebrow}
            title={data.title}
            description={data.description}
          />
        </MotionReveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
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
                      className={`rounded-full border border-[color:var(--color-border)] px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-text)] transition hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] ${focusRing}`}
                    >
                      {project.status}
                    </a>
                    ) : (
                      <span className="rounded-full border border-[color:var(--color-border)] px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
                        {project.status}
                    </span>
                  )}
                </div>
                <p className="text-sm text-[color:var(--color-muted)]">{project.summary}</p>
                {project.image ? (
                  <div className="overflow-hidden rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-panel-soft)]">
                    <img
                      src={project.image}
                      alt={project.imageAlt || project.title}
                      className="h-44 w-full object-cover brightness-90"
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
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

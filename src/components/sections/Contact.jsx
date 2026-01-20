import MotionReveal from '../ui/MotionReveal';
import Panel from '../ui/Panel';
import SectionHeader from '../ui/SectionHeader';

const Contact = ({ data }) => {
  const focusRing =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-base)]';

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto w-full max-w-[1400px] px-6">
        <MotionReveal>
          <SectionHeader
            eyebrow={data.eyebrow}
            title={data.title}
            description={data.description}
          />
        </MotionReveal>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <MotionReveal>
            <Panel className="flex h-full flex-col gap-6 p-6" data-stick-platform="true">
              <p className="text-base text-[color:var(--color-muted)]">{data.description}</p>
              <div className="flex flex-wrap gap-4">
                {data.ctas.map((cta) => (
                  <a
                    key={cta.label}
                    href={cta.href}
                  className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-200 ease-out motion-reduce:transition-none motion-reduce:transform-none hover:-translate-y-0.5 ${
                    cta.variant === 'primary'
                      ? 'bg-[rgba(var(--color-accent)/0.5)] text-[color:var(--color-base)] shadow-[0_0_0_1px_rgba(var(--color-accent)/0.2),0_7px_13px_rgba(var(--color-accent)/0.11)] hover:brightness-105 cta-pulse'
                      : 'border border-[color:var(--color-border)] text-white hover:border-white hover:bg-white hover:text-[color:var(--color-base)]'
                  } ${focusRing}`}
                >
                    {cta.label}
                  </a>
                ))}
              </div>
              <div className="mt-auto grid gap-3">
                {data.meta.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-panel-soft)] px-4 py-3"
                    >
                      <Icon className="h-4 w-4 text-[color:var(--color-accent)]" />
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
                          {item.label}
                        </p>
                        <p className="text-sm text-white">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Panel>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <Panel className="flex h-full flex-col gap-6 p-6" data-stick-platform="true">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
                  {data.socialLabel}
                </p>
                <div className="mt-4 space-y-3">
                  {data.socials.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className={`flex items-center gap-3 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-panel-soft)] px-4 py-3 text-sm text-white transition hover:border-[color:var(--color-accent)] ${focusRing}`}
                      >
                        <Icon className="h-4 w-4 text-[color:var(--color-accent)]" />
                        {item.label}
                      </a>
                    );
                  })}
                </div>
              </div>
              {data.downloads?.length ? (
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
                    {data.downloadsLabel}
                  </p>
                  <div className="mt-4 space-y-3">
                    {data.downloads.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.label}
                          href={item.href}
                          download={item.download}
                          className={`flex items-center gap-3 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-panel-soft)] px-4 py-3 text-sm text-white transition hover:border-[color:var(--color-accent)] ${focusRing}`}
                        >
                          <Icon className="h-4 w-4 text-[color:var(--color-accent)]" />
                          {item.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </Panel>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;

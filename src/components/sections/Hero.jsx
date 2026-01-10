import MotionReveal from '../ui/MotionReveal';
import Panel from '../ui/Panel';

const Hero = ({ data }) => {
  const levelClass = (level) => {
    if (level === 'warn') {
      return 'text-[color:var(--color-accent)]';
    }
    if (level === 'ok') {
      return 'text-[color:var(--color-accent-2)]';
    }
    return 'text-[color:var(--color-muted)]';
  };
  const focusRing =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-base)]';

  return (
    <section id="home" className="pb-20 pt-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <MotionReveal className="flex flex-col gap-8">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--color-muted)]">
                {data.kicker}
              </p>
              <h1 className="text-4xl font-display font-semibold text-white sm:text-5xl">
                {data.headline}
              </h1>
              <p className="text-lg text-[color:var(--color-muted)] sm:text-xl">
                {data.subheadline}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {data.ctas.map((cta) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-200 ease-out motion-reduce:transition-none motion-reduce:transform-none hover:-translate-y-0.5 ${
                    cta.variant === 'primary'
                      ? 'bg-[color:var(--color-accent)] text-[color:var(--color-base)] hover:brightness-110'
                      : 'border border-[color:var(--color-border)] text-white hover:border-white hover:bg-white hover:text-[color:var(--color-base)]'
                  } ${focusRing}`}
                >
                  {cta.label}
                </a>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {data.quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-panel)] p-4"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
                    {fact.label}
                  </p>
                  <p className="mt-2 text-sm text-white">{fact.value}</p>
                </div>
              ))}
            </div>
          </MotionReveal>
          <MotionReveal delay={0.2} className="space-y-6">
            <Panel className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
                    {data.systemSnapshot.title}
                  </p>
                  <p className="text-sm text-white">{data.systemSnapshot.status}</p>
                </div>
                <span className="rounded-full border border-[color:var(--color-border)] px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
                  {data.systemSnapshot.liveLabel}
                </span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {data.systemSnapshot.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-panel-soft)] p-3"
                  >
                    <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">{metric.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid gap-3">
                {data.systemSnapshot.signals.map((signal) => (
                  <div
                    key={signal.label}
                    className="flex items-center justify-between rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-panel-soft)] px-4 py-3 text-sm"
                  >
                    <span className="text-[color:var(--color-muted)]">{signal.label}</span>
                    <span className={`${levelClass(signal.level)} font-semibold`}>
                      {signal.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-[color:var(--color-border)] pt-4">
                <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
                  {data.systemSnapshot.logsLabel}
                </p>
                <div className="mt-3 space-y-2 text-xs font-mono">
                  {data.systemSnapshot.logs.map((log) => (
                    <div key={`${log.time}-${log.message}`} className="flex gap-3">
                      <span className="text-[color:var(--color-muted)]">{log.time}</span>
                      <span className={levelClass(log.level)}>{log.message}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Panel>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import MotionReveal from '../ui/MotionReveal';
import Panel from '../ui/Panel';
import GameOfLifeBackground from '../ui/GameOfLifeBackground';

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
  const barClass = (tone) => {
    if (tone === 'warn') {
      return 'bg-[color:var(--color-accent)]';
    }
    if (tone === 'ok') {
      return 'bg-[color:var(--color-accent-2)]';
    }
    if (tone === 'muted') {
      return 'bg-[color:var(--color-border)]';
    }
    return 'bg-[color:var(--color-accent)]';
  };
  const focusRing =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-base)]';

  const hasBars = Boolean(data.systemSnapshot?.bars?.length);
  const barStyle = ['shine', 'striped', 'beacon'].includes(data.systemSnapshot?.barsStyle)
    ? data.systemSnapshot.barsStyle
    : 'shine';

  return (
    <section id="home" className="relative pb-20 pt-28">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
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
                  data-stick-platform="true"
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
                  data-stick-platform="true"
                  className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-panel)] p-4"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
                    {fact.label}
                  </p>
                  <p className="mt-2 text-sm text-white">{fact.value}</p>
                </div>
              ))}
            </div>
            {data.toolbox && data.toolbox.length ? (
              <div className="grid gap-4 sm:grid-cols-3">
                {data.toolbox.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      data-stick-platform="true"
                      className="flex items-center gap-3 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-panel-soft)] p-4"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-panel)]">
                        <Icon className="h-4 w-4 text-[color:var(--color-accent-2)]" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm text-white">{item.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </MotionReveal>
          <MotionReveal delay={0.2} className="relative">
            <div className="relative">
              <Panel className="p-6" data-stick-platform="true" data-stick-spawn="true">
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
                {hasBars ? (
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-end gap-3">
                      {data.systemSnapshot.barsStatus ? (
                        <span className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
                          {data.systemSnapshot.barsStatus}
                        </span>
                      ) : null}
                    </div>
                    {data.systemSnapshot.bars.map((bar) => (
                      <div key={bar.label} className="space-y-2">
                        <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em]">
                          <span className="text-[color:var(--color-muted)]">{bar.label}</span>
                          <span className="text-[color:var(--color-text)]">{bar.detail}</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-[color:var(--color-panel-soft)]">
                          <div
                            className={`loading-bar loading-bar--${barStyle} h-full rounded-full ${barClass(
                              bar.tone
                            )}`}
                            style={{ width: `${bar.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
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
                  </>
                )}
              </Panel>
              <div className="stickman-wallpaper" aria-hidden="true">
                <div className="stickman-wallpaper__grid">
                  <span className="stickman-wallpaper__key stickman-wallpaper__key--blank" />
                  <span
                    className="stickman-wallpaper__key stickman-wallpaper__key--up"
                    data-stick-platform="true"
                  >
                    <svg
                      className="stickman-wallpaper__icon"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path d="M8 13V3M8 3l-4 4M8 3l4 4" />
                    </svg>
                  </span>
                  <span className="stickman-wallpaper__key stickman-wallpaper__key--blank" />
                  <span className="stickman-wallpaper__key" data-stick-platform="true">
                    <svg
                      className="stickman-wallpaper__icon"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path d="M13 8H3M3 8l4-4M3 8l4 4" />
                    </svg>
                  </span>
                  <span className="stickman-wallpaper__key" data-stick-platform="true">
                    <svg
                      className="stickman-wallpaper__icon"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path d="M8 3v10M8 13l-4-4M8 13l4-4" />
                    </svg>
                  </span>
                  <span className="stickman-wallpaper__key" data-stick-platform="true">
                    <svg
                      className="stickman-wallpaper__icon"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path d="M3 8h10M13 8l-4-4M13 8l-4 4" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="gol-hole gol-hole--float" aria-hidden="true">
              <GameOfLifeBackground />
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;

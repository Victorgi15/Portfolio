import MotionReveal from '../ui/MotionReveal';
import Panel from '../ui/Panel';
import SectionHeader from '../ui/SectionHeader';

const Highlights = ({ data }) => (
  <section id="highlights" className="py-20">
    <div className="mx-auto w-full max-w-6xl px-6">
      <MotionReveal>
        <SectionHeader
          eyebrow={data.eyebrow}
          title={data.title}
          description={data.description}
        />
      </MotionReveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.metrics.map((metric, index) => (
          <MotionReveal key={metric.label} delay={index * 0.05}>
            <Panel className="p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
                {metric.label}
              </p>
              <p className="mt-3 text-2xl font-display font-semibold text-white">
                {metric.value}
              </p>
              <p className="mt-2 text-xs text-[color:var(--color-muted)]">
                {metric.detail}
              </p>
            </Panel>
          </MotionReveal>
        ))}
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {data.highlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <MotionReveal key={item.title} delay={index * 0.06}>
              <Panel className="flex h-full flex-col gap-4 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-panel-soft)]">
                  <Icon className="h-5 w-5 text-[color:var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-display font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-[color:var(--color-muted)]">{item.detail}</p>
              </Panel>
            </MotionReveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default Highlights;

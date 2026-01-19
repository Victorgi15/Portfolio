import MotionReveal from '../ui/MotionReveal';
import Panel from '../ui/Panel';
import SectionHeader from '../ui/SectionHeader';

const Skills = ({ data }) => (
  <section id="skills" className="py-20">
    <div className="mx-auto w-full max-w-[1400px] px-6">
      <MotionReveal>
        <SectionHeader
          eyebrow={data.eyebrow}
          title={data.title}
          description={data.description}
        />
      </MotionReveal>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {data.categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <MotionReveal key={category.title} delay={index * 0.06}>
              <Panel className="flex h-full flex-col gap-4 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-panel-soft)]">
                    <Icon className="h-5 w-5 text-[color:var(--color-accent)]" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-panel-soft)] px-3 py-1 text-xs text-[color:var(--color-muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Panel>
            </MotionReveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;

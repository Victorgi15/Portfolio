import MotionReveal from '../ui/MotionReveal';
import Panel from '../ui/Panel';
import SectionHeader from '../ui/SectionHeader';

const Method = ({ data }) => (
  <section id="method" className="py-20">
    <div className="mx-auto w-full max-w-[1400px] px-6">
      <MotionReveal>
        <SectionHeader
          eyebrow={data.eyebrow}
          title={data.title}
          description={data.description}
        />
      </MotionReveal>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {data.steps.map((step, index) => (
          <MotionReveal key={step.title} delay={index * 0.07}>
            <Panel className="flex h-full flex-col gap-4 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
                0{index + 1}
              </p>
              <div className="space-y-3">
                <h3 className="text-lg font-display font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-[color:var(--color-muted)]">{step.summary}</p>
              </div>
              <div className="mt-auto">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
                  {data.outputsLabel}
                </p>
                <div className="mt-3 space-y-2 text-sm text-white">
                  {step.outputs.map((output) => (
                    <p key={output}>{output}</p>
                  ))}
                </div>
              </div>
            </Panel>
          </MotionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Method;

import { CheckCircle } from 'lucide-react';
import MotionReveal from '../ui/MotionReveal';
import Panel from '../ui/Panel';
import SectionHeader from '../ui/SectionHeader';

const About = ({ data }) => (
  <section id="about" className="py-20">
    <div className="mx-auto w-full max-w-[1400px] px-6">
      <MotionReveal>
        <SectionHeader
          eyebrow={data.eyebrow}
          title={data.title}
          description={data.description}
        />
      </MotionReveal>
      <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <MotionReveal className="space-y-6">
          {data.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base text-[color:var(--color-muted)]">
              {paragraph}
            </p>
          ))}
        </MotionReveal>
        <MotionReveal delay={0.1}>
          <Panel className="p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
              {data.highlightsTitle}
            </p>
            <div className="mt-4 space-y-4">
              {data.highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-[color:var(--color-accent-2)]" />
                  <p className="text-sm text-white">{item}</p>
                </div>
              ))}
            </div>
          </Panel>
        </MotionReveal>
      </div>
    </div>
  </section>
);

export default About;

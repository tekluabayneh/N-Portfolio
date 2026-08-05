import { EXPERIENCES } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24 md:py-28">
      <SectionHeading eyebrow="Experience" title="Where I've worked." />

      <div className="relative border-l border-border pl-8">
        {EXPERIENCES.map((exp, i) => (
          <Reveal key={`${exp.company}-${i}`} delay={i * 80}>
            <div className="relative pb-12 last:pb-0">
              <span className="absolute -left-[38px] top-1.5 size-3 rounded-full bg-primary shadow-[0_0_12px_var(--glow)]" />
              <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">
                  {exp.role} <span className="font-normal text-faint">· {exp.company}</span>
                </h3>
                <span className="font-mono text-sm text-faint">{exp.period}</span>
              </div>
              <ul className="space-y-2">
                {exp.highlights.map((h, hi) => (
                  <li key={hi} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-1 text-primary">▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

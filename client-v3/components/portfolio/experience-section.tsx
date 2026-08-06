import { EXPERIENCES } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-[1400px] px-5 sm:px-8">
      <SectionHeading index="( 03 )" title="Trajectory" kicker="Roles / Contributions" />

      <div className="mt-4">
        {EXPERIENCES.map((exp, i) => (
          <Reveal key={`${exp.company}-${i}`}>
            <div className="grid gap-x-6 gap-y-4 border-b border-border py-8 md:grid-cols-12">
              <div className="md:col-span-3">
                <span className="font-mono text-sm text-primary">{exp.period}</span>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                  {exp.role}
                </h3>
                <p className="mt-1 font-mono text-sm uppercase tracking-wider text-muted-foreground">
                  {exp.company}
                </p>
                <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                  {exp.highlights.map((h, hi) => (
                    <li key={hi} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="font-mono text-xs text-primary">{String(hi + 1).padStart(2, '0')}</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

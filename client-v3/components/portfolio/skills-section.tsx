import { MARQUEE_SKILLS, SKILLS } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function SkillsSection() {
  return (
    <section id="skills" className="flex min-h-full flex-col justify-center bg-panel">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-10 sm:px-8">
        <SectionHeading index="( 02 )" title="Capabilities" kicker="Stack / Tooling" />

        <div className="mt-4 grid md:grid-cols-2">
          {SKILLS.map((group, i) => (
            <Reveal key={group.category} delay={(i % 2) * 80}>
              <div className="group grid grid-cols-[auto_1fr] items-baseline gap-x-6 border-b border-border py-6 md:odd:border-r md:odd:pr-8 md:even:pl-8">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-primary">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-foreground">
                    {group.category}
                  </h3>
                </div>
                <div className="col-start-2 mt-2 flex flex-wrap gap-x-4 gap-y-2 md:col-start-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-sm text-muted-foreground transition-colors group-hover:text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Full-bleed marquee */}
      <div className="relative overflow-hidden border-y border-foreground bg-foreground py-4">
        <div className="animate-marquee flex w-max gap-6 whitespace-nowrap">
          {[...MARQUEE_SKILLS, ...MARQUEE_SKILLS].map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="flex items-center gap-6 font-display text-2xl font-extrabold uppercase tracking-tight text-background sm:text-3xl"
            >
              {skill}
              <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

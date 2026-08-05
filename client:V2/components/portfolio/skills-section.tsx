import { MARQUEE_SKILLS, SKILLS } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24 md:py-28">
      <SectionHeading eyebrow="Stack" title="Tools of the trade." />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((group, i) => (
          <Reveal key={group.category} delay={i * 60}>
            <div className="h-full rounded-2xl border border-border bg-panel p-6 transition-colors hover:border-primary/30">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold">
                <span className="font-mono text-xs text-primary">0{i + 1}</span>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-foreground/[0.05] px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Marquee strip */}
      <div className="relative mt-12 overflow-hidden rounded-2xl border border-border bg-panel/50 py-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
        <div className="animate-marquee flex w-max gap-8 whitespace-nowrap">
          {[...MARQUEE_SKILLS, ...MARQUEE_SKILLS].map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="font-mono text-sm uppercase tracking-widest text-faint"
            >
              {skill}
              <span className="ml-8 text-primary">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

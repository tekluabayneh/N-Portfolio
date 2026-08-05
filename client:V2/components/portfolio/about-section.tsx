import { ArrowUpRight } from 'lucide-react'
import { LINKS } from '@/lib/portfolio-data'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './brand-icons'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const socialChips = [
  { label: 'GitHub', href: LINKS.github, icon: GithubIcon },
  { label: 'LinkedIn', href: LINKS.linkedin, icon: LinkedinIcon },
  { label: 'Twitter', href: LINKS.twitter, icon: TwitterIcon },
]

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24 md:py-28">
      <SectionHeading eyebrow="About" title="A full-stack engineer who ships." />
      <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            I&apos;m a full-stack software engineer who builds performant applications that
            solve real problems.
          </p>
          <p>
            I specialize in modern web technologies, distributed systems, and developer
            tooling — working across TypeScript, Node.js, and Go, with Rust as an ongoing
            exploration.
          </p>
          <p>
            Outside of work, I contribute to open-source projects, write technical posts, and
            tinker with my Arch Linux setup.
          </p>
        </Reveal>
        <Reveal delay={120} className="flex flex-col gap-3">
          {socialChips.map((chip) => {
            const Icon = chip.icon
            return (
              <a
                key={chip.label}
                href={chip.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-border bg-panel px-4 py-3.5 text-sm text-foreground transition-colors hover:border-primary/40"
              >
                <Icon className="size-4 text-primary" />
                {chip.label}
                <ArrowUpRight className="ml-auto size-4 text-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </a>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}

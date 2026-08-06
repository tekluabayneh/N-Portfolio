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
    <section id="about" className="mx-auto max-w-[1400px] px-5 sm:px-8">
      <SectionHeading index="( 01 )" title="Profile" kicker="Who / What / Why" />

      <div className="mt-10 grid gap-x-6 gap-y-10 md:grid-cols-12">
        <div className="md:col-span-7 lg:col-span-6">
          <Reveal className="space-y-5 text-xl leading-relaxed text-foreground md:text-2xl">
            <p>
              I&apos;m a full-stack software engineer who builds performant applications
              that solve real problems — not demos.
            </p>
            <p className="text-muted-foreground">
              I work across TypeScript, Node.js, and Go, with Rust as an ongoing
              exploration, and I&apos;m equally at home shaping a database schema or
              polishing an interaction. Outside of shipping, I contribute to open source
              and live in the terminal on Arch Linux.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-4 md:col-start-9">
          <Reveal delay={120}>
            <p className="mb-4 border-b border-border pb-2 font-mono text-xs uppercase tracking-widest text-faint">
              Elsewhere
            </p>
            <div className="flex flex-col">
              {socialChips.map((chip) => {
                const Icon = chip.icon
                return (
                  <a
                    key={chip.label}
                    href={chip.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 border-b border-border py-3.5 text-sm font-medium text-foreground transition-colors last:border-0 hover:text-primary"
                  >
                    <Icon className="size-4" />
                    {chip.label}
                    <ArrowUpRight className="ml-auto size-4 text-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </a>
                )
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

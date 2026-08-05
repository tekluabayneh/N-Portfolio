'use client'

import { ArrowRight } from 'lucide-react'
import { LINKS, STATS } from '@/lib/portfolio-data'
import { GithubIcon } from './brand-icons'
import { scrollToId } from './reveal'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      {/* Ambient orbs */}
      <div
        aria-hidden
        className="orb-a pointer-events-none absolute -top-32 left-[8%] size-[480px] rounded-full opacity-55 blur-[90px]"
        style={{ background: 'radial-gradient(circle, #ff6a2c, transparent 70%)' }}
      />
      <div
        aria-hidden
        className="orb-b pointer-events-none absolute -bottom-24 right-[8%] size-[380px] rounded-full opacity-55 blur-[90px]"
        style={{ background: 'radial-gradient(circle, #ff8f52, transparent 70%)' }}
      />
      {/* Subtle grid grain */}
      <div aria-hidden className="grain pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative z-10 flex flex-col items-center">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-panel/60 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-primary">
          <span className="size-1.5 rounded-full bg-primary" />
          Full-Stack Software Engineer
        </p>

        <h1 className="font-display text-[clamp(3rem,9vw,6rem)] font-extrabold leading-[0.95] text-balance">
          Teklu{' '}
          <span className="bg-gradient-to-br from-primary-bright to-primary bg-clip-text text-transparent">
            Abayneh
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
          I design and build performant, full-stack applications — from React interfaces to
          Go and Node.js backends.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => scrollToId('projects')}
            className="group flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            View Projects
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-semibold text-foreground transition-colors hover:border-primary/50"
          >
            <GithubIcon className="size-4" />
            GitHub
          </a>
        </div>

        <dl className="mt-16 flex items-center gap-8 sm:gap-12">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <dt className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-1 font-mono text-[11px] uppercase tracking-wider text-faint">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

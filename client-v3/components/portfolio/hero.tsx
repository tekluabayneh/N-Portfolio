'use client'

import { motion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'
import { LINKS, STATS } from '@/lib/portfolio-data'
import { GithubIcon } from './brand-icons'
import { scrollToId } from './reveal'

const EASE = [0.16, 1, 0.3, 1] as const

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

// Each big name line clips up from below with an eased mask.
const nameLine = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: 1, ease: EASE } },
}

export function Hero() {
  return (
    <section id="top" className="grain relative overflow-hidden px-5 pt-8 sm:px-8">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-[1400px]"
      >
        {/* meta row */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-between gap-3 border-b border-foreground pb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground"
        >
          <span>Full-Stack Software Engineer</span>
          <span className="flex items-center gap-2">
            <span className="inline-block size-2 rounded-full bg-primary" />
            Available for work — 2026
          </span>
          <span className="hidden sm:block">Remote / Worldwide</span>
        </motion.div>

        {/* giant name */}
        <div className="relative py-6 sm:py-10">
          <h1 className="font-display font-extrabold uppercase leading-[0.86] tracking-[-0.03em] text-foreground">
            <span className="block overflow-hidden">
              <motion.span
                variants={nameLine}
                className="block text-[19vw] sm:text-[17vw] lg:text-[15.5vw]"
              >
                Teklu
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                variants={nameLine}
                className="block text-[19vw] sm:text-[17vw] lg:text-[15.5vw]"
              >
                Abayneh
              </motion.span>
            </span>
          </h1>
          <motion.span
            variants={item}
            className="pointer-events-none absolute right-0 top-6 font-mono text-xs text-faint sm:top-10"
          >
            [ PORTFOLIO / 2026 ]
          </motion.span>
        </div>

        {/* statement + actions row */}
        <motion.div
          variants={item}
          className="grid gap-8 border-t border-foreground py-8 md:grid-cols-12 md:gap-6"
        >
          <p className="max-w-xl text-lg leading-relaxed text-foreground md:col-span-6 md:text-xl">
            I design and build performant applications end to end — from crisp React
            interfaces down to <span className="text-primary">Go</span> and{' '}
            <span className="text-primary">Node.js</span> services. I care about clean
            systems, fast feedback loops, and shipping things that get used.
          </p>

          <div className="md:col-span-3 md:col-start-8">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-faint">
              Currently
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Open-source contributor building full-stack tools with TypeScript, Go, and
              Docker. Learning distributed systems.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:col-span-2 md:col-start-11">
            <button
              onClick={() => scrollToId('projects')}
              className="group flex items-center justify-between gap-2 bg-primary px-4 py-3 font-mono text-xs uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary-bright"
            >
              View work
              <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </button>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-2 border border-foreground px-4 py-3 font-mono text-xs uppercase tracking-wider text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              GitHub
              <GithubIcon className="size-4" />
            </a>
          </div>
        </motion.div>

        {/* stats strip */}
        <motion.div variants={item} className="grid grid-cols-3 border-t border-foreground">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col gap-1 py-6 ${i !== 0 ? 'border-l border-border pl-5 sm:pl-8' : ''}`}
            >
              <span className="font-display text-4xl font-extrabold text-foreground sm:text-6xl">
                {s.value}
              </span>
              <span className="font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground sm:text-xs">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

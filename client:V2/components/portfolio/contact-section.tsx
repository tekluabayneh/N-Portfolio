'use client'

import { useState } from 'react'
import { Check, Send } from 'lucide-react'
import { SOCIALS } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function ContactSection() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24 md:py-28">
      <SectionHeading eyebrow="Contact" title="Let's build something." />

      <div className="grid gap-8 md:grid-cols-2">
        <Reveal>
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-4 rounded-2xl border border-border bg-panel p-7"
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-faint">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your name"
                className="rounded-xl border border-border bg-foreground/[0.04] px-4 py-3 text-sm outline-none transition-colors placeholder:text-faint focus:border-primary"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-faint">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                className="rounded-xl border border-border bg-foreground/[0.04] px-4 py-3 text-sm outline-none transition-colors placeholder:text-faint focus:border-primary"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-faint">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                placeholder="What are we building?"
                className="resize-none rounded-xl border border-border bg-foreground/[0.04] px-4 py-3 text-sm outline-none transition-colors placeholder:text-faint focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              {sent ? (
                <>
                  <Check className="size-4" /> Message ready
                </>
              ) : (
                <>
                  Send Message <Send className="size-4" />
                </>
              )}
            </button>
          </form>
        </Reveal>

        <Reveal delay={120} className="flex flex-col gap-3">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-panel p-4 transition-colors hover:border-primary/40"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 font-mono text-sm font-bold text-primary">
                {social.tag}
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-[11px] uppercase tracking-wider text-faint">
                  {social.label}
                </span>
                <span className="block truncate text-sm text-foreground">{social.value}</span>
              </span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

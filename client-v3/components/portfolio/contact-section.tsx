'use client'

import { useState } from 'react'
import { ArrowUpRight, Check, Send } from 'lucide-react'
import { LINKS, SOCIALS } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function ContactSection() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const message = String(data.get('message') ?? '')

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${LINKS.email}?subject=${subject}&body=${body}`

    setSent(true)
    form.reset()
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="border-t border-foreground">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading index="( 05 )" title="Let's build something. " kicker="Say hello / Start a project" />

        <div className="mt-10 grid gap-x-12 gap-y-12 md:grid-cols-12">
          {/* Form */}
          <Reveal className="md:col-span-7">
            <form onSubmit={onSubmit} className="flex flex-col">
              <div className="flex flex-col gap-2 border-b border-foreground py-6">
                <label
                  htmlFor="name"
                  className="font-mono text-xs uppercase tracking-widest text-primary"
                >
                  01 / Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full bg-transparent font-display text-2xl font-bold uppercase tracking-tight text-foreground outline-none transition-colors placeholder:text-faint focus:placeholder:text-muted-foreground sm:text-3xl"
                />
              </div>

              <div className="flex flex-col gap-2 border-b border-foreground py-6">
                <label
                  htmlFor="email"
                  className="font-mono text-xs uppercase tracking-widest text-primary"
                >
                  02 / Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full bg-transparent font-display text-2xl font-bold tracking-tight text-foreground outline-none transition-colors placeholder:text-faint focus:placeholder:text-muted-foreground sm:text-3xl"
                />
              </div>

              <div className="flex flex-col gap-2 border-b border-foreground py-6">
                <label
                  htmlFor="message"
                  className="font-mono text-xs uppercase tracking-widest text-primary"
                >
                  03 / Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="What are we building?"
                  className="w-full resize-none bg-transparent text-xl leading-relaxed text-foreground outline-none transition-colors placeholder:text-faint focus:placeholder:text-muted-foreground sm:text-2xl"
                />
              </div>

              <button
                type="submit"
                className="group mt-8 flex items-center justify-between gap-3 bg-foreground px-6 py-5 font-display text-lg font-extrabold uppercase tracking-tight text-background transition-colors hover:bg-primary sm:px-8 sm:py-6 sm:text-xl"
              >
                {sent ? (
                  <>
                    Opening your mail app
                    <Check className="size-6" />
                  </>
                ) : (
                  <>
                    Send message
                    <Send className="size-6 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </Reveal>

          {/* Direct channels */}
          <Reveal delay={100} className="md:col-span-4 md:col-start-9">
            <p className="mb-2 border-b border-border pb-2 font-mono text-xs uppercase tracking-widest text-faint">
              Direct channels
            </p>
            <div className="flex flex-col">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 border-b border-border py-4 transition-colors last:border-0"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center border border-foreground font-mono text-xs font-bold text-foreground transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    {social.tag}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] uppercase tracking-widest text-faint">
                      {social.label}
                    </span>
                    <span className="block truncate text-sm font-medium text-foreground">
                      {social.value}
                    </span>
                  </span>
                  <ArrowUpRight className="ml-auto size-4 shrink-0 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </a>
              ))}
            </div>

            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              Currently open to full-time roles, freelance projects, and open-source
              collaboration. Based in Addis Ababa — working remote, worldwide.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

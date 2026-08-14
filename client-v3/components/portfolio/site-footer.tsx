'use client'

import { ArrowUp } from 'lucide-react'
import { LINKS, SOCIALS } from '@/lib/portfolio-data'
import { scrollToId } from './reveal'

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground bg-panel">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-b border-border py-8">
          <div>
            <p className="font-display text-2xl font-extrabold uppercase tracking-tight text-foreground sm:text-3xl">
              Teklu Abayneh
            </p>
            <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Full-Stack Software Engineer
            </p>
          </div>

          <button
            onClick={() => scrollToId('top')}
            className="group flex items-center gap-2 border border-foreground px-4 py-3 font-mono text-xs uppercase tracking-wider text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Back to top
            <ArrowUp className="size-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Socials row */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-border py-5">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
            >
              {social.label}
            </a>
          ))}
          <a
            href={`mailto:${LINKS.email}`}
            className="ml-auto font-mono text-xs text-faint transition-colors hover:text-primary"
          >
            {LINKS.email}
          </a>
        </div>

        {/* Bottom row */}
        <div className="flex flex-wrap items-center justify-between gap-2 py-6 font-mono text-[11px] uppercase tracking-widest text-faint">
          <span>© {new Date().getFullYear()} Teklu Abayneh — All rights reserved</span>
          <span>Addis Ababa, Ethiopia / Remote worldwide</span>
        </div>
      </div>
    </footer>
  )
}

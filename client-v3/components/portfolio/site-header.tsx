'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_ITEMS } from '@/lib/portfolio-data'
import { useDeck } from './deck'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const { index, goTo } = useDeck()
  const [menuOpen, setMenuOpen] = useState(false)

  // NAV_ITEMS start at deck index 1 (index 0 is the hero/top page).
  const activeNav = index - 1

  const go = (id: string) => {
    setMenuOpen(false)
    goTo(id as never)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-foreground/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between gap-4 px-5 sm:px-8">
        <button
          onClick={() => go('top')}
          className="flex items-center gap-2 font-display text-sm font-extrabold uppercase tracking-tight text-foreground"
        >
          <span className="inline-block size-2 rounded-full bg-primary" />
          Teklu Abayneh
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item, i) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={cn(
                'group flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors',
                activeNav === i
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              <span className={cn(activeNav === i ? 'text-primary' : 'text-faint')}>
                {String(i + 1).padStart(2, '0')}
              </span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => window.dispatchEvent(new Event('open-command-palette'))}
            className="hidden items-center gap-2 border border-foreground px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:bg-foreground hover:text-background md:flex"
            aria-label="Open command palette"
          >
            <span className="inline-block size-1.5 rounded-full bg-primary" /> ⌘K
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex size-9 items-center justify-center border border-foreground text-foreground md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-foreground bg-background md:hidden">
          <nav className="mx-auto flex max-w-[1400px] flex-col px-5 sm:px-8">
            {NAV_ITEMS.map((item, i) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={cn(
                  'flex items-center gap-3 border-b border-border py-3.5 text-left font-mono text-sm uppercase tracking-wider last:border-0',
                  activeNav === i ? 'text-foreground' : 'text-muted-foreground',
                )}
              >
                <span className="text-primary">{String(i + 1).padStart(2, '0')}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { DECK_PAGES, useDeck, type DeckPage } from './deck'
import { NAV_ITEMS } from '@/lib/portfolio-data'

const PAGE_LABEL: Record<DeckPage, string> = {
  top: 'Intro',
  about: 'About',
  skills: 'Skills',
  experience: 'Experience',
  projects: 'Projects',
  contact: 'Contact',
}

/** Bridges the `deck-go` custom event (fired by scrollToId) to the deck. */
export function DeckBridge() {
  const { goTo } = useDeck()
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<DeckPage>).detail
      goTo(detail)
    }
    window.addEventListener('deck-go', handler as EventListener)
    return () => window.removeEventListener('deck-go', handler as EventListener)
  }, [goTo])
  return null
}

/** Right-side vertical page dots. */
export function DeckDots() {
  const { index, goTo } = useDeck()
  return (
    <div className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 md:flex">
      {DECK_PAGES.map((page, i) => {
        const active = i === index
        return (
          <button
            key={page}
            onClick={() => goTo(i)}
            className="group flex items-center gap-2.5"
            aria-label={`Go to ${PAGE_LABEL[page]}`}
            aria-current={active}
          >
            <span
              className={`font-mono text-[10px] uppercase tracking-widest transition-all duration-300 ${
                active
                  ? 'text-primary opacity-100'
                  : 'text-faint opacity-0 group-hover:opacity-100'
              }`}
            >
              {PAGE_LABEL[page]}
            </span>
            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
              <motion.span
                className="rounded-full bg-primary"
                animate={{
                  width: active ? 10 : 6,
                  height: active ? 10 : 6,
                  opacity: active ? 1 : 0.4,
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              />
            </span>
          </button>
        )
      })}
    </div>
  )
}

/** Bottom scroll hint that advances the deck. */
export function DeckScrollHint() {
  const { index, count, next } = useDeck()
  const isLast = index === count - 1
  return (
    <AnimatePresence>
      {!isLast && (
        <motion.button
          onClick={next}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-faint transition-colors hover:text-primary"
          aria-label="Next page"
        >
          Scroll
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="size-4" />
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

/** Thin top progress bar reflecting deck position. */
export function DeckProgress() {
  const { index, count } = useDeck()
  const progress = count > 1 ? index / (count - 1) : 0
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-primary"
      animate={{ scaleX: progress }}
      transition={{ type: 'spring', stiffness: 200, damping: 30 }}
    />
  )
}

/** Keeps the site header's active nav item in sync (re-exports labels). */
export const DECK_NAV = NAV_ITEMS

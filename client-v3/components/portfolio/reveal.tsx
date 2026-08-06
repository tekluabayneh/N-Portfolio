'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import type { DeckPage } from './deck'

const EASE = [0.16, 1, 0.3, 1] as const

/**
 * Mount-based reveal. Because pages now mount fresh when navigated to (rather
 * than scrolling into view), each Reveal animates once when its page appears.
 * The API (className, delay, as) is unchanged so existing sections keep working.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'li' | 'article'
}) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: EASE, delay: delay / 1000 }}
    >
      {children}
    </MotionTag>
  )
}

/** Navigate the deck to a page by id (used by header, hero, command palette). */
export function scrollToId(id: string) {
  window.dispatchEvent(
    new CustomEvent<DeckPage>('deck-go', { detail: id as DeckPage }),
  )
}

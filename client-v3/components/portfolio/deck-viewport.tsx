'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, type ReactNode } from 'react'
import { DECK_PAGES, useDeck } from './deck'

const EASE = [0.16, 1, 0.3, 1] as const

const pageVariants = {
  enter: (dir: number) => ({
    y: dir >= 0 ? '55%' : '-55%',
    opacity: 0,
    scale: 0.96,
    filter: 'blur(6px)',
  }),
  center: {
    y: '0%',
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
  },
  exit: (dir: number) => ({
    y: dir >= 0 ? '-45%' : '45%',
    opacity: 0,
    scale: 0.97,
    filter: 'blur(6px)',
  }),
}

export function DeckViewport({ pages }: { pages: ReactNode[] }) {
  const { index, direction, registerScroller } = useDeck()
  const scrollerRef = useRef<HTMLDivElement | null>(null)

  // Register the currently-mounted page's scroller and reset its scroll to top
  // whenever the active page changes so every page opens from its start.
  useEffect(() => {
    const el = scrollerRef.current
    registerScroller(el)
    if (el) el.scrollTop = 0
    return () => registerScroller(null)
  }, [index, registerScroller])

  return (
    <div className="fixed inset-0 overflow-hidden">
      <AnimatePresence mode="popLayout" custom={direction} initial={false}>
        <motion.div
          key={DECK_PAGES[index]}
          custom={direction}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: 'spring', stiffness: 260, damping: 30, mass: 0.9 },
            opacity: { duration: 0.5, ease: EASE },
            scale: { duration: 0.6, ease: EASE },
            filter: { duration: 0.45, ease: EASE },
          }}
          className="absolute inset-0"
        >
          <div
            ref={scrollerRef}
            className="deck-scroll h-full w-full overflow-y-auto overflow-x-hidden"
          >
            {pages[index]}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

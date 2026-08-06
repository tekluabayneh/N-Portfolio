'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'

/**
 * Paged "deck" engine.
 *
 * Instead of one long scrolling document, the site is a stack of full-viewport
 * pages. A scroll gesture (or arrow keys / swipe) at a page boundary advances to
 * the next/previous page with a snappy-but-eased Framer Motion transition.
 *
 * A page can itself be taller than the viewport — in that case its inner content
 * scrolls first, and only once it reaches the top/bottom edge does a further
 * scroll trigger a page change. This keeps long sections readable.
 */

export const DECK_PAGES = [
  'top',
  'about',
  'skills',
  'experience',
  'projects',
  'contact',
] as const

export type DeckPage = (typeof DECK_PAGES)[number]

type DeckContextValue = {
  index: number
  direction: number
  count: number
  goTo: (target: number | DeckPage) => void
  next: () => void
  prev: () => void
  registerScroller: (el: HTMLElement | null) => void
}

const DeckContext = createContext<DeckContextValue | null>(null)

export function useDeck() {
  const ctx = useContext(DeckContext)
  if (!ctx) throw new Error('useDeck must be used within <DeckProvider>')
  return ctx
}

const GESTURE_LOCK_MS = 900
const EDGE_TOLERANCE = 2

export function DeckProvider({ children }: { children: ReactNode }) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const indexRef = useRef(0)
  const lockedRef = useRef(false)
  const scrollerRef = useRef<HTMLElement | null>(null)
  const touchStartY = useRef<number | null>(null)
  const count = DECK_PAGES.length

  const registerScroller = useCallback((el: HTMLElement | null) => {
    scrollerRef.current = el
  }, [])

  const lock = useCallback(() => {
    lockedRef.current = true
    window.setTimeout(() => {
      lockedRef.current = false
    }, GESTURE_LOCK_MS)
  }, [])

  const goTo = useCallback(
    (target: number | DeckPage) => {
      const nextIndex =
        typeof target === 'number' ? target : DECK_PAGES.indexOf(target)
      if (nextIndex < 0 || nextIndex >= count) return
      if (nextIndex === indexRef.current) return
      setDirection(nextIndex > indexRef.current ? 1 : -1)
      indexRef.current = nextIndex
      setIndex(nextIndex)
      lock()
    },
    [count, lock],
  )

  const next = useCallback(() => goTo(indexRef.current + 1), [goTo])
  const prev = useCallback(() => goTo(indexRef.current - 1), [goTo])

  // Does the current page have inner scroll room in the given direction?
  const canInnerScroll = useCallback((dir: number) => {
    const el = scrollerRef.current
    if (!el) return false
    const { scrollTop, scrollHeight, clientHeight } = el
    const maxScroll = scrollHeight - clientHeight
    if (maxScroll <= EDGE_TOLERANCE) return false
    if (dir > 0) return scrollTop < maxScroll - EDGE_TOLERANCE
    return scrollTop > EDGE_TOLERANCE
  }, [])

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      const dir = e.deltaY > 0 ? 1 : -1
      if (Math.abs(e.deltaY) < 4) return
      if (canInnerScroll(dir)) return // let the inner content scroll
      if (lockedRef.current) return
      if (dir > 0) next()
      else prev()
    }

    const onKey = (e: KeyboardEvent) => {
      if (lockedRef.current) return
      if (['ArrowDown', 'PageDown'].includes(e.key)) {
        if (canInnerScroll(1)) return
        e.preventDefault()
        next()
      } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
        if (canInnerScroll(-1)) return
        e.preventDefault()
        prev()
      } else if (e.key === 'Home') {
        e.preventDefault()
        goTo(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        goTo(count - 1)
      }
    }

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0]?.clientY ?? null
    }
    const onTouchMove = (e: TouchEvent) => {
      if (touchStartY.current == null || lockedRef.current) return
      const dy = touchStartY.current - (e.touches[0]?.clientY ?? 0)
      if (Math.abs(dy) < 60) return
      const dir = dy > 0 ? 1 : -1
      if (canInnerScroll(dir)) return
      touchStartY.current = null
      if (dir > 0) next()
      else prev()
    }

    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('keydown', onKey)
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
    }
  }, [next, prev, goTo, canInnerScroll, count])

  const value = useMemo<DeckContextValue>(
    () => ({ index, direction, count, goTo, next, prev, registerScroller }),
    [index, direction, count, goTo, next, prev, registerScroller],
  )

  return <DeckContext.Provider value={value}>{children}</DeckContext.Provider>
}

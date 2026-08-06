import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * Wraps a section into a full-viewport deck page. Content is centered
 * vertically when it fits; longer content scrolls within the deck scroller.
 * `bleed` lets full-width panel sections (skills, projects) run edge-to-edge.
 * `align="end"` anchors the hero toward the bottom for an editorial feel.
 */
export function PageShell({
  children,
  bleed = false,
  align = 'center',
}: {
  children: ReactNode
  bleed?: boolean
  align?: 'center' | 'end'
}) {
  return (
    <div
      className={cn(
        'flex min-h-full w-full flex-col pt-14',
        align === 'center' ? 'justify-center' : 'justify-end',
      )}
    >
      <div className={cn('w-full', bleed ? '' : 'py-10 md:py-14')}>{children}</div>
    </div>
  )
}

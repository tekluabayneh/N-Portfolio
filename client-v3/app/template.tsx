'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

/**
 * Route-level transition. Next.js remounts template.tsx on every navigation,
 * so this animates each page (home <-> project detail) in with an eased,
 * slightly-scaled fade for an elegant "page change" feel.
 */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

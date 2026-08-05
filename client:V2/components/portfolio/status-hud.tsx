'use client'

import { useEffect, useState } from 'react'

export function StatusHud() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      const t = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Africa/Addis_Ababa',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(new Date())
      setTime(t)
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden items-center gap-3 rounded-full border border-border bg-background/70 px-4 py-2.5 font-mono text-[11px] text-muted-foreground backdrop-blur-xl md:flex">
      <span className="relative size-2">
        <span className="hud-ping absolute inset-0 rounded-full bg-primary opacity-60" />
        <span className="absolute inset-0 rounded-full bg-primary" />
      </span>
      <span>ADDIS ABABA</span>
      <span className="tabular-nums text-faint">{time || '--:--:--'}</span>
      <span className="text-faint">·</span>
      <span className="text-primary-bright">AVAILABLE</span>
    </div>
  )
}

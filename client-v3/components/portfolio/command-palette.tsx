'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ArrowRight, Search, User, Layers, Briefcase, FolderGit2, Mail } from 'lucide-react'
import { LINKS } from '@/lib/portfolio-data'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './brand-icons'
import { scrollToId } from './reveal'
import { cn } from '@/lib/utils'

type Command = {
  label: string
  hint: string
  icon: React.ComponentType<{ className?: string }>
  run: () => void
}

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const commands = useMemo<Command[]>(
    () => [
      { label: 'Go to About', hint: 'Section', icon: User, run: () => scrollToId('about') },
      { label: 'Go to Skills', hint: 'Section', icon: Layers, run: () => scrollToId('skills') },
      { label: 'Go to Experience', hint: 'Section', icon: Briefcase, run: () => scrollToId('experience') },
      { label: 'Go to Projects', hint: 'Section', icon: FolderGit2, run: () => scrollToId('projects') },
      { label: 'Go to Contact', hint: 'Section', icon: Mail, run: () => scrollToId('contact') },
      { label: 'Open GitHub', hint: 'External', icon: GithubIcon, run: () => window.open(LINKS.github, '_blank') },
      { label: 'Open LinkedIn', hint: 'External', icon: LinkedinIcon, run: () => window.open(LINKS.linkedin, '_blank') },
      { label: 'Open Twitter', hint: 'External', icon: TwitterIcon, run: () => window.open(LINKS.twitter, '_blank') },
      { label: 'Send an Email', hint: 'External', icon: Mail, run: () => window.open(`mailto:${LINKS.email}`) },
    ],
    [],
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return commands
    return commands.filter((c) => c.label.toLowerCase().includes(q))
  }, [commands, query])

  const close = useCallback(() => {
    setOpen(false)
    setQuery('')
    setActive(0)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
      }
      if (e.key === 'Escape') close()
    }
    const onOpen = () => setOpen(true)
    document.addEventListener('keydown', onKey)
    window.addEventListener('open-command-palette', onOpen)
    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('open-command-palette', onOpen)
    }
  }, [close])

  useEffect(() => {
    if (open) {
      setActive(0)
      requestAnimationFrame(() => inputRef.current?.focus())
    }
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const runCommand = (cmd: Command) => {
    cmd.run()
    close()
  }

  const onListKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((i) => Math.min(i + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (filtered[active]) runCommand(filtered[active])
    }
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/70 px-6 pt-[15vh] backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) close()
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-panel shadow-2xl">
        <div className="flex items-center gap-3 border-b border-border px-4 py-3.5">
          <Search className="size-4 text-faint" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setActive(0)
            }}
            onKeyDown={onListKeyDown}
            placeholder="Type a command or search..."
            autoComplete="off"
            className="flex-1 bg-transparent font-mono text-sm text-foreground outline-none placeholder:text-faint"
          />
          <kbd className="rounded-md border border-border px-1.5 py-0.5 font-mono text-[10px] text-faint">
            esc
          </kbd>
        </div>
        <div className="max-h-72 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <p className="py-8 text-center text-sm text-faint">No matching commands</p>
          ) : (
            filtered.map((cmd, i) => {
              const Icon = cmd.icon
              return (
                <button
                  key={cmd.label}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => runCommand(cmd)}
                  className={cn(
                    'flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors',
                    active === i ? 'bg-primary/10 text-foreground' : 'text-muted-foreground',
                  )}
                >
                  <Icon className={cn('size-4', active === i ? 'text-primary' : 'text-faint')} />
                  <span className="flex-1">{cmd.label}</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-faint">
                    {cmd.hint}
                  </span>
                  {active === i && <ArrowRight className="size-3.5 text-primary" />}
                </button>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}

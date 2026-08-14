'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Code2, ExternalLink, Minus, Plus } from 'lucide-react'
import type { Project } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

const statusDot: Record<Project['status'], string> = {
  Production: 'bg-primary',
  'In Beta': 'bg-accent',
  'Not Active': 'bg-faint',
}

export function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <div className="group border-b border-border">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-4 py-6 text-left sm:gap-8"
      >
        <span className="font-mono text-xs text-faint sm:text-sm">
          {String(index + 1).padStart(2, '0')}
        </span>

        <h3
          className={cn(
            'flex-1 font-display text-2xl font-bold uppercase tracking-tight transition-colors sm:text-4xl md:text-5xl',
            open ? 'text-foreground' : 'text-foreground/55 group-hover:text-foreground',
          )}
        >
          {project.name}
        </h3>

        <span className="hidden items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground sm:flex">
          <span className={cn('inline-block size-2 rounded-full', statusDot[project.status])} />
          {project.status}
        </span>

        <span
          className={cn(
            'flex size-8 shrink-0 items-center justify-center border transition-colors',
            open ? 'border-primary bg-primary text-primary-foreground' : 'border-foreground text-foreground',
          )}
        >
          {open ? <Minus className="size-4" /> : <Plus className="size-4" />}
        </span>
      </button>

      <div
        className={cn(
          'grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">
          <div className="grid gap-x-8 gap-y-6 pb-8 md:grid-cols-12">
            <p className="text-base leading-relaxed text-muted-foreground md:col-span-6 md:text-lg">
              {project.desc}
            </p>

            <div className="md:col-span-3">
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-faint">
                Built with
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-sm text-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 md:col-span-2 md:col-start-11">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 border border-foreground px-3 py-2.5 font-mono text-xs uppercase tracking-wider text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  <span className="flex items-center gap-1.5">
                    <Code2 className="size-3.5" /> Code
                  </span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 bg-primary px-3 py-2.5 font-mono text-xs uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary-bright"
                >
                  <span className="flex items-center gap-1.5">
                    <ExternalLink className="size-3.5" /> Live
                  </span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

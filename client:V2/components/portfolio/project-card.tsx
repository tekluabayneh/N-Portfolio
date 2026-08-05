'use client'

import { useRef } from 'react'
import { ArrowUpRight, Code2, ExternalLink } from 'lucide-react'
import type { Project } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

const statusStyles: Record<Project['status'], string> = {
  Production: 'border-primary/50 text-primary',
  'In Beta': 'border-primary-bright/50 text-primary-bright',
  'Not Active': 'border-border text-faint',
}

export function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null)

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(800px) rotateY(${px * 6}deg) rotateX(${-py * 6}deg) translateY(-6px)`
  }

  const onMouseLeave = () => {
    const el = ref.current
    if (el) el.style.transform = 'perspective(800px) rotateY(0) rotateX(0) translateY(0)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-panel p-6 transition-[transform,border-color] duration-200 hover:border-primary/40 [transform-style:preserve-3d]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: 'radial-gradient(circle at 30% 0%, var(--glow), transparent 70%)' }}
      />
      <div className="relative z-10 mb-3 flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold leading-snug">{project.name}</h3>
        <span
          className={cn(
            'shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-medium',
            statusStyles[project.status],
          )}
        >
          {project.status}
        </span>
      </div>

      <p className="relative z-10 text-sm leading-relaxed text-muted-foreground">
        {project.desc}
      </p>

      <div className="relative z-10 my-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md bg-foreground/[0.05] px-2 py-1 font-mono text-[11px] text-faint"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="relative z-10 mt-auto flex gap-4 pt-2 text-sm font-semibold">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-primary-bright transition-colors hover:text-primary"
          >
            <Code2 className="size-4" /> Code
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-primary-bright transition-colors hover:text-primary"
          >
            <ExternalLink className="size-4" /> Live
            <ArrowUpRight className="size-3" />
          </a>
        )}
      </div>
    </div>
  )
}

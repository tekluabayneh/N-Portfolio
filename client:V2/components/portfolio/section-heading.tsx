import { Reveal } from './reveal'

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12">
      <Reveal>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.4rem)] font-bold text-balance">
          {title}
        </h2>
      </Reveal>
    </div>
  )
}

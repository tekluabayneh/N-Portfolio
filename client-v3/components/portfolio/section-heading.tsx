import { Reveal } from './reveal'

export function SectionHeading({
  index,
  title,
  kicker,
}: {
  index: string
  title: string
  kicker?: string
}) {
  return (
    <Reveal>
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-foreground pb-4">
        <span className="font-mono text-sm text-primary">{index}</span>
        <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {kicker ? (
          <span className="ml-auto hidden font-mono text-xs uppercase tracking-widest text-muted-foreground sm:block">
            {kicker}
          </span>
        ) : null}
      </div>
    </Reveal>
  )
}

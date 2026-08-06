import { PROJECTS } from '@/lib/portfolio-data'
import { ProjectRow } from './project-card'
import { SectionHeading } from './section-heading'

export function ProjectsSection() {
  return (
    <section id="projects" className="flex min-h-full flex-col justify-center bg-panel">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-10 sm:px-8">
        <SectionHeading index="( 04 )" title="Selected Work" kicker="Index / Click to expand" />
        <div className="mt-4 border-t border-border">
          {PROJECTS.map((project, i) => (
            <ProjectRow key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

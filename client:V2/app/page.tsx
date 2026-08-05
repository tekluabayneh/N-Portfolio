import { AboutSection } from '@/components/portfolio/about-section'
import { CommandPalette } from '@/components/portfolio/command-palette'
import { ContactSection } from '@/components/portfolio/contact-section'
import { ExperienceSection } from '@/components/portfolio/experience-section'
import { Hero } from '@/components/portfolio/hero'
import { ProjectsSection } from '@/components/portfolio/projects-section'
import { ScrollProgress } from '@/components/portfolio/scroll-progress'
import { SiteFooter } from '@/components/portfolio/site-footer'
import { SiteHeader } from '@/components/portfolio/site-header'
import { SkillsSection } from '@/components/portfolio/skills-section'
import { StatusHud } from '@/components/portfolio/status-hud'

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <StatusHud />
      <CommandPalette />

      <main>
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </>
  )
}

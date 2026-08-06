import { AboutSection } from '@/components/portfolio/about-section'
import { CommandPalette } from '@/components/portfolio/command-palette'
import { ContactSection } from '@/components/portfolio/contact-section'
import { DeckProvider } from '@/components/portfolio/deck'
import {
  DeckBridge,
  DeckDots,
  DeckProgress,
  DeckScrollHint,
} from '@/components/portfolio/deck-controls'
import { DeckViewport } from '@/components/portfolio/deck-viewport'
import { ExperienceSection } from '@/components/portfolio/experience-section'
import { Hero } from '@/components/portfolio/hero'
import { PageShell } from '@/components/portfolio/page-shell'
import { ProjectsSection } from '@/components/portfolio/projects-section'
import { SiteFooter } from '@/components/portfolio/site-footer'
import { SiteHeader } from '@/components/portfolio/site-header'
import { SkillsSection } from '@/components/portfolio/skills-section'
import { StatusHud } from '@/components/portfolio/status-hud'

export default function Page() {
  const pages = [
    <PageShell key="top" align="end">
      <Hero />
    </PageShell>,
    <PageShell key="about">
      <AboutSection />
    </PageShell>,
    <PageShell key="skills" bleed>
      <SkillsSection />
    </PageShell>,
    <PageShell key="experience">
      <ExperienceSection />
    </PageShell>,
    <PageShell key="projects" bleed>
      <ProjectsSection />
    </PageShell>,
    <PageShell key="contact">
      <ContactSection />
      <SiteFooter />
    </PageShell>,
  ]

  return (
    <DeckProvider>
      <DeckProgress />
      <SiteHeader />
      <StatusHud />
      <CommandPalette />
      <DeckBridge />
      <DeckDots />
      <DeckScrollHint />

      <main>
        <DeckViewport pages={pages} />
      </main>
    </DeckProvider>
  )
}

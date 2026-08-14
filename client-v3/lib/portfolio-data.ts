export const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const

export const LINKS = {
  github: 'https://github.com/tekluabayneh',
  linkedin: 'https://www.linkedin.com/in/teklu-abayneh/',
  twitter: 'https://x.com/AbaynehTek13155',
  telegram: 'https://t.me/Dxuecd',
  email: 'tekluabayneh@gmail.com',
}

export const STATS = [
  { value: '2+', label: 'Years building' },
  { value: '15+', label: 'Projects shipped' },
  { value: '4', label: 'Languages' },
]

export type SkillGroup = { category: string; items: string[] }

export const SKILLS: SkillGroup[] = [
  { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Go'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'HTML5', 'CSS', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'FastAPI', 'Express', 'REST'] },
  { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL'] },
  { category: 'DevOps', items: ['Docker', 'AWS', 'CI/CD', "Kubernetes"] },
  { category: 'Tools', items: ['Git', 'Linux', 'Vim/Neovim', 'VS Code'] },
]

export const MARQUEE_SKILLS = [
  'TypeScript',
  'Go',
  'React',
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'Docker',
  'AWS',
  'Python',
  'Tailwind CSS',
  'MongoDB',
  'Linux',
]

export type Experience = {
  role: string
  company: string
  period: string
  highlights: string[]
}

export const EXPERIENCES: Experience[] = [
  {
    role: 'Full-Stack Developer',
    company: 'FreeCodeCamp (Volunteer Contribution)',
    period: '2024',
    highlights: [
      'Built a complete educational project for the FreeCodeCamp community to help new campers learn web development concepts.',
      "Collaborated with maintainers and contributed code following the project's standards and guidelines.",
      'Implemented frontend and backend features using TypeScript, regex, and REST APIs.',
    ],
  },
  {
    role: 'Backend / Full-Stack Developer',
    company: 'Discord Startup (Volunteer Developer)',
    period: '2023 - 2024',
    highlights: [
      'Developed features for a small Discord-based startup, including user commands, automation, and internal tools.',
      'Worked with Node.js, Express, Discord.js, and MongoDB to build and maintain project functionality.',
      'Contributed to improving code structure, fixing bugs, and helping the team ship new updates.',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Personal Projects',
    period: '2021 - Present',
    highlights: [
      'Built multiple full-stack applications using React, Node.js, Express, and SQL/MongoDB.',
      'Created APIs, authentication flows, CRUD features, and responsive UI components.',
      'Focused on clean code, problem-solving, and learning industry practices through real projects.',
    ],
  },
]

export type Project = {
  slug: string
  name: string
  year: string
  role: string
  status: 'Production' | 'In Beta' | 'Not Active' | "In Progress"
  cover: string
  desc: string
  overview: string
  features: string[]
  challenges: string[]
  tech: string[]
  github: string
  live: string
}

export const PROJECTS: Project[] = [
  {
    slug: 'collaborative-code-editor',
    name: 'Collaborative Code Editor',
    year: '2024',
    role: 'Full-Stack Developer',
    status: 'Production',
    cover: '/projects/collaborative-code-editor.png',
    desc: 'Real-time collaborative code editor for teams, with integrated code completion and in-app chat.',
    overview:
      'A browser-based editor that lets multiple developers write in the same file simultaneously, with cursor presence, syntax-aware completion, and a chat sidebar so teams can pair without leaving the tab.',
    features: [
      'Real-time multi-cursor editing with operational-transform style sync.',
      'Presence indicators showing who is viewing or typing where.',
      'Integrated code completion and language-aware highlighting.',
      'In-app chat so collaborators can discuss without context switching.',
    ],
    challenges: [
      'Keeping documents consistent across clients under concurrent edits.',
      'Minimizing latency on the sync channel for a smooth typing feel.',
      'Designing a schema that stores rooms, sessions, and revisions cleanly.',
    ],
    tech: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'Express', 'MySQL'],
    github: 'https://github.com/tekluabayneh/colaborative_code_editor',
    live: 'https://colab-frontend-v1-0-9.onrender.com',
  },
  {
    slug: 'edge-aware-cybersecurity-orchestrator',
    name: 'Edge-Aware Cybersecurity Orchestrator',
    year: '2024',
    role: 'Backend / Systems Developer',
    status: 'Production',
    cover: '/projects/edge-aware-cybersecurity-orchestrator.png',
    desc: 'Security platform that protects devices and smart-home systems via optimized security software.',
    overview:
      'An orchestration layer that pushes lightweight, edge-optimized security policies down to constrained devices and smart-home hubs, coordinating detection and response from a central control plane.',
    features: [
      'Central control plane that distributes policies to edge agents.',
      'Lightweight Go agents tuned for constrained hardware.',
      'Python-based analysis pipeline for threat signals.',
      'Containerized deployment for reproducible rollouts.',
    ],
    challenges: [
      'Running meaningful security logic within tight device resource budgets.',
      'Coordinating many heterogeneous agents from one orchestrator.',
      'Balancing detection accuracy against edge compute limits.',
    ],
    tech: ['Go', 'TypeScript', 'Python', 'React', 'Docker'],
    github: 'https://github.com/tekluabayneh/Edge-Aware-Cybersecurity-Orchestrator',
    live: 'https://edge-client-latest-15.onrender.com',
  },
  {
    slug: 'gok8s',
    name: 'goK8s',
    year: '2026',
    role: 'Systems Engineer',
    status: 'In Progress',
    cover: '/projects/gok8s.png',
    desc: 'A from-scratch reimplementation of core Kubernetes control plane components in Go, built by reading client-go source directly rather than relying on AI-generated logic.',
    overview:
      'A learning-driven rebuild of the Kubernetes control plane internals in Go — implementing the core client-go patterns (DeltaFIFO, Reflector, informer sync loops) from source rather than importing them, to understand how the real control plane tracks and reconciles cluster state.',
    features: [
      'DeltaFIFO queue for ordered, deduplicated resource change events.',
      'Reflector that lists and watches the API server to keep local state in sync.',
      'Informer sync loop driving cache updates from watch events.',
      'Controller layer (in progress) consuming the informer to reconcile desired state.',
    ],
    challenges: [
      'Reproducing client-go\'s list-watch and resync semantics correctly from source, without copying implementations.',
      'Handling out-of-order and duplicate events in the delta queue.',
      'Designing the controller reconcile loop to be idempotent and resilient to restarts.',
    ],
    tech: ['Go', 'Kubernetes', 'client-go patterns', "TypeScript", "Python"],
    github: 'https://github.com/tekluabayneh/Edge-Aware-Cybersecurity-Orchestrator',
    live: ''
  },
]

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug)
}

export type Social = {
  label: string
  value: string
  href: string
  tag: string
}

export const SOCIALS: Social[] = [
  { label: 'Email', value: 'tekluabayneh@example.com', href: 'mailto:tekluabayneh@example.com', tag: '@' },
  { label: 'Telegram', value: '@Dxuecd', href: 'https://t.me/Dxuecd', tag: 'TG' },
  { label: 'GitHub', value: 'github.com/tekluabayneh', href: 'https://github.com/tekluabayneh', tag: 'GH' },
  { label: 'LinkedIn', value: 'linkedin.com/in/teklu-abayneh', href: 'https://www.linkedin.com/in/teklu-abayneh', tag: 'in' },
  { label: 'Twitter', value: '@AbaynehTek13155', href: 'https://x.com/AbaynehTek13155', tag: 'X' },
]

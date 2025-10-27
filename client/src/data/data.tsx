export const projects = [
  {
    id: 1,
    name: "AI Code Assistant",
    description:
      "Intelligent code completion and refactoring tool powered by GPT-4",
    tech: ["TypeScript", "Python", "React", "FastAPI"],
    github: "https://github.com",
    live: "https://demo.com",
    status: "Production",
  },
  {
    id: 2,
    name: "Real-time Analytics Dashboard",
    description:
      "High-performance data visualization platform with WebSocket streaming",
    tech: ["Next.js", "D3.js", "Node.js", "Redis"],
    github: "https://github.com",
    live: "https://demo.com",
    status: "Active",
  },
  {
    id: 3,
    name: "Distributed Task Queue",
    description: "Scalable microservices orchestration system",
    tech: ["Go", "Docker", "Kubernetes", "RabbitMQ"],
    github: "https://github.com",
    status: "Open Source",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Building Scalable WebSocket Architectures",
    date: "2024-01-15",
    excerpt:
      "Deep dive into horizontal scaling patterns for real-time applications",
    tags: ["Architecture", "WebSockets", "Scaling"],
  },
  {
    id: 2,
    title: "Advanced TypeScript Patterns for React",
    date: "2024-01-10",
    excerpt: "Type-safe component patterns and generic utilities",
    tags: ["TypeScript", "React", "Best Practices"],
  },
  {
    id: 3,
    title: "Zero-Downtime Deployments with Kubernetes",
    date: "2024-01-05",
    excerpt: "Strategies for seamless production updates",
    tags: ["DevOps", "Kubernetes", "CI/CD"],
  },
];

export const skills = {
  languages: ["JavaScript/TypeScript", "Python", "Go", "Rust", "C++"],
  frontend: ["React", "Next.js", "Vue", "Svelte", "Tailwind CSS"],
  backend: ["Node.js", "FastAPI", "Express", "GraphQL", "REST"],
  databases: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
  devops: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"],
  tools: ["Git", "Linux", "Vim/Neovim", "VS Code"],
};
export const containerVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export const experiences = [
  {
    company: "Tech Startup Inc.",
    role: "Senior Full-Stack Engineer",
    period: "2022 - Present",
    highlights: [
      "Led development of real-time analytics platform serving 100K+ users",
      "Reduced API latency by 60% through optimization and caching strategies",
      "Mentored junior developers and established coding standards",
    ],
  },
  {
    company: "Digital Agency",
    role: "Full-Stack Developer",
    period: "2020 - 2022",
    highlights: [
      "Built 15+ client applications using React and Node.js",
      "Implemented CI/CD pipelines reducing deployment time by 80%",
      "Architected microservices infrastructure on AWS",
    ],
  },
  {
    company: "Freelance",
    role: "Independent Developer",
    period: "2019 - 2020",
    highlights: [
      "Delivered custom web solutions for 20+ clients",
      "Specialized in e-commerce and SaaS applications",
      "Maintained 95%+ client satisfaction rate",
    ],
  },
];

export const fontSizes = {
  small: "text-sm",
  medium: "text-base",
  large: "text-lg",
};
export const accentOptions = [
  { value: "cyan", color: "#00ffff", label: "Cyan" },
  { value: "purple", color: "#a855f7", label: "Purple" },
  { value: "magenta", color: "#ec4899", label: "Magenta" },
  { value: "green", color: "#10b981", label: "Green" },
];

export const fontSizeOptions = [
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
];

export const info = {
  user: "tekluabayneh",
  hostname: "archlinux",
  name: "Teklu Abayneh",
  title: "Full-Stack Software Engineer",
  uptime: "1+ years experience",
  shell: "React/TypeScript",
  skills: [
    "Full-Stack Software Engineer",
    "System Architecture",
    "Performance Optimization",
    "Open Source Contributor",
  ],
};

export const colorPalette = [
  "#1e1e2e",
  "#89b4fa",
  "#cba6f7",
  "#f38ba8",
  "#a6e3a1",
  "#f9e2af",
  "#fab387",
  "#94e2d5",
];

export const archAscii = `                  
                 -\`
                .o+\`
               \`ooo/
              \`+oooo:
             \`+oooooo:
             -+oooooo+:
           \`/:-:++oooo+:
          \`/++++/+++++++:
         \`/++++++++++++++:
        \`/+++ooooooooooooo/\`
       ./ooosssso++osssssso+\`
      .oossssso-\`\`\`\`/ossssss+\`
     -osssssso.      :ssssssso.
    :osssssss/        osssso+++.
   /ossssssss/        +ssssooo/-
 \`/ossssso+/:-        -:/+osssso+-
\`+sso+:-\`                 \`.-/+oso:
\`++:.                           \`-/+/
.\`                                 \`/`;

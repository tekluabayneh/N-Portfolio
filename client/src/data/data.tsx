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

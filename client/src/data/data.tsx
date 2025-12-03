import { Mail, Github, Linkedin, Twitter, Send} from "lucide-react";
 export const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "tekluabayneh@example.com",
      href: "mailto:tekluabayneh@example.com"
    },
    {
      icon: Send,
      label: "Telegram",
      value: "@tekluabayneh",
      href: "https://t.me/@Dxuecd"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/tekluabayneh",
      href: "https://github.com/tekluabayneh"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/tekluabayneh",
      href: "https://www.linkedin.com/in/teklu-abayneh"
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "@TekluAbayneh",
      href: "https://x.com/AbaynehTek13155"
    }
  ];
  

export const projects = [
  {
    id: 1,
    name: "Collaborative Code Editor",
    description:
      "Real-time collaborative code editor designed for teams and developers to build scalable applications efficiently. Includes integrated code completion and an in-app chat for seamless collaboration.",
    tech: ["TypeScript", "Next.js", "TailwindCss", "Node.js","Express", "MySql"],
    github: "https://github.com/tekluabayneh/colaborative_code_editor",
    live: "#",
    status: "not active",
  },
  {
    id: 2,
    name: "Edge-Aware Cybersecurity Orchestrator",
    description:
      "Comprehensive security platform that protects devices and smart home systems by deploying optimized security software. Designed for high performance and reliability across diverse environments.",
    tech: ["Go", "Typescript", "Python", "React", "Docker"],
    github: "https://github.com/tekluabayneh/Edge-Aware-Cybersecurity-Orchestrator",
    live: "#",
    status: "still in Beta",
  },
  {
    id: 3,
    name: "Micro Task Marketplace",
    description:
      "Decentralized micro-task platform that connects clients with freelancers through intelligent matchmaking. Features a real-time assistant chatbot to guide users and streamline task management across services.",
    tech: ["Node.js", "Javascript", "React", , "MongoDB", "Docker", "Google Auth", "Github Auth"],
    github: "https://github.com/tekluabayneh/Micro-Task_Marketplace",
    live: "https://micro-task-marketplace-1.onrender.com",
    status: "Production",
  }
];

export const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "Go"],
  frontend: ["React", "Next.js", "HTML5", "CSS", "Tailwind CSS"],
  backend: ["Node.js", "FastAPI", "Express", "REST"],
  databases: ["PostgreSQL", "MongoDB", "MySql"],
  devops: ["Docker", "AWS", "CI/CD"],
  tools: ["Git", "Linux", "Vim/Neovim", "VS Code"],
};
export const containerVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export const experiences = [
  {
    company: "FreeCodeCamp (Volunteer Contribution)",
    role: "Full-Stack Developer",
    period: "2024",
    highlights: [
      "Built a complete educational project for the FreeCodeCamp community to help new campers learn web development concepts.",
      "Collaborated with maintainers and contributed code following the project's standards and guidelines.",
      "Implemented frontend and backend features using TypeScript, regex, and REST APIs.",
    ],
  },
  {
    company: "Discord Startup (Volunteer Developer)",
    role: "Backend / Full-Stack Developer",
    period: "2023 - 2024",
    highlights: [
      "Developed features for a small Discord-based startup, including user commands, automation, and internal tools.",
      "Worked with Node.js, Express, Discord.js, and MongoDB to build and maintain project functionality.",
      "Contributed to improving code structure, fixing bugs, and helping the team ship new updates.",
    ],
  },
  {
    company: "Personal Projects",
    role: "Full-Stack Developer",
    period: "2021 - Present",
    highlights: [
      "Built multiple full-stack applications using React, Node.js, Express, and SQL/MongoDB.",
      "Created APIs, authentication flows, CRUD features, and responsive UI components.",
      "Focused on clean code, problem-solving, and learning industry practices through real projects.",
    ]
  }
]

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


export const containerVariantsForm = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

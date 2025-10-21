import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Download,
  ExternalLink,
  Code2,
  Database,
  Globe,
  Cpu,
  Zap,
  Palette,
} from "lucide-react";
import { projects, blogPosts, skills } from "../../data/data";

export default function OutputRenderer({ output, accent, fontSize }) {
  if (!output) return null;

  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  switch (output.type) {
    case "neofetch":
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="font-mono"
        >
          <div
            className="flex flex-col md:flex-row gap-6 p-4 rounded-lg border"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              borderColor: accent.primary,
              boxShadow: `0 0 20px ${accent.glow}`,
            }}
          >
            <div className="flex-1">
              <pre className={`${fontSize} leading-relaxed`}>
                <span style={{ color: accent.primary }}> ___ </span>
                {"\n"}
                <span style={{ color: accent.primary }}> / \\ </span>{" "}
                <span className="text-white font-bold">portfolio@arch-dev</span>
                {"\n"}
                <span style={{ color: accent.primary }}> / ^ \\ </span>{" "}
                <span className="text-gray-400">──────────────────</span>
                {"\n"}
                <span style={{ color: accent.primary }}> / │ \\ </span>{" "}
                <span className="text-cyan-400">OS:</span>{" "}
                <span className="text-white">Arch Linux (Hyprland)</span>
                {"\n"}
                <span style={{ color: accent.primary }}> / │ \\ </span>{" "}
                <span className="text-cyan-400">Uptime:</span>{" "}
                <span className="text-white">5+ years coding</span>
                {"\n"}
                <span style={{ color: accent.primary }}>
                  {" "}
                  /_____|_____\\{" "}
                </span>{" "}
                <span className="text-cyan-400">Shell:</span>{" "}
                <span className="text-white">zsh + oh-my-zsh</span>
                {"\n"}
                <span style={{ color: accent.primary }}> </span>{" "}
                <span className="text-cyan-400">Editor:</span>{" "}
                <span className="text-white">Neovim / VS Code</span>
                {"\n"}
                <span className="text-gray-500"> Terminal:</span>{" "}
                <span className="text-white">Alacritty</span>
              </pre>
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[
                    "#000000",
                    accent.primary,
                    "#a855f7",
                    "#ec4899",
                    "#10b981",
                    "#f59e0b",
                    "#ef4444",
                    "#3b82f6",
                  ].map((color, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-4 space-y-1 text-gray-300">
                <p>
                  <span style={{ color: accent.primary }}>►</span> Full-stack
                  developer
                </p>
                <p>
                  <span style={{ color: accent.primary }}>►</span> Open source
                  contributor
                </p>
                <p>
                  <span style={{ color: accent.primary }}>►</span> System
                  architect
                </p>
                <p>
                  <span style={{ color: accent.primary }}>►</span> Performance
                  enthusiast
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      );

    case "help":
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-2"
        >
          <p style={{ color: accent.primary }} className="font-bold mb-3">
            Available Commands:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {[
              { cmd: "about, whoami", desc: "Display information about me" },
              { cmd: "projects, ls", desc: "List all projects" },
              { cmd: "skills", desc: "Show technical skills" },
              { cmd: "experience", desc: "View work experience" },
              { cmd: "blog", desc: "Read blog posts" },
              { cmd: "resume, cv", desc: "Download resume" },
              { cmd: "contact", desc: "Get in touch" },
              { cmd: "neofetch", desc: "System information" },
              { cmd: "clear", desc: "Clear terminal" },
              { cmd: "help", desc: "Show this help message" },
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <span
                  style={{ color: accent.primary }}
                  className="font-bold min-w-32"
                >
                  {item.cmd}
                </span>
                <span className="text-gray-400">{item.desc}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 mt-4 text-sm">
            💡 Tip: Use arrow keys ↑↓ to navigate command history
          </p>
        </motion.div>
      );

    case "about":
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <div
            className="p-6 rounded-lg border backdrop-blur-xl"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              borderColor: accent.primary,
              boxShadow: `0 0 30px ${accent.glow}`,
            }}
          >
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: accent.primary }}
            >
              $ cat about.txt
            </h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>
                Hey! I'm a full-stack developer passionate about building
                elegant, performant applications that solve real problems.
              </p>
              <p>
                With 5+ years of experience, I specialize in modern web
                technologies, distributed systems, and developer tooling. I love
                working with React, TypeScript, Node.js, and exploring new
                technologies like Rust and Go.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open source,
                writing technical blog posts, or tinkering with my Arch Linux
                setup.
              </p>
              <div className="flex gap-4 mt-6 flex-wrap">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 hover:scale-105"
                  style={{
                    borderColor: accent.primary,
                    color: accent.primary,
                  }}
                >
                  <Github className="w-5 h-5" /> GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 hover:scale-105"
                  style={{
                    borderColor: accent.primary,
                    color: accent.primary,
                  }}
                >
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 hover:scale-105"
                  style={{
                    borderColor: accent.primary,
                    color: accent.primary,
                  }}
                >
                  <Twitter className="w-5 h-5" /> Twitter
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      );

    case "projects":
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <p style={{ color: accent.primary }} className="font-bold mb-4">
            $ ls projects/
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group p-5 rounded-lg border backdrop-blur-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  borderColor: accent.primary,
                  boxShadow: `0 0 20px ${accent.glow}`,
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3
                    className="text-lg font-bold"
                    style={{ color: accent.primary }}
                  >
                    {project.name}
                  </h3>
                  <span
                    className="text-xs px-2 py-1 rounded-full border"
                    style={{
                      borderColor: accent.primary,
                      color: accent.primary,
                    }}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded bg-white/5 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm flex items-center gap-1 hover:underline"
                      style={{ color: accent.primary }}
                    >
                      <Github className="w-4 h-4" /> Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm flex items-center gap-1 hover:underline"
                      style={{ color: accent.primary }}
                    >
                      <ExternalLink className="w-4 h-4" /> Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      );

    case "skills":
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <p style={{ color: accent.primary }} className="font-bold mb-4">
            $ cat skills.json
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="p-4 rounded-lg border backdrop-blur-xl"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  borderColor: accent.primary,
                }}
              >
                <h3
                  className="font-bold mb-3 capitalize flex items-center gap-2"
                  style={{ color: accent.primary }}
                >
                  {category === "languages" && <Code2 className="w-5 h-5" />}
                  {category === "frontend" && <Palette className="w-5 h-5" />}
                  {category === "backend" && <Cpu className="w-5 h-5" />}
                  {category === "databases" && <Database className="w-5 h-5" />}
                  {category === "devops" && <Globe className="w-5 h-5" />}
                  {category === "tools" && <Zap className="w-5 h-5" />}
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 rounded-full bg-white/5 text-gray-300 border"
                      style={{ borderColor: `${accent.primary}50` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      );

    case "experience":
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <p style={{ color: accent.primary }} className="font-bold mb-4">
            $ cat experience.log
          </p>
          <div className="space-y-4">
            {[
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
            ].map((exp, i) => (
              <div
                key={i}
                className="p-5 rounded-lg border backdrop-blur-xl"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  borderColor: accent.primary,
                  borderLeft: `4px solid ${accent.primary}`,
                }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h3
                      className="text-lg font-bold"
                      style={{ color: accent.primary }}
                    >
                      {exp.role}
                    </h3>
                    <p className="text-gray-400">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 mt-1 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {exp.highlights.map((highlight, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span style={{ color: accent.primary }}>▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      );

    case "blog":
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <p style={{ color: accent.primary }} className="font-bold mb-4">
            $ ls blog/
          </p>
          <div className="space-y-3">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-4 rounded-lg border backdrop-blur-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  borderColor: accent.primary,
                }}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold" style={{ color: accent.primary }}>
                    {post.title}
                  </h3>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <p className="text-sm text-gray-400 mb-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs px-2 py-1 rounded bg-white/5"
                      style={{ color: accent.primary }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      );

    case "resume":
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <div
            className="p-6 rounded-lg border backdrop-blur-xl text-center"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              borderColor: accent.primary,
              boxShadow: `0 0 30px ${accent.glow}`,
            }}
          >
            <Download
              className="w-16 h-16 mx-auto mb-4"
              style={{ color: accent.primary }}
            />
            <h3
              className="text-xl font-bold mb-2"
              style={{ color: accent.primary }}
            >
              Download Resume
            </h3>
            <p className="text-gray-400 mb-6">
              Get my full resume in PDF format
            </p>
            <button
              className="px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: accent.primary,
                color: "#000",
                boxShadow: `0 0 20px ${accent.glow}`,
              }}
            >
              Download CV (PDF)
            </button>
          </div>
        </motion.div>
      );

    case "contact":
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <p style={{ color: accent.primary }} className="font-bold mb-4">
            $ cat contact.txt
          </p>
          <div
            className="p-6 rounded-lg border backdrop-blur-xl"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              borderColor: accent.primary,
              boxShadow: `0 0 30px ${accent.glow}`,
            }}
          >
            <h3
              className="text-xl font-bold mb-4"
              style={{ color: accent.primary }}
            >
              Get In Touch
            </h3>
            <p className="text-gray-400 mb-6">
              I'm always open to interesting conversations and collaboration
              opportunities.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hello@example.com"
                className="flex items-center gap-3 p-3 rounded-lg border hover:scale-105 transition-all duration-300"
                style={{ borderColor: accent.primary }}
              >
                <Mail className="w-5 h-5" style={{ color: accent.primary }} />
                <span>hello@example.com</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border hover:scale-105 transition-all duration-300"
                style={{ borderColor: accent.primary }}
              >
                <Github className="w-5 h-5" style={{ color: accent.primary }} />
                <span>github.com/username</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border hover:scale-105 transition-all duration-300"
                style={{ borderColor: accent.primary }}
              >
                <Linkedin
                  className="w-5 h-5"
                  style={{ color: accent.primary }}
                />
                <span>linkedin.com/in/username</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border hover:scale-105 transition-all duration-300"
                style={{ borderColor: accent.primary }}
              >
                <Twitter
                  className="w-5 h-5"
                  style={{ color: accent.primary }}
                />
                <span>@username</span>
              </a>
            </div>
          </div>
        </motion.div>
      );

    case "error":
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-red-400"
        >
          {output.message}
        </motion.div>
      );

    default:
      return null;
  }
}

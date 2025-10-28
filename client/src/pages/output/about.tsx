import { containerVariants } from "../../data/data";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import type { accentColorsType } from "../../types/dataType";
const About = ({ accent }: accentColorsType[0]) => {
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
            Hey! I'm a full-stack developer passionate about building elegant,
            performant applications that solve real problems.
          </p>
          <p>
            With 5+ years of experience, I specialize in modern web
            technologies, distributed systems, and developer tooling. I love
            working with React, TypeScript, Node.js, and exploring new
            technologies like Rust and Go.
          </p>
          <p>
            When I'm not coding, you'll find me contributing to open source,
            writing technical blog posts, or tinkering with my Arch Linux setup.
          </p>
          <div className="flex gap-4 mt-6 flex-wrap">
            <a
              href="https://github.com/tekluabayneh"
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
              href="https://www.linkedin.com/in/teklu-abayneh/"
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
              href="https://x.com/AbaynehTek13155"
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
};
export default About;

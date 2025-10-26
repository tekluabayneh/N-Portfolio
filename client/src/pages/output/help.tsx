import { motion } from "framer-motion";
import { containerVariants } from "../../data/data";
const Help = ({
  accent,
}: {
  accent: {
    primary: string;
  };
}) => {
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
};
export default Help;

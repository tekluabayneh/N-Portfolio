import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { containerVariants } from "../../data/data";

const ContactPage = ({
  accent,
}: {
  accent: {
    primary: string;
    glow: string;
  };
}) => (
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
      <h3 className="text-xl font-bold mb-4" style={{ color: accent.primary }}>
        Get In Touch
      </h3>
      <p className="text-gray-400 mb-6">
        I'm always open to interesting conversations and collaboration
        opportunities.
      </p>
      <div className="space-y-3">
        <a
          href="mailto:tekluabayneh@example.com"
          className="flex items-center gap-3 p-3 rounded-lg border hover:scale-105 transition-all duration-300"
          style={{ borderColor: accent.primary }}
        >
          <Mail className="w-5 h-5" style={{ color: accent.primary }} />
          <span>tekluabayneh@example.com</span>
        </a>
        <a
          href="https://github.com/tekluabayneh"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-lg border hover:scale-105 transition-all duration-300"
          style={{ borderColor: accent.primary }}
        >
          <Github className="w-5 h-5" style={{ color: accent.primary }} />
          <span>github.com/tekluabayneh</span>
        </a>
        <a
          href="https://www.linkedin.com/in/teklu-abayneh"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-lg border hover:scale-105 transition-all duration-300"
          style={{ borderColor: accent.primary }}
        >
          <Linkedin className="w-5 h-5" style={{ color: accent.primary }} />
          <span>linkedin.com/in/tekluabayneh</span>
        </a>
        <a
          href="https://x.com/AbaynehTek13155"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-lg border hover:scale-105 transition-all duration-300"
          style={{ borderColor: accent.primary }}
        >
          <Twitter className="w-5 h-5" style={{ color: accent.primary }} />
          <span>@TekluAbayneh</span>
        </a>
      </div>
    </div>
  </motion.div>
);

export default ContactPage;

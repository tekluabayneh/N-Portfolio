import { containerVariants, skills } from "../../data/data";
import { motion } from "framer-motion";
import { Code2, Database, Globe, Cpu, Zap, Palette } from "lucide-react";
const Skills = ({ accent }) => {
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
};
export default Skills;

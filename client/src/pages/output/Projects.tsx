import { containerVariants, projects } from "../../data/data";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
const Projects = ({
  accent,
}: {
  accent: {
    primary: string;
    glow: string;
  };
}) => {
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
};
export default Projects;

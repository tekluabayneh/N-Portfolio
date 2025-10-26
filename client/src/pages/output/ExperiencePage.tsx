import { motion } from "framer-motion";
import { containerVariants, experiences } from "../../data/data";

const ExperiencePage = ({
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
      className="space-y-4"
    >
      <p style={{ color: accent.primary }} className="font-bold mb-4">
        $ cat experience.log
      </p>
      <div className="space-y-4">
        {experiences.map((exp, i) => (
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
              {exp.highlights.map((h, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span style={{ color: accent.primary }}>▸</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperiencePage;

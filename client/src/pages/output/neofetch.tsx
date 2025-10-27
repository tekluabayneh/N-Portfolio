import { motion } from "framer-motion";
import { archAscii, colorPalette, info } from "../../data/data";

export default function Terminal() {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="w-full max-w-6xl">
      {/* Neofetch Output */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col lg:flex-row gap-21 items-start p-5  justify-center"
      >
        {/* ASCII Art */}
        <div className="flex-shrink-0">
          <pre
            className="text-cyan-400 text-xs md:text-sm leading-tight"
            style={{
              textShadow: "0 0 10px rgba(6, 182, 212, 0.5)",
            }}
          >
            {archAscii}
          </pre>
        </div>

        {/* System Info */}
        <div className="flex-1 space-y-1 text-sm md:text-base w-full">
          <motion.div variants={itemVariants} className="flex gap-3">
            <span className="text-cyan-400 font-bold min-w-[120px]">
              {info.user}@{info.hostname}
            </span>
            <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent flex-1 self-center" />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-3 items-center"
          >
            <span className="text-cyan-400 min-w-[120px]">Name</span>
            <span className="text-slate-300">{info.name}</span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-3 items-center"
          >
            <span className="text-cyan-400 min-w-[120px]">Title</span>
            <span className="text-slate-300">{info.title}</span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-3 items-center"
          >
            <span className="text-cyan-400 min-w-[120px]">Uptime</span>
            <span className="text-slate-300">{info.uptime}</span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-3 items-center"
          >
            <span className="text-cyan-400 min-w-[120px]">Shell</span>
            <span className="text-slate-300">{info.shell}</span>
          </motion.div>

          {/* Color Palette */}
          <motion.div
            variants={itemVariants}
            className="flex gap-3 items-center pt-2"
          >
            <span className="text-cyan-400 min-w-[120px]">Colors</span>
            <div className="flex gap-2 flex-wrap">
              {colorPalette.map((color, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-8 h-8 rounded-md cursor-pointer transition-shadow"
                  style={{
                    backgroundColor: color,
                    boxShadow: `0 4px 12px ${color}40`,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Separator */}
          <motion.div variants={itemVariants} className="py-2">
            <div className="h-px bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-transparent" />
          </motion.div>

          {/* Skills */}
          <motion.div variants={itemVariants} className="space-y-2 pt-2">
            {info.skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-3 group"
              >
                <span className="text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  ▸
                </span>
                <span className="text-slate-300 group-hover:text-white transition-colors">
                  {skill}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom decoration */}
          <motion.div
            variants={itemVariants}
            className="pt-6 flex items-center gap-4 text-xs text-slate-500"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Online</span>
            </div>
            <div className="h-3 w-px bg-slate-700" />
            <span>Last updated: {new Date().toLocaleDateString()}</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

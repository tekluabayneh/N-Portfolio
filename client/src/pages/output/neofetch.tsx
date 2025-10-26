import { motion } from "framer-motion";

import { containerVariants } from "../../data/data";
import type { neoFetchtype } from "../../types/dataType";
const Neofetch = ({ accent, fontSize }: neoFetchtype) => {
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
            <span style={{ color: accent.primary }}> /_____|_____\\ </span>{" "}
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
              <span style={{ color: accent.primary }}>►</span> System architect
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
};

export default Neofetch;

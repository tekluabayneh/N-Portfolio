import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { containerVariants } from "../../data/data";

const ResumePage = ({ accent }) => (
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
      <h3 className="text-xl font-bold mb-2" style={{ color: accent.primary }}>
        Download Resume
      </h3>
      <p className="text-gray-400 mb-6">Get my full resume in PDF format</p>
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

export default ResumePage;

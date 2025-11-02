import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { containerVariants } from "../../data/data";
import ResumeButton from "../../components/terminal/ResumeDownloader";

const ResumePage = ({
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
      <ResumeButton accent={accent}/>
    </div>
  </motion.div>
);

export default ResumePage;

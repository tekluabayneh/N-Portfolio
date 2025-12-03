import { motion } from "framer-motion";
import { containerVariants } from "../../data/data";

const ErrorPage = ({
  output,
}: {
  output: {
    type: string;
    message?: string | undefined

  };
}) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="text-red-400"
  >
    {output.message}
  </motion.div>
);

export default ErrorPage;

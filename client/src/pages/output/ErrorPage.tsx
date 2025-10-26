import { motion } from "framer-motion";
import { containerVariants } from "../../data/data";
import type {  OutPutPropesType } from "../../types/dataType";

const ErrorPage = ({ output }: OutPutPropesType) => (
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

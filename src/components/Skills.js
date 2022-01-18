import { motion } from "framer-motion";

export const Skills = ({ accentColor }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.65 }}
      >
        <h1 style={{ color: accentColor }}>My Skills Diagram</h1>
      </motion.div>
    </>
  );
};

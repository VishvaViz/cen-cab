import { motion } from "framer-motion";

const PageTransition = ({ children, variants, transition }) => {
  return (
    <motion.div
      initial={variants.initial}
      animate={variants.animate}
      exit={variants.exit}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;

import { motion } from "framer-motion";
import React from "react";

import { mainStyles } from "../styles/mainStyles";
import { staggerContainer } from "../utils/motion";

const SectionAppWrapper = (Component: React.ComponentType, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer("a", 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${mainStyles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default SectionAppWrapper;

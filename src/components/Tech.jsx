import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 ">
      <motion.div className="text-left w-full" variants={textVariant()}>
        <h2 className={styles.heroHeadText}>Technologies </h2>
      </motion.div>
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technologies.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");

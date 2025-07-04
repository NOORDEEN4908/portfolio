import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
  <>
   <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>
            What I Use to Build and Deliver Web Solutions
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
         Skills & Technologies
          </h2>
        </motion.div>
      
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");

import React from "react";
import {Tilt} from "react-tilt"; 

import { motion } from "framer-motion";




import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import myImage from "../assets/profile.png"; // Replace with your actual path


const ServiceCard = ({ index, title, icon }) => (
  <Tilt    className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
  <p className={styles.sectionSubText}>Introduction</p>
  <h2 className={styles.sectionHeadText}>Overview.</h2>
</motion.div>

{/* 💡 START: Wrap paragraph and image */}
<div className='mt-4 flex flex-col-reverse lg:flex-row items-center gap-10'>
  {/* Left side: Intro paragraph */}
  <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className='text-secondary text-[17px] max-w-3xl leading-[30px] flex-1'
  >
  


    Hi, I’m NoorDeen — a full-stack web developer skilled in React, PHP, Java, Node.js, MySQL, MongoDB, and WordPress. With a 6-month professional internship and several hands-on projects, I build scalable, user-friendly web apps from frontend to backend. I'm a quick learner and collaborate closely with clients to deliver real-world solutions. Let’s work together to bring your ideas to life!
  </motion.p>

  {/* Right side: Tilted Image */}
  <div className='flex-1 flex justify-center items-center'>
    <Tilt className='w-[300px] h-[300px]'>
      <motion.div
        variants={fadeIn("left", "spring", 0.5, 0.75)}
        className='green-pink-gradient p-[1px] rounded-full shadow-card'
      >
        <div className='bg-tertiary rounded-full w-full h-full flex justify-center items-center'>
          <img
            src={myImage}
            alt='Me'
            className='rounded-full w-[280px] h-[280px] object-cover'
          />
        </div>
      </motion.div>
    </Tilt>
  </div>
</div>


      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

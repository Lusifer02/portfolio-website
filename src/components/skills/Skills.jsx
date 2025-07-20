import React from 'react';
import { FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaGithub, FaBootstrap } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTypescript, SiShadcnui, SiNetlify  } from 'react-icons/si';
import { RiTailwindCssFill } from "react-icons/ri";
import "./skills.scss";
import { motion } from 'framer-motion';


const variants = {
  initial:{
      x:-200,
      y: 100,
      opacity:0,
  },
  animate:{
      x:0,
      opacity:1,
      y:0,
      transition:{
          duration: 1,
          staggerChildren:0.1,
      }
  }
}

const Skills = () => {
  return (
    <motion.section id='Skills' className="skills-section" variants={variants} initial="initial" whileInView="animate">
      <motion.h2 variants={variants} className="skills-title">My Skills</motion.h2>
      <motion.div variants={variants} className="skills-container">
        <motion.div variants={variants} className="skill">
          <FaJs className="skill-icon" />
          <span>JavaScript</span>
        </motion.div>
        <motion.div variants={variants} className="skill">
          <FaReact className="skill-icon" />
          <span>React</span>
        </motion.div>
        <motion.div variants={variants} className="skill">
          <SiTypescript className="skill-icon" />
          <span>TypeScript</span>
        </motion.div>
        <motion.div variants={variants} className="skill">
          <FaNodeJs className="skill-icon" />
          <span>Node.js</span>
        </motion.div>
        <motion.div variants={variants} className="skill">
          <SiExpress className="skill-icon" />
          <span>Express.js</span>
        </motion.div>
        <motion.div variants={variants} className="skill">
          <SiMongodb className="skill-icon" />
          <span>MongoDB</span>
        </motion.div>
        <motion.div variants={variants} className="skill">
          <FaDatabase className="skill-icon" />
          <span>SQL</span>
        </motion.div>
        <motion.div variants={variants} className="skill">
          <FaCss3Alt className="skill-icon" />
          <span>CSS3</span>
        </motion.div>
        <motion.div variants={variants} className="skill">
          <RiTailwindCssFill className="skill-icon" />
          <span>TailwindCSS</span>
        </motion.div>
        <motion.div variants={variants} className="skill">
          <FaBootstrap className="skill-icon" />
          <span>Bootstrap</span>
        </motion.div>
        <motion.div variants={variants} className="skill">
          <SiShadcnui className="skill-icon" />
          <span>Shadcn</span>
        </motion.div>
        <motion.div variants={variants} className="skill">
          <FaGithub  className="skill-icon" />
          <span>Github</span>
        </motion.div>
        <motion.div variants={variants} className="skill">
          <FaGitAlt className="skill-icon" />
          <span>Git</span>
        </motion.div>
        <motion.div variants={variants} className="skill">
          < SiNetlify  className="skill-icon" />
          <span>Netlify</span>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;

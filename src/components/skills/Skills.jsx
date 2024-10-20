import React from 'react';
import { FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaPython } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTypescript, SiShadcnui, SiRecoil } from 'react-icons/si';
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
        <motion.div  className="skill">
          <FaCss3Alt className="skill-icon" />
          <span>CSS3</span>
        </motion.div>
        <motion.div variants={variants} className="skill">
          <FaJs className="skill-icon" />
          <span>JavaScript</span>
        </motion.div>
        <motion.div variants={variants} className="skill">
          <FaReact className="skill-icon" />
          <span>React</span>
        </motion.div>
        <motion.div variants={variants} className="skill">
          <SiRecoil className="skill-icon" />
          <span>Recoil</span>
        </motion.div>
        <motion.div variants={variants} className="skill">
          <SiShadcnui className="skill-icon" />
          <span>Shadcn</span>
        </motion.div>
        <motion.div variants={variants} className="skill">
          <SiTypescript className="skill-icon" />
          <span>TypeScript</span>
        </motion.div>
        <motion.div variants={variants} className="skill">
          <FaPython className="skill-icon" />
          <span>Python</span>
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
          <FaGitAlt className="skill-icon" />
          <span>Git</span>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;

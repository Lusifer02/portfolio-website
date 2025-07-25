import "./hero.scss"
import { motion } from "framer-motion" 
import AnchorLink from "react-anchor-link-smooth-scroll"

const textVariants ={
  initial:{
    x: -500,
    opacity: 0,
  },
  animate:{
    x: 0,
    opacity: 1,
    transition:{
      duration: 1,
      staggerChildren: 0.1,
    }
  },
  scrollButton:{
    opacity: 0,
    y: 10,
    transition:{
      duration:2,
      repeat: Infinity
    }
  }
}

const slideVariants ={
  initial:{
    x: 0,
  },
  animate:{
    x: "-220%",
    transition:{
      repeat:Infinity,
      repeatType:"mirror",
      duration: 20,
      staggerChildren: 0.1,
    }
  },
}


const Hero = () => {


  return (
    <div id="Homepage" className="hero">
      <div className="wrapper">
      <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
        <motion.h2 variants={textVariants}>LALIT MOHANTY</motion.h2>
        <motion.h1 variants={textVariants}>Fullstack Web developer</motion.h1>
        <button variants={textVariants}><AnchorLink offset={50} href="#Contact">Contact Me</AnchorLink></button>
        <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
      </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={slideVariants} initial="initial" animate="animate">
        Frontend Backend UI UX 
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  )
}

export default Hero

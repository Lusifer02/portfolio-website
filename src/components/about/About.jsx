import AnchorLink from "react-anchor-link-smooth-scroll"
import "./about.scss"
import { motion} from "framer-motion"


const variants = {
  initial:{
      x:-200,
      opacity:0,
  },
  animate:{
      x:0,
      opacity:1,
      transition:{
          duration: 1,
          staggerChildren:0.1,
      }
  }
}

const About = () => {

  return (
    <motion.div id="About" className="about" variants={variants} initial="initial" whileInView="animate">
        <motion.div className="wrapper" variants={variants}>
        <motion.div className="imgContainer" variants={variants}>
        <img src="/myImage.png" alt=""/>
        </motion.div>
          <motion.div className="textContainer" variants={variants}>
            <motion.div className="heading" variants={variants}>
              <h2>Get to know</h2>
              <h1>About Me</h1>
            </motion.div>
            <p>I’m a passionate Web Developer with hands-on experience in the MERN stack—MongoDB, Express.js, React, and Node.js. I love transforming ideas into interactive, real-world applications and constantly push myself to learn, build, and grow in the world of technology. Whether it’s crafting seamless user experiences or building powerful backend systems, I’m driven by curiosity, creativity, and code. My ultimate goal is to become a versatile Software Developer who creates solutions that make an impact. <br /> If you’re working on something exciting or just want to talk tech—let’s connect!</p>
            <motion.div className="buttons" variants={variants}>
              <motion.button variants={variants}><AnchorLink offset={50} href="#Contact">Let's talk</AnchorLink></motion.button>
              <a href="https://drive.google.com/file/d/1s-WRLOEwkcPaZCsVGn1BN7NseZfnDj5j/view?usp=drive_link">
              <motion.button variants={variants}>Download CV</motion.button>
              </a> 
            </motion.div>
          </motion.div>

        </motion.div>
    </motion.div>
  )
}

export default About

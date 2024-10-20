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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ullam ducimus libero, ipsum doloremque laborum consectetur adipisci sint consequatur expedita, quae animi aut maxime, eius beatae aliquam quibusdam quisquam nesciunt.</p>
            <motion.div className="buttons" variants={variants}>
              <motion.button variants={variants}><AnchorLink offset={50} href="#Contact">Let's talk</AnchorLink></motion.button>
              <a href="https://drive.google.com/file/d/1_GcyehE8PQpwQUu1M1Xk8ylKiJeqm_1P/view?usp=drive_link">
              <motion.button variants={variants}>Download CV</motion.button>
              </a> 
            </motion.div>
          </motion.div>

        </motion.div>
    </motion.div>
  )
}

export default About

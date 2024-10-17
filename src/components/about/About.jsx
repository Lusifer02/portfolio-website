import AnchorLink from "react-anchor-link-smooth-scroll"
import "./about.scss"
import { motion} from "framer-motion"


const variants = {
  initial:{
      x:-500,
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
          <img src="/people.webp" alt="" />
        </motion.div>
          <motion.div className="textContainer" variants={variants}>
            <motion.div className="heading" variants={variants}>
              <h2>Get to know</h2>
              <h1>About Me</h1>
            </motion.div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit incidunt veniam culpa cumque voluptates, commodi aliquam dolorum repellat sit excepturi accusantium dolores ratione quia perferendis. Ipsa numquam necessitatibus natus quibusdam. Expedita iusto culpa consectetur illo sunt dicta cupiditate, voluptatibus harum.</p>
            <motion.div className="buttons" variants={variants}>
              <motion.button variants={variants}><AnchorLink offset={50} href="#Contact">Let's talk</AnchorLink> </motion.button>
              <motion.button variants={variants}>Download CV</motion.button>
            </motion.div>
          </motion.div>

        </motion.div>
    </motion.div>
  )
}

export default About

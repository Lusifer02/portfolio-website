import "./experience.scss"
import { animate, color, motion, stagger } from "framer-motion"

const variants = {
    initial:{
        x: -300,
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

const Experience = () => {
  return (
    <motion.div className="experience" variants={variants} initial="initial" whileInView="animate">
      <div className="titleContainer" variants={variants}>
        <div className="title">
          <h1><motion.b whileInView={{color:"orange"}}>Work</motion.b> Experience</h1>
        </div>
      </div>
      <motion.div className="listContainer" variants={variants} >
        <div className="box">
          <motion.h2 whileHover={{color:"orange"}}>Role</motion.h2>
          <h3>Company name</h3>
          <h4>duration</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum ratione nemo provident velit perspiciatis aliquam deserunt neque expedita unde. Laborum rem repellendus sequi quae culpa nihil, ea ut ipsa.
          </p>
        </div>
        <div className="box">
          <motion.h2 whileHover={{color:"orange"}}>Role</motion.h2>
          <h3>Company name</h3>
          <h4>duration</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum ratione nemo provident velit perspiciatis aliquam deserunt neque expedita unde. Laborum rem repellendus sequi quae culpa nihil, ea ut ipsa.
          </p>
        </div>
        <div className="box">
          <motion.h2 whileHover={{color:"orange"}}>Role</motion.h2>
          <h3>Company name</h3>
          <h4>duration</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum ratione nemo provident velit perspiciatis aliquam deserunt neque expedita unde. Laborum rem repellendus sequi quae culpa nihil, ea ut ipsa.
          </p>
        </div>
        
      </motion.div>
    </motion.div>
  )
}

export default Experience

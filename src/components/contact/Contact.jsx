import { animate, motion } from "framer-motion"
import "./contact.scss"

const variants = {
    initial:{
        y:500,
        opacity: 0,
    },
    animate:{
        y: 0,
        opacity: 1,
        transition:{
            duration:0.5,
            staggerChildren: 0.1,
        },
    },
};

const Contact = () => {
  return (
    <motion.div className="contact" initial="initial" whileInView={animate}>
        <motion.div className="textContainer" >
            <motion.h1>Let's work together</motion.h1>
            <motion.div className="item">
                <h2>phone</h2>
                <span>9892748299</span>
            </motion.div>
            <motion.div className="item">
                <h2>Mail</h2>
                <span>abc@gmail.com</span>
            </motion.div>
            <motion.div className="item">
                <h2>Address</h2>
                <span>xyz, block-1</span>
            </motion.div>
        </motion.div>
        <div className="formContainer">
            <form action="">
                <input type="text" required placeholder="Name"/>
                <input type="email" required placeholder="Email"/>
                <textarea rows={8} placeholder="Type messeage here..."/>
                <button className="btn btn1">Submit</button>
            </form>
        </div>
    </motion.div>
  )
}

export default Contact

import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <Sidebar/>
        <div id="Homepage" className="wrapper">
            <motion.span
            initial={{opacity: 0, scale: 0.5}} 
            animate={{opacity: 1, scale: 1}} 
            transition={{duration: 0.5}}>
            Portfolio</motion.span>
            <div className="social">
            <a href="https://www.linkedin.com/in/lalit-mohanty/"><img src="/linkedin.png" alt=""/></a>
            <a href="https://www.instagram.com"><img src="/instagram.png" alt=""/></a>
            <a href="https://github.com/Lusifer02"><img src="/github.png" alt=""/></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar

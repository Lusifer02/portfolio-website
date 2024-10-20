import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./Projects.scss";

const items = [
  {
    id:1,
    title:"Crypto-Currency Price Tracker App",
    img:"https://images.pexels.com/photos/5980866/pexels-photo-5980866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio doloribus adipisci ab ea, expedita quod! Architecto, repellat non, ab sapiente ratione beatae repudiandae eveniet id ad voluptatibus voluptatum laborum aliquam.",
    url:"https://crypto-place-lusifer02.netlify.app/"
  },
  {
    id:2,
    title:"Exp2",
    img:"https://images.pexels.com/photos/18936031/pexels-photo-18936031/free-photo-of-korean-bbq-restaurant.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio doloribus adipisci ab ea, expedita quod! Architecto, repellat non, ab sapiente ratione beatae repudiandae eveniet id ad voluptatibus voluptatum laborum aliquam."
  },
  {
    id:3,
    title:"Exp3",
    img:"https://images.pexels.com/photos/21193046/pexels-photo-21193046/free-photo-of-a-boat-is-docked-in-front-of-a-row-of-buildings.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio doloribus adipisci ab ea, expedita quod! Architecto, repellat non, ab sapiente ratione beatae repudiandae eveniet id ad voluptatibus voluptatum laborum aliquam."
  }
];

const Single =({item}) =>{

  const ref = useRef();

  const{scrollYProgress} = useScroll({target: ref,});

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100])

  return(
    <section>
      <div className="container">
      <div className="wrapper">
      <div className="imageContainer" ref={ref}>
        <img src={item.img} alt="" />
      </div>
        <motion.div className="textContainer" style={{y}}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <a href={item.url}>
          <button className="btn btn1">See Demo</button>
          </a>
        </motion.div>
        </div>
      </div>
    </section>
  )
}

const Projects = () => {

  const ref = useRef();

  const{scrollYProgress} = useScroll({target: ref, offset:["end end","start start"]});

  const scaleX = useSpring(scrollYProgress,{
    stiffness: 100,
    damping: 30,
  })



  return (
    <div className="projects" ref={ref}>
    <div className="progress">
      <h1>Featured<motion.b whileInView={{color:"orange"}}> Projects</motion.b></h1>
      <motion.div style={{scaleX}} className="progressBar"></motion.div>
    </div>
      {items.map(item =>(
        <Single item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Projects

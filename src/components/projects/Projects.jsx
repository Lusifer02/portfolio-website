import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./Projects.scss";

const items = [
  {
    id:1,
    title:"Exp1",
    img:"https://images.pexels.com/photos/27163466/pexels-photo-27163466/free-photo-of-woman-reading-a-book-in-shadow.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, explicabo odit pariatur dolorem culpa veritatis amet beatae! Labore deserunt earum, placeat tempora debitis eius inventore quia voluptas, consequatur veniam non quis eligendi ducimus! Nisi, voluptatum repudiandae accusamus ab voluptas odit nihil suscipit, mollitia animi et placeat!"
  },
  {
    id:2,
    title:"Exp2",
    img:"https://images.pexels.com/photos/18936031/pexels-photo-18936031/free-photo-of-korean-bbq-restaurant.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, explicabo odit pariatur dolorem culpa veritatis amet beatae! Labore deserunt earum, placeat tempora debitis eius inventore quia voluptas, consequatur veniam non quis eligendi ducimus! Nisi, voluptatum repudiandae accusamus ab voluptas odit nihil suscipit, mollitia animi et placeat!"
  },
  {
    id:3,
    title:"Exp3",
    img:"https://images.pexels.com/photos/21193046/pexels-photo-21193046/free-photo-of-a-boat-is-docked-in-front-of-a-row-of-buildings.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, explicabo odit pariatur dolorem culpa veritatis amet beatae! Labore deserunt earum, placeat tempora debitis eius inventore quia voluptas, consequatur veniam non quis eligendi ducimus! Nisi, voluptatum repudiandae accusamus ab voluptas odit nihil suscipit, mollitia animi et placeat!"
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
          <button className="btn btn1">See Demo</button>
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
      <h1>Featured Works</h1>
      <motion.div style={{scaleX}} className="progressBar"></motion.div>
    </div>
      {items.map(item =>(
        <Single item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Projects

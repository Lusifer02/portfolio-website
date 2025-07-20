import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./projects.scss";

const items = [
  {
    id:1,
    title:"Crypto-Currency Price Tracker App",
    img:"https://images.pexels.com/photos/5980866/pexels-photo-5980866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc:" Aggregated live data from cryptocurrency exchanges providing the latest price information on major cryptocurrencies. The app is built using React, Tailwind CSS and coniGecko API. It features a responsive design and provides real-time updates on cryptocurrency prices.",
    url:"https://cryptoplace-cryptoprice-tracker.netlify.app/"
  },
  // {
  //   id:2,
  //   title:"Exp2",
  //   img:"https://www.boardinfinity.com/blog/heap-sort-algorithm/",
  //   desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio doloribus adipisci ab ea, expedita quod! Architecto, repellat non, ab sapiente ratione beatae repudiandae eveniet id ad voluptatibus voluptatum laborum aliquam."
  // },
  {
    id:3,
    title:"Sorting Visualizer",
    img:"https://images.pexels.com/photos/7269676/pexels-photo-7269676.jpeg",
    desc:"Interactive tool showcasing 6 sorting methods (Bubble, Selection, Insertion, Merge, Quick, Heap) with real-time array visualization. Features adjustable array size, speed control, light/dark mode, and step-by-step sorting process with comparison/swap tracking. Built with HTML, CSS (Tailwind), and JavaScript.",
    url:"https://sortingvisualizerss.netlify.app/"
    
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

export default Projects;

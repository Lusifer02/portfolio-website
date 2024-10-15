import "./app.scss"
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";


const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Experience"><Parallax type ="experience"/></section>
    <Experience/>
    <section id="Projects"><Parallax type ="projects"/></section>
    <Projects/>
    <section id="Contact">
      <Contact/>
    </section>
  </div>
};

export default App

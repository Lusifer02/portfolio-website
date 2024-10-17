import "./app.scss"
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
import About from "./components/about/About"


const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="About">
      <About/>
    </section>
    <section id="Experience"><Parallax type ="experience"/></section>
    <section><Experience/></section>
    <section id="Projects"><Parallax type ="projects"/></section>
    <Projects/>
    <section id="Skills">
      <Skills/>
    </section>
    <section id="Contact">
      <Contact/>
    </section>
  </div>
};

export default App

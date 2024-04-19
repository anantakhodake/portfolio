import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/introduction/Intro";
import Skill from "./components/skill/Skill";
import Contact from "./components/contact/Contact";
// import Footer from " ./components/footer/Footer";
import Experience from "./components/experience/Experience";
import ProjectCard2 from "./components/project/ProjectCard2"
import Footer from "./components/footer/FooterCard";
function App() {
  return (
    <div className="app">
      <Navbar/>
      <Intro />
      <Skill />
      <ProjectCard2 />
      <Experience />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;

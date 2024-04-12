import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/introduction/Intro";
import Skill from "./components/skill/Skill";
import ProjectCard from "./components/ProjectCard";
import ProjectCard1 from "./components/ProjectCard1";
function App() {
  return (
    <div className="app">
      <Navbar/>
      <Intro />
      <Skill />
      <ProjectCard1 />
    </div>
  );
}

export default App;

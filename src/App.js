import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/introduction/Intro";
import Skill from "./components/skill/Skill";
import ProjectCard from "./components/project/ProjectCard";
import ProjectCard1 from "./components/project/ProjectCard1";
import ProjectCard3 from "./components/project/ProjectCard3";
function App() {
  return (
    <div className="app">
      <Navbar/>
      <Intro />
      <Skill />
      {/* <ProjectCard3 /> */}
    </div>
  );
}

export default App;

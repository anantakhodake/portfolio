import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/introduction/Intro";
import Skill from "./components/skill/Skill";
function App() {
  return (
    <div className="app">
      <Navbar/>
      <Intro />
      <Skill />
    </div>
  );
}

export default App;

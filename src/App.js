import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
function App() {
  return(
    <div className="app">
      <Navbar />
       <Skills />
    </div>
  )
  
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import MobileNavbar from "./components/MobileNavbar";
function App() {
  return(
    <div className="app">
      <Navbar />
      <MobileNavbar/>
       {/* <Skills /> */}
    </div>
  )
  
}

export default App;

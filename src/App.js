import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import MobileNavbar from "./components/MobileNavbar";
import Introduction from "./components/Introduction";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="app">
      <Navbar />
      <MobileNavbar />
      <Introduction />
      {/* <Skills /> */}
      <Contact />
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import MobileNavbar from "./components/MobileNavbar";
import Introduction from "./components/Introduction";
function App() {
  return (
    <div className="app">
      <Navbar />
      <MobileNavbar />
      <Introduction />
      <Skills />
    </div>
  );
}

export default App;

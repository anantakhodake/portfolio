import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return(
    <div className="app">
      <Navbar />
    </div>
  )
  
}

export default App;

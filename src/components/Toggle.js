import React, { Suspense } from "react";
import "./Toggle.css";
import { useContext } from "react";
import { themeContext } from "../../Context";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
function Toggle() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    // debugger
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className="toggle" onClick={handleClick}>
      <Sun />
      <Moon />

      <div
        className="t-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
}

export default Toggle;

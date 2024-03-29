import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <div className="navbar_wrapper" id="navbar">
      <div className="navbar_left">
        <div className="u_name">Ananta Khodake</div>
      </div>
      <div className="navbar_right">
        <div className="navbar_list">
          <ul style={{ listStyle: "none" }}>
            <li>
              <Link to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="Navbar" spy={true} smooth={true}>
                Skill
              </Link>
            </li>
            <li>
              <Link to="Navbar" spy={true} smooth={true}>
                Project
              </Link>
            </li>
            <li>
              <Link to="Navbar" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="Navbar" spy={true} smooth={true}>
                Links
              </Link>
            </li>
          </ul>
        </div>
        <Link to="Navbar" spy={true} smooth={true}>
          <button className="button n-button">Contact us</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";
import "./Mobilenav.css";
import { Link } from "react-scroll";
import { slide as Menu, ReactBurgerMenu } from "react-burger-menu";
import cv from "./img/cv.png";
import linkdin from "./img/linkedin.png";
import github from "./img/github.png";

const Mobilenav = () => {
  return (
    <Menu>
      <div className="mobilenav_wrapper">
        <div className="top">
          <div className="u_name">Ananta Khodake</div>
        </div>
        <div className="mobilenav_list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link
                to="intro"
                smooth={true}
                spy={true}
                onClick={() => {
                  document.getElementById("react-burger-cross-button").click();
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="Skill"
                smooth={true}
                spy={true}
                onClick={() => {
                  document.getElementById("react-burger-cross-button").click();
                }}
              >
                Skill
              </Link>
            </li>
            <li>
              <Link
                to="Projects"
                smooth={true}
                spy={true}
                onClick={() => {
                  document.getElementById("react-burger-cross-button").click();
                }}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="Experience"
                smooth={true}
                spy={true}
                onClick={() => {
                  document.getElementById("react-burger-cross-button").click();
                }}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="Links"
                smooth={true}
                spy={true}
                onClick={() => {
                  document.getElementById("react-burger-cross-button").click();
                }}
              >
                Links
              </Link>
            </li>
          </ul>
        </div>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          onClick={() => {
            document.getElementById("react-burger-cross-btn").click();
          }}
        >
          <button className="button n-button">Contact</button>
        </Link>
        <div className="s-icons" style={{marginLeft:'-3.5rem'}}>
          <a
            href="https://drive.google.com/file/d/15VZmFjia8f79GbpB900a-eYF529byv8M/view?usp=sharing"
            rel="noopener noreferrer"
          >
            <img src={cv} />
          </a>
          <a href="https://github.com/anantakhodake" rel="noopener noreferrer">
            <img src={github} />
          </a>
          <a
            href="https://www.linkedin.com/in/ananta-khodake-a8ab73229/"
            rel="noopener noreferrer"
          >
            <img src={linkdin} />
          </a>
        </div>
      </div>
    </Menu>
  );
};

export default Mobilenav;

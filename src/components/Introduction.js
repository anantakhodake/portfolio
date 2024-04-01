import React from "react";
import cv from "./img/cv.png";
import linkdin from "./img/linkedin.png";
import github from "./img/github.png";
import ananta from "./img/ananta.jpg";
import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="intro" id="intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          <span>Ananta</span>
          <span>Khodake</span>
          <span className="Edu1">
            <h4 className="Branch">PRPCEM Amaravati</h4>
            <h4 className="Branch">Computer Science & Engineering</h4>
            <h4 className="Branch">Fullstack Web Developer</h4>
          </span>
          <span className="Edu2">
            <p
              style={{
                fontSize: "90%",
                textAlign: "justify",
                marginTop: "5%",
                width: "115%",
                marginLeft: ".7rem",
              }}
            >
              As a fourth-year undergraduate I have gained valuable experience
              in web development through internships and have a strong
              foundation in programming and development languages. My internship
              at ACE Online allowed me to work with React.js, Redux, Node.js,
              and MongoDB, contributing to the development of an online test
              series platform. I have completed various projects, including
              TextUp, a versatile note-taking application, AlertEye, a
              drowsiness detection system, and LiFiVerse, a project utilizing
              Arduino for data transmission using light. I have achived first
              rank in the high market potential category for a Design Practicum
              project and being selected as a Microsoft Engage 2022 Mentee. I
              have also demonstrated leadership and teamwork through positions
              like teaching assistant and involvement in planning management
              team.
            </p>
          </span>
        </div>
        <div className="i-icons">
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
      <div className="i-right">
        <img src={ananta} alt="" height="750px" />
      </div>
    </div>
  );
};

export default Introduction;

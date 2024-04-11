import React from "react";
import "./Intro.css";
import cv from "../img/cv.png"
import github from "../img/github.png"
import linkdin from "../img/linkedin.png"
import ananta from "../img/ananta.jpg"

function Intro() {
  return (
    <div className="intro-container flex justify-between items-center mt-20">
      {/* left introduction container containing some personal detail */}
      <div className="left-intro-container w-2/3 flex flex-col items-start gap-12 p-8">
        <div className="left-iname flex">
          <h1 className="text-6xl font-bold text-gray-700">
            Ananta <span className="text-6xl text-blue-700 font-bold">Khodake</span>
          </h1>
        </div>
        {/* college name branch name   */}
        <div className="education ml-3 flex justify-around px-2 py-2 gap-4 ">
          <h1 className="text-2xl text-center font-semibold text-gray-600">PRPCEM Amravati</h1>
          <h1 className="text-2xl text-center font-semibold text-gray-600">Computer Science And Engineering(CSE)</h1>
          <h1 className="text-2xl text-center font-semibold text-gray-600">Fullstack Developer</h1>
        </div>
        {/* personal detail */}
        <div className="detail-container">
          <p className="text-lg text-gray-950">
            As a fourth-year undergraduate I have gained valuable experience in
            web development through internships and have a strong foundation in
            programming and development languages. My internship at ACE Online
            allowed me to work with React.js, Redux, Node.js, and MongoDB,
            contributing to the development of an online test series platform. I
            have completed various projects, including TextUp,bchjbjbchjgafgjgfjwggg
          </p>
        </div>
        {/* social media links linkdin github and resume */}
        <div className="icons flex gap-4">
          <a
            href="https://drive.google.com/file/d/1oAJLQR9DvUEdxBCpe6TuleInk0yc-hBI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-12  " src={cv} alt="" />
          </a>
          <a
            href="https://github.com/Pranav-Programmer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-12" src={github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/pranav-dharme/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-12" src={linkdin} alt="" />
          </a>
        </div>
      </div>
      {/* right intro container */}
      <div className="img-container mx-12 ">
        <img  src={ananta} className="h-96 w-96" alt=""/>
      </div>
    </div>
  );
}

export default Intro;

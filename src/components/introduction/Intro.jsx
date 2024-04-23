import React from "react";
import "./Intro.css";
import cv from "../img/cv.png"
import github from "../img/github.png"
import linkdin from "../img/linkedin.png"
import ananta2 from "../img/ananta2.png"
function Intro() {
  return (
    <div className="intro-container flex justify-between items-center mt-20">
      {/* left introduction container containing some personal detail */}
      <div className="left-intro-container w-2/3 flex flex-col items-start gap-12 p-8">
        <div className="left-iname flex">
          <h1 className="text-6xl font-bold text-gray-700 "  >
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
            A meticulous & organized fresher passionate about learning and implementing new technologies.
            A bachelor's degree in computer science and engineering has improve my proficiency in technical skills and i am looking forward to 
            to working in a competative envirnment that motivates me to enhance my technical knowledge.
          </p>
        </div>
        {/* social media links linkdin github and resume */}
        <div className="icons flex gap-4">
          <a
            href="https://drive.google.com/file/d/1fgXy8MjlIF4q6vOE2_i_06UxujWAVmFG/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-12  " src={cv} alt="" />
          </a>
          <a
            href="https://github.com/anantakhodake"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-12" src={github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/ananta-khodake-a8ab73229/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-12" src={linkdin} alt="" />
          </a>
        </div>
      </div>
      {/* right intro container */}
      <div className="img-container mx-12 h-96 w-92 overflow-hidden  rounded-[21px] ">
        <img  src={ananta2} className="h-[100%] w-[100%]  " alt=""/>
      </div>
    </div>
  );
}

export default Intro;

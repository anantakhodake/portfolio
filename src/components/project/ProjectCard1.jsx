import React from "react";
import "./ProjectCard1.css";
import cancer from "../img/cancer.jpeg";

function ProjectCard1() {
  return (
    <div className="box">
      <div className="box-img">
        <img src={cancer} alt="" className="" />
      </div>
      <div className="content">
        <h1>Skin Cancer Prediction System</h1>
      </div>
      <div className="p-button">
        <li><a href="" className="b1">Link</a></li>
        <li><a href="" className="b1">Github</a></li>
      </div>
    </div>
  );
}

export default ProjectCard1;

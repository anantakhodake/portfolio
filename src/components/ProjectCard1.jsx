import React from "react";
import "./ProjectCard1.css";
import cancer from "./img/cancer.jpeg";

function ProjectCard1() {
  return (
    <div className="box">
      <div className="box-img">
        <img src={cancer} alt="" className="" />
      </div>
      <div className="content">
        <h1>Skin Cancer Prediction System</h1>
        <p>
          A paragraph is defined as “a group of sentences or a single sentence
          that forms a unit” (Lunsford and Connors 116). Length and appearance
          do not determine whether a section in a paper is a paragraph. For
          instance, in some styles of writing, particularly journalistic styles,
          a paragraph can be just one sentence long.
        </p>
      </div>
      <div className="p-button">
        <li><a href="" className="b1">Link</a></li>
        <li><a href="" className="b1">Github</a></li>
      </div>
    </div>
  );
}

export default ProjectCard1;

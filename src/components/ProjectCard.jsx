import React from "react";
import "./ProjectCard.css";
import cancer from "./img/cancer.jpeg";

function ProjectCard() {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="img-box">
          <img className="c-img" alt="" src={cancer} />
        </div>

        <div className="detail">
          <h1>Skin Cancer Prediction system</h1>
          <p>
            A paragraph is defined as “a group of sentences or a single sentence
            that forms a unit” (Lunsford and Connors 116). Length and appearance
            do not determine whether a section in a paper is a paragraph. For
            instance, in some styles of writing, particularly journalistic
            styles, a paragraph can be just one sentence long.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

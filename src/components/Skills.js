import React from "react";
import { Typed } from "react-typed";
import Card from "./skillsCards"
import "./Skills.css";
import img1 from "../components/img/cpp.png"
import img2 from "../components/img/css.png"
import img3 from "../components/img/git.png"
import img4 from "../components/img/html.png"
import img5 from "../components/img/js.png"
import img6 from "../components/img/mongoDB.png"
import img7 from "../components/img/php.png"
import img8 from "../components/img/sql.png"
import img9 from "../components/img/react.png"
import img10 from "../components/img/postman.png"

const info = [
  {
    image: img1,
  },
  {
    image: img2,
  },
  {
    image: img3,
  },
  {
    image: img4,
  },
  {
    image: img5,
  },
  {
    image: img6,
  },
  {
    image: img7,
  },
  {
    image: img8,
  },
  {
    image: img9,
  },
  {
    image: img10,
  }
]

function Skills() {
  let i = 0;
  return (
    <div className="skills">
      <div className="all-header">
        <Typed string={['Skills']} typeSpeed={150} loop />
      </div>
      <div className="main-skill" id="skill">
        { info.map(function(data) {
          return <Card IMG={data.image} class={`div7`} key={++i} />
        })}
      </div>
    </div>
  );
}

export default Skills;

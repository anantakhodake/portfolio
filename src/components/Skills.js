import React from "react";
import { Typed } from "react-typed";

import img1 from "../components/img/cpp.png"
import img1 from "../components/img/css.png"
import img1 from "../components/img/git.png"
import img1 from "../components/img/html.png"
import img1 from "../components/img/js.png"
import img1 from "../components/img/mongoDB.png"
import img1 from "../components/img/php.png"
import img1 from "../components/img/sql.png"
import img1 from "../components/img/react.png"
import img1 from "../components/img/postman.png"

const info = [
  {
    image: img1
  },
  {
    image: img2
  },
  {
    image: img3
  },
  {
    image: img4
  },
  {
    image: img5
  },
  {
    image: img6
  },
  {
    image: img7
  },
  {
    image: img8
  },
  {
    image: img9
  },
  {
    image: img10
  },
]

function Skills() {
  let i = 0;
  return (
    <div className="skill-container">
      <div className="all-headers">
        <Typed string={["Skills"]} typeSpeed={150} loop />
      </div>
      <div className="main-skill" id="skill">
        { info.map(function(data) {
          return <Card IMG={data.image}  />
        })}
      </div>
    </div>
  );
}

export default Skills;

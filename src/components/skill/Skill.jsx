import React from "react";
import "./Skill.css";
import css from "../img/cpp.png";

import img1 from "../img/cpp.png";
import img2 from "../img/css.png";
import img3 from "../img/git.png";
import img4 from "../img/github.png";
import img5 from "../img/html.png";
import img6 from "../img/js.png";
import img7 from "../img/mongoDB.png";
import img8 from "../img/sql.png";
import img9 from "../img/php.png";
import img10 from "../img/react.png";
import img11 from "../img/postman.png";
import { ReactTyped } from "react-typed";

function Skill() {
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
    },
    {
      image: img11,
    },
  ];
  return (
    <>
      <div className="flex justify-center flex-col gap-3">
        <div className="flex justify-center items-center">
          <ReactTyped className="text-[30px] font-semibold" strings={["SKILLS"]} typeSpeed={150} loop />
        </div>
        <div className="flex justify-center">
        <div className=" mt-3 skill-container w-5/6  border border-solid border-gray-700 flex flex-wrap items-center gap-12 justify-center px-6 py-6  rounded-[50px] ">
          {info.map((items, index) => {
            return(
              <div data-aos="flip-up" data-aos-duration="700" style={{transformOrigin: '0px 0px'}}><img src={items.image} alt="" className="h-20 " /></div>
            );
          })}
        </div>
        </div>
      </div>
    </>
  );
}

export default Skill;

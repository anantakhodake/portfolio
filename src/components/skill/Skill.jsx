import React from "react";
import "./Skill.css";
import css from "../img/cpp.png"

import img1 from "../img/cpp.png";
import img2 from "../img/cpp.png";
import img3 from "../img/cpp.png";
import img4 from "../img/cpp.png";
import img5 from "../img/cpp.png";
import img6 from "../img/cpp.png";
import img7 from "../img/cpp.png";
import img8 from "../img/cpp.png";
import img9 from "../img/cpp.png";
import img10 from "../img/cpp.png";

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
  ];
  return (
    <>
      <div className=" mt-3 skill-container w-2/3  border border-solid border-gray-700 flex flex-wrap items-center justify-center px-6 py-6  gap-10 rounded-[50px] ">
        {info.map((items,index)=>{
        return (
        <img src={items.image} alt="" className="h-20 "/>
        );
        })}
      </div>
    </>
  );
}

export default Skill;

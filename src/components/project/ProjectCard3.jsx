import React, { useState } from "react";
import "./ProjectCard3";
import cancer from "../img/cancer.jpeg"
import { motion } from "framer-motion";

function ProjectCard3() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  function handleFlip() {
    if (!isAnimated) {
      setIsFlipped(!isFlipped);
      setIsAnimated(true);
    }
  }
  return (
    <div className="flex items-center justify-center bg-black h-[800px] cursor-pointer">
      <div
        className="flip-card w-[600px] h-[360px] rounded-md "
        onClick={handleFlip}
      >
        <motion.div
          className="flip-card-inner w-[100%] h-[100%]"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationCompleate={() => setIsAnimated(false)}
        >
          <div className="flip-card-front w-[100%] h-[100%] border-[1px] text-white rounded-lg p-4"
            style={{backgroundImage:`url(${cancer})`}}>
              <h1>Skin cancer system</h1>
          </div>
          
          <div className="flip-card-back w-[100%] h-[100%] border-[1px] text-white rounded-lg p-4"
            style={{backgroundImage:`url(${cancer})`}}>
              <h1>Skin cancer system</h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectCard3;

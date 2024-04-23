import React from "react";
import "./Experience.css";
import Aos from "aos";
import 'aos/dist/aos.css'
import  { ReactTyped } from 'react-typed';

const Experience = () => {
  return (
   
    <div className="container-experience" id="Experience">
        <div className="row">
            <section className="col">
            <div className="flex justify-center items-center">
        <ReactTyped
          className="text-[30px] font-semibold"
          strings={["EXPERIENCE"]}
          typeSpeed={150}
          loop
        />
      </div>
                <div className="contents" id="Experience">
                    <div className="e-box" data-aos="fade-right" data-aos-duration="2000">
                        <h4>Apr 2023 - June 2023</h4>
                        <h3>ARK DEVS</h3>
                        <h5>WEB DEVELOPER</h5>
                        <p>Developed and designed a responsive website for clients,resulting in incresing 25% of traffic.Worked on the SEO principle to create the optimized UI for the websites.</p>
                        <p>Collabrates with a team of webdevelopers to creates a prototypes for a web application.Making the websites responsive.</p>
                    <div className="blur-e"></div>
                    <div className="blur-e2"></div>  
                    </div>
                </div>
            </section>
        </div>
    </div>
    
  );
};

export default Experience;
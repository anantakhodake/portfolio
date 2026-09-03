import React from "react";
import "./Experience.css";
import 'aos/dist/aos.css'
import  { ReactTyped } from 'react-typed';

const Experience = () => {
  return (
   
    <div className="container-experience" id="Experience">
        <div className="row">
            <section className="col">
            <div className="flex justify-center items-center mt-48">
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
                <div className="contents" id="Experience">
                    <div className="e-box" data-aos="fade-right" data-aos-duration="2000">
                        <h4>AUG 2023 - Present</h4>
                        <h3>INVENTZO SYSTEMS (INDIA) PRIVATE LIMITED</h3>
                        <h5>FULLSTACK DEVELOPER</h5>
                        <p>As a Full Stack Developer, I specialize in designing, developing, and deploying scalable, user-focused web applications. I work on the front-end and back-end to guarantee seamless integration, functionality, and performance.</p>
                        <p>Make dynamic and responsive web apps with HTML, CSS, JavaScript, React.js, and Node.js/Express.js. Develop and implement RESTful APIs to enable efficient client-server data transfer. Ensure data integrity and effective searches by managing databases such as PostgreSQL, MySQL, and MongoDB.</p>
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
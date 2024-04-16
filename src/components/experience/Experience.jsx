import React from "react";
import "./Experience.css";
import Aos from "aos";
import 'aos/dist/aos.css'
import  { ReactTyped } from 'react-typed';

const Experience = () => {
  return (
   
    <div className="container-experience">
        <div className="row">
            <section className="col">
            <div className='All-header' style={{margin: '7% 0 2% 0'}}>  
                <ReactTyped strings={['EXPERIENCE']} typeSpeed={150} loop />
            </div>
                <div className="contents" id="Experience">
                <div className="e-box" data-aos="fade-right" data-aos-duration="2000">
                        <h4>January 2023 - July 2023</h4>
                        <h3>ACE Online</h3>
                        <h5>SDE Intern</h5>
                        <p>I gained practical experience in web development, focusing on frontend and backend technologies. I collaborated with the frontend team to develop an OTS platform, implementing key features such as user authentication, API integration, and React routing.</p>
                    </div>
                    <div className="e-box" data-aos="fade-right" data-aos-duration="2000">
                        <h4>January 2023 - July 2023</h4>
                        <h3>ACE Online</h3>
                        <h5>SDE Intern</h5>
                        <p>I gained practical experience in web development, focusing on frontend and backend technologies. I collaborated with the frontend team to develop an OTS platform, implementing key features such as user authentication, API integration, and React routing.</p>
                    </div>
                    <div className="e-box" data-aos="fade-right" data-aos-duration="2000">
                        <h4>Apr 2023 - June 2023</h4>
                        <h3>ARK DEVS</h3>
                        <h5>WEB DEVELOPER</h5>
                        <p>Microsoft intern Engage is a program for student engagement and mentorship that provides 1:1 support to selected students as they work on a project and an inside look at Microsoft's culture and values.</p>
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
import React from 'react'
import Typed, { ReactTyped } from 'react-typed';
import './ProjectCard2.css'
import Card from './Card';
import IMG1 from '../img/prj2.jpg';

const info = [ 
    {
      name: 'NlistJob',
      link: 'http://jobway.epizy.com/', // Link to the project
      github: 'https://github.com/Pranav-Programmer/NlistJob', // Link to the github repo
      image: IMG1,
      border: 'solid #6c72b2', // border-
      boxShadow: '0 15px 15px #6c72b2', // box-shadow
      color: 'rgb(228, 177, 177)',
      text: '• NlistJob is a comprehensive job portal built using HTML, CSS, PHP, MySQL, Bootstrap and JavaScript tech-stack.',          
      text1:'• It enables recruiters to post job listings, verify their businesses, and connect with potential candidates securely.',
      text2:'• Job seekers can apply for jobs directly, ensuring accurate and verified personal and educational details.',               
    },
    {
      name: 'FaceRec',
      link: 'https://youtu.be/W-godAD9yWE', // Link to the project
      github: 'https://github.com/Pranav-Programmer/Face-Recognition-Advance-Attendance-System.github.io', // Link to the github repo
      image: IMG1,
      border: '0 15px 15px #6300bd', // border-
      boxShadow: '0 15px 15px #6300bd', // box-shadow
      color: 'rgb(177, 231, 210)',
      text: '• The Face Attendance System is a robust and user-friendly project built using Python, OpenCV, face_recognition, and Streamlit.',          
      text1:'• It employs deep learning algorithms to perform real-time face recognition, allowing users to mark attendance effortlessly.',
      text2:'• With its intuitive interface and accurate face recognition capabilities, this system simplifies attendance management for various applications.',               
    },
    {
      name: 'TextUp',
      link: 'https://text-up.netlify.app/', // Link to the project
      github: 'https://github.com/Pranav-Programmer/TextUp', // Link to the github repo
      image: IMG1,
      border: '0 15px 15px #ede5ee', // border-
      boxShadow: '0 15px 15px #ede5ee', // box-shadow
      color: 'rgb(193, 225, 232)',
      text: '• TextUp is a robust note-taking application built using React.js for the frontend, Node.js for the backend, and MongoDB for data storage.',          
      text1:'• It offers users a seamless experience to create, manage, and search text-based notes, along with the ability to upload images.',
      text2:'• With its user-friendly interface and secure data storage, TextUp simplifies note organization and retrieval for efficient usage.',
    },
]
let i = 1;
function project() {
  return (
    <div className='project'>
         <div className="flex justify-center items-center mt-8">
        <ReactTyped
          className="text-[30px] font-semibold"
          strings={["CONTACT"]}
          typeSpeed={150}
          loop
        />
      </div>
       <main id='project'>
          {
          info.map(function (data) {
            return <Card IMG={data.image} name={data.name} Link={data.link} GitHub={data.github} Border={data.border} BoxShadow={data.boxShadow} color={data.color} text={data.text} text1={data.text1} text2={data.text2}  class={`div${i++}`} key={i}/>
          })}
        </main>
        <p className='more' style={{ marginLeft:'87%', marginTop:'2.5rem'}}><a className='a-project' href="https://github.com/anantakhodake?tab=repositories" target="_blank" rel="noopener noreferrer">More project</a></p>
    </div>
  )
}

export default project
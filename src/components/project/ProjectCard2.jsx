import React from 'react'
import Typed, { ReactTyped } from 'react-typed';
import './ProjectCard2.css'
import Card from './Card';
import IMG1 from '../img/imageg.jpg';
import IMG2 from '../img/dockerw.png';
import IMG3 from '../img/wheather.avif';
import IMG4 from '../img/todo.avif';
import IMG5 from '../img/news.webp';
import IMG6 from '../img/resume-builder.jpg';

const info = [ 
  {
    name: 'Simple Image Gallery with Axios',
    // link: 'http://jobway.epizy.com/', // Link to the project
    github: 'https://github.com/anantakhodake/Pixel-clone', // Link to the github repo
    image: IMG1,
    border: 'solid #6c72b2', // border-
    boxShadow: '0 15px 15px #6c72b2', // box-shadow
    color: 'rgb(228, 177, 177)',
    text: '• The Simple Image Gallery project is a web application that allows users to browse through a collection of photos sourced from an external API.',          
    text1:'• The application utilizes the Axios library to fetch the photos from the API endpoint and display them in an organized gallery format.',
    text2:'•  In future we are adding filtering option and user authentication.',
    text3: "• This project build in HTML CSS JAVASCRIPT for frontend developement also i use axios library in react for http requests."              
  },
  {
    name: 'Weather Forecast Application',
    // link: 'https://youtu.be/W-godAD9yWE', // Link to the project
    github: 'https://github.com/Pranav-Programmer/Face-Recognition-Advance-Attendance-System.github.io', // Link to the github repo
    image: IMG3,
    border: '0 15px 15px #6300bd', // border-
    boxShadow: '0 15px 15px #6300bd', // box-shadow
    color: 'rgb(177, 231, 210)',
    text: '• The Weather Forecast Application is a web-based tool designed to provide users with accurate and up-to-date weather information for their desired locations.',          
    text1:'• The application retrieves weather data from a weather API and presents it in a user-friendly interface, offering insights into current conditions, hourly forecasts, and extended forecasts.',
    text2:'• This project build in html ,css ,javscript also we are adding city condition to verify the wheather also we are added image query refer to wheather temp.',               
  },
  {
    name: 'Docker Website Clone',
    // link: 'https://text-up.netlify.app/', // Link to the project
    github: 'https://github.com/anantakhodake/docker-clone', // Link to the github repo
    image: IMG2,
    border: '0 15px 15px #ede5ee', // border-
    boxShadow: '0 15px 15px #ede5ee', // box-shadow
    color: 'rgb(193, 225, 232)',
    text: '• The Docker Website Clone with React Router Dom project is a front-end web application aimed at replicating the main features and layout of the official Docker website. ',          
    text1:'•  It utilizes React.js along with React Router Dom to create a dynamic and navigable user interface resembling the original website',
    text2:'• This project serves as a learning exercise for practicing React development skills and understanding the implementation of client-side routing.',
    text3: '• The feature of this project is main navigation , dynamic routing,responsive design,interactive components.'
  },
  {
    name: 'Resume Builder',
    // link: 'https://youtu.be/fc5VE636f4I', // Link to the project
    github: 'https://github.com/anantakhodake/Resume-Builder', // Link to the github repo
    image: IMG6,
    border: '0 15px 15px #0e6e84', // border-
    boxShadow: '0 15px 15px #0e6e84', // box-shadow
    color: 'rgb(234, 191, 211)',
    text: '• The Resume Builder in React project is a web application designed to streamline the process of creating professional resumes.',          
    text1:'•Built using React.js, this application allows users to easily input their personal information, educational background, work experience, skills, and other relevant details. ',
    text2:'• This project build using react js for frontend and express js and node js for a backend.in this project we are use html-pdf library for to generate the pdf for a resume.'
  },
  {
    name: 'News Site Website',
    // link: 'https://user-images.githubusercontent.com/79044490/203357603-fe72a49e-1893-4451-9960-6b75cf487d6a.mp4', // Link to the project
    github: 'https://github.com/anantakhodake/news-site', // Link to the github repo
    image: IMG5,
    border: '0 15px 15px #e0e6e7', // border-
    boxShadow: '0 15px 15px #e0e6e7', // box-shadow
    color: 'rgb(234, 234, 197)',
    text: '• The News Site Website in PHP is a dynamic web application designed to deliver news content to users in an organized and user-friendly manner.',          
    text1:'• The News Site Website in PHP is a dynamic web application designed to deliver news content to users in an organized and user-friendly manner.',
    text2:'• In this project we are use storing the news post using mysql database.',
  },
  {
    name: 'Todo List App',
    // link: 'https://pranav-programmer.github.io/MoodFlip/', // Link to the project
    github: 'https://github.com/anantakhodake/todo-app', // Link to the github repo
    image: IMG4,
    border: '0 15px 15px #c0c0c0', // border-
    boxShadow: '0 15px 15px #c0c0c0', // box-shadow
    color: 'rgb(236, 221, 194)',
    text: '• The Todo List App in React is a simple yet powerful task management tool built using React.js.',          
    text1:'• It enables users to create, edit, delete, and organize their tasks in an intuitive and efficient manner. ',
    text2:'• This project is build in react js ,html,css .also With features such as task categorization, priority setting, and filtering, this app aims to enhance productivity and help users stay organized in their daily activities.'
  }
]
let i = 1;
function project() {
  return (
    <div className='project'>
         <div className="flex justify-center items-center mt-8">
        <ReactTyped
          className="text-[30px] font-semibold"
          strings={["PROJECT"]}
          typeSpeed={150}
          loop
        />
      </div>
       <main id='project'>
          {
          info.map(function (data) {
            return <Card IMG={data.image} name={data.name} Link={data.link} GitHub={data.github} Border={data.border} BoxShadow={data.boxShadow} color={data.color} text={data.text} text1={data.text1} text2={data.text2} text3={data.text3}  class={`div${i++}`} key={i}/>
          })}
        </main>
        <p className='more' style={{ marginLeft:'87%', marginTop:'2.5rem'}}><a className='a-project' href="https://github.com/anantakhodake?tab=repositories" target="_blank" rel="noopener noreferrer">More project</a></p>
    </div>
  )
}

export default project
import React from 'react'
import "./Navbar.css";
import { Element, Link, ScrollLink } from 'react-scroll';

function Navbar() {
  return (
    <div className='n-wrapper navbar-wrapper px-3 py-3 flex justify-between ' id='Navbar'>
        <div className='left-name'>
        <h1 className='text-2xl font-semibold text-slate-900'>Ananta <span className='text-2xl font-semibold text-blue-800'>Khodake</span></h1>
        </div>
        <div className='right-wrapper flex justify-between w-1/2'>
            <div className=' n-right flex gap-9 right-links'>
            <ul className='flex gap-9 text-2xl font-normal list-none'>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link  to="skill" spy={true} smooth={true}>
                Skill
              </Link>
            </li>
            <li>
              <Link  to="project" spy={true} smooth={true}>
                Project
              </Link>
            </li>
            <li>
              <Link to="Experience" spy={true} smooth={true}>
              Experience
              </Link>
            </li>
          </ul>
            </div>
            <div className='btn'>
                <Link to='contact' spy={true} smooth={true}>
                <button className=' button flex-2 '>Contact Us</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar

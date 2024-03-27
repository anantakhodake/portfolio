import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar_container'>
        <h1>Ananta Khodake</h1>
        <ul>
           <Link><li>Home</li></Link>
        </ul>
    </div>
  )
}

export default Navbar

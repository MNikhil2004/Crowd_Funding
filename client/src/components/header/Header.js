// Header.js
import { Link } from 'react-router-dom';
import './Header.css'
// Header.js

import React from 'react';
import logo from './logo.png'; 

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
        <img src={logo}></img>
          <h1 className='rxe'>Crowdfunding Platform</h1>
          
        </div>
        <nav>

          <ul>
            <li><a href="#"><Link to="/">Home</Link></a></li>
            <li><a href="#"><Link to="/donor">Fundraiser</Link>
            </a></li>
            <li><a href="#"><Link to="/form">Campaigning</Link></a></li>
            <li><a href="#"><Link to="/brouse">Browse</Link></a></li>
            <li><a href="#">Track Progress</a></li>
            <li><a href="#" className="track-progress"><Link to="/login">Login</Link>
            </a></li>
            <div className="cylinder"></div>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
import React, { useState, useEffect } from 'react';
import "./MainSplash.css";
import logo from "../Assets/logo.png";
import { Link } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';

const MainSplash = () => {
  const [text, setText] = useState('');
  const fullText = "WELCOME TO SHOPPER FOR SHOPPING....";

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1)); // Update only up to the currentIndex
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 150);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='mainsplash'>
      <div className="mainsplash-container">
        {/* Typewriter text */}
        <h2 className="welcome-animation">{text}</h2>
        
        {/* Logo and Main Content */}
        <img className='mainsplash-logo' src={logo} alt="Logo" />
        <h1>SHOPPER</h1>
        <p>Your Shopping MarketPlace</p>
        
        {/* Navigation Buttons */}
        <div className="mainsplash-btn">
          <div className="mainsplash-btn-home">
            <Link to="/shop" className='home-btn'>
              <span>HOME </span>
            </Link>
            <EastIcon className="iconic"/>
          </div>
          <button>
            <Link to="/login">LOGIN</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainSplash;

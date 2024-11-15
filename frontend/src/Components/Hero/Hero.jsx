import React from 'react'
import "./Hero.css"
import hand_icon from "../Assets/hand_icon.png"
import hero_image from "../Assets/hero_image.png"
import EastIcon from '@mui/icons-material/East';
import { useState,useEffect } from 'react';
const Hero = () => {
    const [text, setText] = useState('');
  const fullText = "NEW ARRIVALS ONLY";

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
    <div className='hero'>
        <div className="hero-left">
            <h2 className="arrival-animation">{text}</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <EastIcon/>
               
            </div>
        </div>  
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>   
    </div>
  )
}

export default Hero

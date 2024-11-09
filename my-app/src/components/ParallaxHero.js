// ParallaxHero.js
import React, { useEffect, useState } from 'react';
import './ParallaxHero.css'; 
import "../style.css";

const ParallaxHero = () => {
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll event
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  // Add event listener for scrolls
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='ab-px-hero'>
        <div className="about-pg">
        <div
            className="header-ab-pg"
            style={{ height: `calc(100vh - ${scrollY}px)` }} // Adjust height based on scroll position
        >
            <div className="header-section-ab-pg">
            <h1>Who am i?</h1>
            <h2>Im more than just a good worker or student... </h2>
            </div>
        </div>
        <div className="section-wrap">
            <div className="section">
            <p>This is some content below the parallax header.</p>
        
            </div>
        </div>
        </div>
    </div>
    
  );
};

export default ParallaxHero;

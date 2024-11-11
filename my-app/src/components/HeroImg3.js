import "./HeroImg3Style.css";
import React from 'react';
import IntroImg from "../assets/Hero3.webp";

import { Link } from 'react-router-dom';


const HeroImg3 = () => {
    return (
        <div className="hero" 
        style={{ backgroundImage: `url(${IntroImg})` }} // Set the background inline
    >
            <div className="overlay"></div>
            <div className="hero-content">
                <h1>Hi, I'm a Programming Enthusiast</h1>
                <p>Passionate about hackathons, web development, and creative design projects.</p>
                <Link to="/project" className="btn btn-primary">Projekti</Link>
            </div>
        </div>
    );
}

export default HeroImg3;

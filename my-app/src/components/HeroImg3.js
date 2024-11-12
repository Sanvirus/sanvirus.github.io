import "../styles/HeroStyle.css"; // Ensures consistent button styling with HeroImg
import React from 'react';
import { Link } from "react-router-dom";
import IntroImg from "../assets/Hero3.webp";

const HeroImg3 = () => {
    return (
        <div className="hero" 
            style={{ backgroundImage: `url(${IntroImg})` }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1>Hi, I'm a Programming Enthusiast</h1>
                <p>Passionate about hackathons, web development, and creative design projects.</p><br />
                <Link to="/project" className="btn btn-primary">Explore My Work</Link>
            </div>
        </div>
    );
}

export default HeroImg3;

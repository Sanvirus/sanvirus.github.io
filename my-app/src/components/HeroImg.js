import "../styles/HeroStyle.css";
import React from 'react';
import { Link } from "react-router-dom";
import IntroImg from "../assets/Hero3.webp";

const HeroImg = () => {
    return (
        <div 
            className="hero"
            style={{ backgroundImage: `url(${IntroImg})` }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <p className="hero-subtitle">
                    <span className="highlight">Junior Web Developer</span> / Junior Graphic Designer /
                </p>
                <h1 className="hero-title">
                    "Ja kods neiet, es ieteikšu restartēt. Ja restartēšana nepalīdz, es ķeršos pie risinājuma!"
                </h1>
                <div className="hero-buttons">
                    <Link to="/project" className="btn btn-primary">Project</Link>
                    <Link to="/contact" className="btn btn-primary">Contact</Link>
                </div>
            </div>
        </div>
    );
}

export default HeroImg;

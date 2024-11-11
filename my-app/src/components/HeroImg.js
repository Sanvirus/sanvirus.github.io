import React from 'react';
import './HeroStyle.css';
import { Link } from "react-router-dom";
import IntroImg from "../assets/Hero3.webp";

const HeroImg = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url(${IntroImg})` }}>
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <p className="hero-subtitle">
                    <span className="highlight">Junior Web Developer</span> / Junior Graphic Designer
                </p>
                <h1 className="hero-title">
                    "If the code doesn't work, I'll suggest restarting. If that doesn't help, I'll find a solution!"
                </h1>
                <div className="hero-buttons">
                    <Link to="/project" className="btn btn-primary">Projects</Link>
                    <Link to="/contact" className="btn btn-secondary">Contact</Link>
                </div>
            </div>
        </div>
    );
}

export default HeroImg;

import "./HeroStyle.css";
import React from 'react'
import IntroImg from "../assets/forest2.jpeg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="mežā"/>
        </div>
        <div>
            <div className="content">
                <p>junior web developer/ Junior graphic designer</p>
                <h1>"Ja kods neiet, es ieteikšu restartēt. Ja restartēšana nepalīdz, es ķeršos pie risinājuma!"</h1>
                <div className="hero-btn">
                    <Link to="/project" className="butn">Projects</Link>
                    <Link to="/contact" className="butn">Contact</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroImg
import "./HeroStyle.css";
import React from 'react'
import IntroImg from "../assets/HeroIMG.jpeg"
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
                <h1> "Ja kods neiet, es ieteikšu restartēt. Ja restartēšana nepalīdz, es ķeršos pie risinājuma!"</h1>
                <div className="hero-btn">
                    <Link to="/project" className="btn">Projects</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroImg
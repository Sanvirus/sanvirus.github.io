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
                <p><span className="hero-p">Junior Web developer</span> /Junior graphic designer/</p>
                <h1> "Ja kods neiet, es ieteikšu restartēt. Ja restartēšana nepalīdz, es ķeršos pie risinājuma!"</h1>
                <div className="hero-btn">
                    <Link to="/project" className="btn">Projekti</Link>
                    <Link to="/contact" className="btn btn-light">Kontakti</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroImg
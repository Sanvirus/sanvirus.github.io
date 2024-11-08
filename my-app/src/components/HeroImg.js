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
                <p>HI, I'M A STUDENT</p>
                <h1>PROGRAMMER/ GRAPHICDESIGNER</h1>
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
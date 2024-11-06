import "./HeroStyle.css";
import React from 'react'
import IntroImg from "../assets/jaanni.jpeg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="jāņu bilde"/>
        </div>
        <div>
            <div className="content">
                <p>HI, I'M A STUDENT</p>
                <h1>PROGRAMMER/ GRAPHICDESIGNER</h1>
            <div>
                <Link to="/project" className="btn ">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
            </div>
        </div>
    </div>
  )
}

export default HeroImg
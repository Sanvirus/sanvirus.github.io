import { Link } from "react-router-dom"
import "./AboutContentStyle.css"
import Frame1 from "../assets/Frame001.png"
import Frame2 from "../assets/Frame002.png"
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am i?</h1>
            <p>I'm studying programming and love participating in hackathons and working on small design projects.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={Frame1} className="img" alt="my-design"/>
                </div>
                <div className="img-stack bottom">
                    <img src={Frame2} className="img" alt="my-design"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent
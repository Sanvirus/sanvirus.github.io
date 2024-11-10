import "./HeroImg3Style.css";
import React, { Component } from 'react';
import NewImage from "../assets/Hero3.webp";

class HeroImg3 extends Component {
    render() {
        return (
            <div className="hero" style={{ backgroundImage: `url(${NewImage})` }}>
                <h1>ABOUT</h1>
               <p>I'm a programming student who loves hackathons and small design projects.</p>
                </div>
        );
    }
}

export default HeroImg3;

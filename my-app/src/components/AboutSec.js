import React from 'react';
import './AboutSec.css';
import ProfilePic from '../assets/aboutIMG.jpeg';
import BackgroundImage from '../assets/aboutIMG-forest-abstract.webp';

const About = () => {
    return (
        <section className="about-section" style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <div className="profile-pic-container">
                <img src={ProfilePic} alt="Profile" className="profile-pic" />
            </div>
            <div className="text-content">
                <h2 className="about-title">Who am I?</h2>
                <p className="about-description">
                    I'm a passionate web developer and designer with a love for creative solutions and impactful designs. 
                    My goal is to blend technology with creativity to build experiences that resonate with people.
                </p>
            </div>
        </section>
    );
};

export default About;

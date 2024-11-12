import React from 'react';
import './AboutSec.css';
import ProfilePic from '../assets/prity-boy.jpeg'; // Replace with the actual path to your profile image

const AboutSec = () => {
    return (
        <section className="about-sec">
            <div className="about-content">
                <div className="profile-pic-container">
                    <img src={ProfilePic} alt="Profile" className="profile-pic" />
                </div>
                <div className="text-content">
                    <h2>Who am I?</h2>
                    <p>
                        I'm more than just a hard-working student; I'm passionate about programming, 
                        creative design, and building solutions that make an impact. With a background 
                        in both web development and design, I bring a unique blend of technical and 
                        creative skills to every project I work on.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSec;

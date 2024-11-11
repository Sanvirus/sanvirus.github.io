import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <h2>About Me</h2>
            <div className="about-content">
                <img src="/path/to/your/profile.jpg" alt="Profile" className="about-image" />
                <p>
                    I'm a passionate junior web developer and graphic designer. With a knack for clean design and functional code, I enjoy creating digital experiences that are visually engaging and user-friendly.
                </p>
            </div>
        </section>
    );
};

export default About;

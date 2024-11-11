import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Hi, I'm [Your Name]</h1>
                <p>Junior Web Developer & Graphic Designer</p>
                <button onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}>
                    See My Work
                </button>
            </div>
        </section>
    );
};

export default Hero;

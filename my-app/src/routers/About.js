import React from "react";

import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import Footer from "../components/Footer";
import ParallaxHero from "../components/ParallaxHero";
import AboutContent from "../components/AboutContent";

const About = () => {
    return( <div className="UwU">
        <Navbar />
        <HeroImg2 heading="ABOUT." text="I'm a programming student who loves hackathons and small design projects."/>
        <AboutContent />
        <ParallaxHero />
        <Footer />
    </div>
    );
}

export default About;
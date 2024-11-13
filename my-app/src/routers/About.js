import React from "react";

import Navbar from "../components/Navbar";
import HeroImg3 from "../components/HeroImg3";
import ParallaxSection from "../components/ParallaxSection";
import Skills from "../components/Skills";
import AboutSec from "../components/AboutSec";
import Footer from "../components/Footer";


const About = () => {
    return( <div>
        <Navbar />
        <HeroImg3 />
        <ParallaxSection />
        <Skills />
        <AboutSec />
        <Footer />
    </div>
    );
}

export default About;
import React from "react";

import Navbar from "../components/Navbar";
import HeroImg3 from "../components/HeroImg3";
import Footer from "../components/Footer";
import ParallaxSection from "../components/ParallaxSection";
import AboutSec from "../components/AboutSec";


const About = () => {
    return( <div>
        <Navbar />
        <HeroImg3 />
        <ParallaxSection />
        <AboutSec />
        <Footer />
    </div>
    );
}

export default About;
import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Skills from "../components/Skills";
import AboutSec from "../components/AboutSec";
import Footer from "../components/Footer";

const Home = () => {
    return <div>
      <Navbar />  
      <HeroImg />
      <Skills />
      <AboutSec />
      <Footer />
    </div>;
};

export default Home;
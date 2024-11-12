import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import AboutSec from "../components/AboutSec";

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
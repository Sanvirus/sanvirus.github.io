import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

const Home = () => {
    return <div>
      <Navbar />  
      <HeroImg />
      <Skills />
      <Footer />
    </div>;
};

export default Home;
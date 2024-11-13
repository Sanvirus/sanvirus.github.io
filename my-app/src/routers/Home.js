import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Skills from "../components/Skills";
import AboutSec from "../components/AboutSec";
import ContactForm from '../components/ContactForm.js';
import Footer from "../components/Footer";

const Home = () => {
    return <div>
      <Navbar />  
      <HeroImg />
      <Skills />
      <AboutSec />
      <ContactForm />
      <Footer />
    </div>;
};

export default Home;
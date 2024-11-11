<<<<<<< HEAD
import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
import Projects from '../components/Projects'; // New component
import Skills from '../components/Skills';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroImg />
            <Projects />
            <Skills />
            <Footer />
        </>
    );
=======
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
>>>>>>> parent of f7733d0 (portfolio 001)
};

export default Home;

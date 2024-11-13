import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);

    // Toggle background color on scroll
    const changeColor = () => {
        setColor(window.scrollY >= 100);
    };

    useEffect(() => {
        window.addEventListener("scroll", changeColor);
        return () => window.removeEventListener("scroll", changeColor);
    }, []);

    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/" className="logo">
                <span>Sannijs R. Bondars</span>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/project">Project</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (
                    <FaTimes size={30} style={{ color: "#fff" }} />
                ) : (
                    <FaBars size={30} style={{ color: "#fff" }} />
                )}
            </div>
        </div>
    );
};

export default Navbar;

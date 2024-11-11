import "./FooterStyle.css"

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    <div>
                        <p>Bajāru iela 3,</p>
                        <p>Rīga</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        +371 20-639-443
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        sannijs.bondars123@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>Who I am</h4>
                <p>I'm an RTK student learning programming, and I love working on simple design side hustles. For the most part, I'm a passionate learner.</p>
                <div className="social">
                    <a href="https://www.facebook.com/yourprofile" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    </a>
                    <a href="https://github.com/yourusername" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    </a>
                    <a href="https://www.instagram.com/yourprofile" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer

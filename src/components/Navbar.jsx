import React from 'react'
import { FaInstagram,FaLinkedin,FaFacebook } from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi"
import "../css/navbar.css"
export default function Navabar () {
    return (
        <>
        <div className="nav">
            <div className="logo"><h2><span>P</span>RADEEP <span>K</span>UMAR</h2></div>
            <div className="menu-link">
                <ul>
                    <li>About Me</li>
                    <li>My Journey</li>
                    <li>My Projects</li>
                    <li>Contact Me</li>
                </ul>
            </div>
            <div className="social-link">
                <ul>
                    <li><FaInstagram/></li>
                    <li><FaLinkedin/></li>
                    <li><FaFacebook/></li>
                </ul>
            </div>
            <div className="mobile-menu-link">
                <GiHamburgerMenu className='hamburger-menu'/>
            </div>
        </div>
        </>
    )
}
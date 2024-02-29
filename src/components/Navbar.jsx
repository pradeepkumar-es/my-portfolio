import React, { useState } from 'react'
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi"
import { RxCross1 } from "react-icons/rx"
import "../css/navbar.css"
export default function Navabar() {
    const [openMenu, setOpenMenu] = useState(true);
    function togglemenu() {
        setOpenMenu(!openMenu);
    }
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
                        <li><a href="https://www.instagram.com/pradeepkumar.es/"><FaInstagram /></a></li>
                        <li><a href="https://www.linkedin.com/in/pradeepkumar-es/"><FaLinkedin /></a></li>
                        <li><a href="https://www.facebook.com/pradeepkumar.es/"><FaFacebook /></a></li>
                    </ul>
                </div>
                <div className="mobile-menu">
                    <GiHamburgerMenu onClick={togglemenu} className={openMenu ? '' : 'deactivate-hamburgerMenu'} />
                    <div className="showMenuPart">
                    <div className="cross"><RxCross1 onClick={togglemenu} className={openMenu ? 'activate-cross' : 'crossStyle'} /></div>
                    <ul className={openMenu ? 'activate-mobileNavbar' : 'mobileMenuStyle'}>
                        <li>About Me</li>
                        <li>My Journey</li>
                        <li>My Projects</li>
                        <li>Contact Me</li>
                    </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
import React from "react";
import Navabar from "./Navabar";
import AboutMe from './AboutMe'
import Projects from "./Projects";
import MyJourney from "./MyJourney";
import Contact from "./Contact";
import pradeepProfile from "../images/pradeep-pic-nobg.png"
import webIcon from "../images/web-icon.png"
import linkedinIcon from "../images/linkedin-icon.png"
import mailIcon from "../images/mail-icon.png"
import '../css/home.css'
export default function Home() {
    return (
        <>
            <Navabar />
            <div className="introduction">
                <div className="about">
                    <h3>WEB DEVELOPER & DESIGNER</h3>
                    <h1>Elevating Brands Through Innovative Web Solutions</h1>
                    <p>My Mission is to create Engaging, Fast, and Loving Websites for Clients and User </p>
                    <div className="message-me">
                        <p>Contact Me</p>
                        <div className="social-icons">
                            <img className="web" src={webIcon} alt="contact through website" />
                            <img className="linkedin" src={linkedinIcon} alt="contact through linkedin" />
                            <img className="email" src={mailIcon} alt="contact through Email" />
                        </div>
                    </div>
                </div>
                <div className="profile">
                    <img className="pradeep-profile" src={pradeepProfile} alt="Profile of Pradeep" />
                </div>
            </div>
            <AboutMe />
            <Projects />
            <MyJourney />
            <Contact />
            <Navabar />
        </>
    )
}
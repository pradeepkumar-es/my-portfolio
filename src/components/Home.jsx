import React from "react";
import AboutMe from './AboutMe'
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Highlights from './Highlights'
import Certifications from "./Certifications";
import pradeepProfile from "../images/pradeep-pic-nobg.png"
import webIcon from "../images/web-icon.png"
import linkedinIcon from "../images/linkedin-icon.png"
import mailIcon from "../images/mail-icon.png"
import '../css/home.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsDashLg } from "react-icons/bs";
import { certificates } from './data'
export default function Home() {

    return (
        <>
            <div className="home">
                <div className="introduction">
                    <div className="about">
                        {/* <h2>Hello, I'm</h2>
                    <h1> Pradeep</h1> */}
                        <h3>WEB DEVELOPER & DESIGNER<div className="shdash"></div></h3>
                        <h1>Elevating Brands Through Innovative Web Solutions</h1>
                        <p>My Mission is to create Engaging, Fast, and Loving Websites for Clients and User </p>
                        <div className="message-me">

                            <a href="mailto:pradeepkumariitk22@gmail.com?subject=Contact For &body=Hi Pradeep,%20I"><p>Contact Me</p></a>
                            {/* <div className="social-icons"> */}
                            {/* <img className="web" src={webIcon} alt="contact through website" /> */}
                            {/* <img className="linkedin" src={linkedinIcon} alt="contact through linkedin" /> */}
                            {/* <img className="email" src={mailIcon} alt="contact through Email" /> */}
                            {/* <IoIosArrowRoundForward className="arrow"/> */}

                            {/* <a href="mailto:pradeepkumariitk22@gmail.com?subject=Contact For &body=Hi Pradeep,%20I"><IoMdMail className="email"/></a> */}
                            {/* <a href="https://www.linkedin.com/in/pradeepkumar-es/"><FaLinkedin className="linkedin" /></a> */}
                            {/* <a href="#"><FaGlobe className="web"/></a> */}
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="profile">
                        <img className="pradeep-profile" src={pradeepProfile} alt="Profile of Pradeep" />
                    </div>
                </div>
                <div className="highlights">
                    <Highlights />
                </div>
                <div className="certification">
                    <h1>Certifications</h1>
                    <div className="certificates">
                    {
                        certificates.map((data) => {
                            return(
                            <Certifications 
                            cimg ={data.cimg}
                            cname ={data.name}
                            />
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </>
    )
}
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
import { PiCertificateBold } from 'react-icons/pi'
import { GiJourney } from "react-icons/gi";
import { certificates, myjourney } from './data'
import { RxSize } from "react-icons/rx";
import MYJourney from "./MyJourney";
// import Navabar from "./Navbar";
// import MovingElement from "./MovingElement";
export default function Home() {

    return (
        <>
            <div className="home">
                <div className="introduction">
                    <div  className="about">
                        {/* <h2>Hello,  I'm</h2>
                    <h1> Pradeep</h1> */}
                        <h3>WEB DEVELOPER & DESIGNER<div className="shdash"></div></h3>
                        <h1>Elevating Brands Through Innovative Web Solutions</h1>
                        {/* <h1 id="aboutme">Elevating Brands Through Innovative Web Solutions</h1> */}
                        <p >Hey! I am Pradeep, currently pursuing my undergraduate studies at the IIT, Kanpur. My academic journey has produced deep appreciation for innovation and technology's transformative power. As a keen interest in technology to solve real-world challenges, I am deeply immersed in the world of web development. </p>
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
                <div className="journey">
                    <h1><GiJourney style={{ width: "2.5rem", height: "2.5rem" }} /> &nbsp;Academic Journey</h1>
                    <div className="journeySection">
                        <div className="path">
                            {/* <MovingElement/> */}
                        </div>
                        <div className="jcard">
                            {
                                myjourney.map((data) => {
                                    return (
                                        <MYJourney
                                            jlogo={data.logo}
                                            jname={data.name}
                                            jdetail={data.detail}
                                            jperiod={data.period}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="myproject">
                {/* <div id="projects" className="myproject"> */}
                  {/* <p>Projects</p> */}
                </div>
                <div className="certification">
                    <h1><PiCertificateBold style={{ width: "2.5rem", height: "2.5rem" }} /> &nbsp; Certifications</h1> {/*&nbsp; => non breaking space */}
                    <div className="certificates">
                        {
                            certificates.map((data) => {
                                return (
                                    <Certifications
                                        cimg={data.cimg}
                                        cname={data.name}
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
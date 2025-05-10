import React from "react";
import AboutMe from './AboutMe'
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Highlights from './Highlights'
import Certifications from "./Certifications";
import pradeepProfile from "../images/pradeep-pic.jpg"
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
import { IoSchool } from "react-icons/io5";
import { certificates, myeducation, experience } from './data'
import { RxSize } from "react-icons/rx";
import MYJourney from "./MyJourney";
import { projects } from "./data";
import ProjectCard from "./ProjectCard";
import { GoProjectSymlink } from "react-icons/go";
import { GrUserExpert } from "react-icons/gr";
import { MdWorkHistory } from "react-icons/md";
import { Link } from "react-router-dom";
// import Navabar from "./Navbar";
// import MovingElement from "./MovingElement";
export default function Home() {
    // const maxProjectToShow = 2;
    // const projectToShow = projects.slice(0, maxProjectToShow);

    // Duplicate the projects array to create an infinite loop effect
    const allProjects = [...projects, ...projects];
    console.log(allProjects)
    return (
        <>
            <div className="home">
                <div className="introduction">
                    <div className="about">
                        {/* <h2>Hello,  I'm</h2>
                    <h1> Pradeep</h1> */}
                        <h1>Bringing Visions To Life Through Code</h1>
                        <img id="pradeep-profile" src={pradeepProfile} alt="Profile of Pradeep" />
                        <h3 className="name">Pradeep Kumar<div className="shdash"></div></h3>
                        {/* <h1 id="aboutme">Elevating Brands Through Innovative Web Solutions</h1> */}
                        <p >Pre-final year undergrad at IIT Kanpur (BSBE) with a deep passion for web and software development. I blend clean code with thoughtful design to build responsive, user-friendly experiences. Currently exploring backend dev & DSA. Let’s build something impactful!</p>
                        {/* <div className="message-me"> */}

                        {/* <a href="mailto:pradeepkumariitk22@gmail.com?subject=Contact For &body=Hi Pradeep,%20I"><p>Contact Me</p></a> */}
                        {/* <div className="social-icons"> */}
                        {/* <img className="web" src={webIcon} alt="contact through website" /> */}
                        {/* <img className="linkedin" src={linkedinIcon} alt="contact through linkedin" /> */}
                        {/* <img className="email" src={mailIcon} alt="contact through Email" /> */}
                        {/* <IoIosArrowRoundForward className="arrow"/> */}

                        {/* <a href="mailto:pradeepkumariitk22@gmail.com?subject=Contact For &body=Hi Pradeep,%20I"><IoMdMail className="email"/></a> */}
                        {/* <a href="https://www.linkedin.com/in/pradeepkumar-es/"><FaLinkedin className="linkedin" /></a> */}
                        {/* <a href="#"><FaGlobe className="web"/></a> */}
                        {/* </div> */}
                        {/* </div> */}
                    </div>
                    <div className="profile">
                        <img className="pradeep-profile" src={pradeepProfile} alt="Profile of Pradeep" />
                    </div>
                </div>
                <div className="highlights">
                    <Highlights />
                </div>
                <div className="journey">
                    <h1><MdWorkHistory style={{ width: "2.5rem", height: "2.5rem" }} /> &nbsp;Work Experience</h1>
                    <div className="journeySection">
                        <div className="path">
                            {/* <MovingElement/> */}
                        </div>
                        <div className="jcard">
                            {
                                experience.map((data,index) => {
                                    return (
                                        <MYJourney
                                            key={index}
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
                <div className="journey">
                    <h1><IoSchool style={{ width: "2.5rem", height: "2.5rem" }} /> &nbsp;Education</h1>
                    <div className="journeySection">
                        <div className="path">
                            {/* <MovingElement/> */}
                        </div>
                        <div className="jcard">
                            {
                                myeducation.map((data,index) => {
                                    return (
                                        <MYJourney
                                            key={index}
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
                <div className="skills">
                    <h1>< GrUserExpert style={{ width: "2.5rem", height: "2.5rem" }} />&nbsp;Skills</h1>
                    <div className="skillContainer">
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>Javascript</div>
                        <div>Typescript</div>
                        <div>ReactJS</div>
                        <div>NextJS</div>
                        <div>Bootstrap</div>
                        <div>Firebase</div>
                        <div>Google Cloud</div>
                        <div>jQuery</div>
                        <div>Java</div>
                        <div>NodeJS</div>
                        <div>ExpressJS</div>
                        <div>MongoDB</div>
                        <div>Tailwind CSS</div>
                    </div>
                </div>
                <div className="myproject">
                    <h1><GoProjectSymlink style={{ width: "2.5rem", height: "2.5rem" }} />&nbsp;Projects Prototype</h1>
                    <div id="projects" className="myprojects">

                        {
                            // projectToShow.map((data) => {
                            projects.map((data,index) => {
                                return (
                                    <>
                                        <ProjectCard
                                            key={index}
                                            primage={data.image}
                                            prname={data.name}
                                            prlink={data.link}
                                            prtech={data.tech}
                                            prdetail={data.detail}
                                        />
                                    </>
                                )
                            })
                        }
                        {
                            // projectToShow.map((data) => {
                            projects.map((data,index) => {
                                return (
                                    <>
                                        <ProjectCard
                                            key={index}
                                            primage={data.image}
                                            prname={data.name}
                                            prlink={data.link}
                                            prtech={data.tech}
                                            prdetail={data.detail}
                                        />
                                    </>
                                )
                            })
                        }
                    </div>
                    {/* <button className="load-project" >
                        <Link to='/projects'>Load More Projects</Link> </button> */}
                </div>
                 {/*&nbsp; => non breaking space */}
                {/* <div className="certification">
                    <h1><PiCertificateBold style={{ width: "2.5rem", height: "2.5rem" }} /> &nbsp; Certifications</h1>
                    <div className="certificates">
                        {
                            certificates.map((data,index) => {
                                return (
                                    <Certifications
                                        key={index}
                                        cimg={data.cimg}
                                        cname={data.name}
                                    />
                                )
                            })
                        }
                    </div>
                </div>  */}
            </div>
        </>
    )
}
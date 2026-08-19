import { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { RxCross1} from "react-icons/rx"
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import "../css/navbar.css"
import {useLocation} from 'react-router-dom'
import { NavLink } from 'react-router-dom'; /*NavLink is a special version of the Link component from 
react-router-dom that can apply styling based on whether the link is active (i.e., the current URL matches the link's target URL). */
// import { Link } from 'react-router-dom';
export default function Navabar() {
    const [openMenu, setOpenMenu] = useState(true);
    const [mode, setMode] =useState(true);
    const[style,setStyle] =useState("dark-Mode")
    function togglemenu() {
        setOpenMenu(!openMenu);
    }
    function changeMode () {
        setMode(!mode);
        {mode?setStyle("light-Mode"):setStyle("dark-Mode")}
    }
    useEffect(()=>{
     document.body.className=style;
        },[style]
    )
    const locationObject = useLocation();
    // console.log(locationObject.hash)  //current #hash
     return (
        <>
            <div className="nav">
                {/* <div className="logo"><h2><span>M</span>Y <span>P</span>ORTFOLIO</h2></div> */} {/* using span we increase the size of letter */}
                <div className="logo"><h2>Pradeep Kumar</h2></div> {/* using styling and applying font-variant:small-caps to convert to uppercase and converted letter will have lower font size then original uppercase letter*/}
                <div className="menu-link">
                    <ul>
                        <li> <NavLink className={({isActive})=>(isActive?'active-link':'home')} to="/">Home</NavLink> </li>
                        <li> <NavLink to="/#about" className={locationObject.hash==="#about"?'active-link':''}>About</NavLink> </li>
                        <li><NavLink to="/#skills" className={locationObject.hash==="#skills"?'active-link':''}>Skills</NavLink></li>
                        <li><NavLink to="/#experience" className={locationObject.hash==="#experience"?'active-link':''}>Experience</NavLink></li>
                        <li><NavLink to="/#education" className={locationObject.hash==="#education"?'active-link':''}>Education</NavLink></li>
                        {/* <li> <a href='#aboutme'>About Me</a> </li> */}
                        {/* <li><NavLink className={({isActive})=>(isActive?'active-link':'')} to="/projects">My Projects</NavLink></li> */}
                        <li><NavLink className={locationObject.hash==="#myproject"?'active-link':''} to="/#myproject">My Projects</NavLink></li>
                        {/*NavLink only care about pathname not hash part, so if link is /#myproject then it is active and also if likn is at only /, it will show still active to myproject  also. NavLink treat /#myproject as /
                          solution is use: own logic , using useLocation() react-router hook
                        */}
                        <li><NavLink className={locationObject.hash==="#resume"?'active-link':''} to="/#resume">Resume</NavLink></li>
                        {/* <li><a href="#projects">My Projects</a></li> */}
                        {/* <li><NavLink className={({isActive})=>(isActive? 'active-link':'')} to="/contact">Contact Me</NavLink></li> */}
                        <li><NavLink className={locationObject.hash ==="#contact"?'active-link':''} to="/#contact">Contact Me</NavLink></li>
                    </ul>
                </div>
                <button type="button" title='Toggle The Mode' className="mode" onClick={changeMode} aria-label="Toggle light and dark mode"> {/* Title attribute will show extra information about element tag on hover */}
                    {mode?<MdOutlineLightMode className='lightMode' />:<MdOutlineDarkMode className='darkMode' />}
                </button>
                
                <div className="mobile-menu">
                    <button type="button" className={openMenu ? 'hamburgerMenu' : 'deactivate-hamburgerMenu'} onClick={togglemenu} aria-label="Open navigation menu">
                        <GiHamburgerMenu />
                    </button>
                    {!openMenu && <div className="showMenuPart">
                        <div className="mobileMenuPanel">
                            <button type="button" className="cross" onClick={togglemenu} aria-label="Close navigation menu"><RxCross1 /></button>
                            <ul className="mobileMenuStyle">
                                <li><NavLink onClick={togglemenu} to="/">Home</NavLink></li>
                                <li><NavLink onClick={togglemenu} to="/#about">About</NavLink></li>
                                <li><NavLink onClick={togglemenu} to="/#skills">Skills</NavLink></li>
                                <li><NavLink onClick={togglemenu} to="/#experience">Experience</NavLink></li>
                                <li><NavLink onClick={togglemenu} to="/#education">Education</NavLink></li>
                                <li><NavLink onClick={togglemenu} to="/#myproject">My Projects</NavLink></li>
                                <li><NavLink onClick={togglemenu} to="/#resume">Resume</NavLink></li>
                                <li><NavLink onClick={togglemenu} to="/#contact">Contact</NavLink></li>
                            </ul>
                        </div>
                    </div>}
                </div>
            </div>
        </>
    )
}
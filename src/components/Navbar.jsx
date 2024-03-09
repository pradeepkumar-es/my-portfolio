import React, { useEffect, useState } from 'react'
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi"
import { RxCross1, RxSize } from "react-icons/rx"
import { MdHeight, MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import "../css/navbar.css"
import { Link } from 'react-router-dom';
export default function Navabar() {
    const [openMenu, setOpenMenu] = useState(true);
    const [mode, setMode] =useState(true);
    const[style,setStyle] =useState("light-Mode")
    function togglemenu() {
        setOpenMenu(!openMenu);
    }
    function changeMode () {
        setMode(!mode);
        {mode?setStyle("dark-Mode"):setStyle("light-Mode")}
    }
    useEffect(()=>{
     document.body.className=style;
        },[style]
    )
     return (
        <>
            <div className="nav">
                <div className="logo"><h2><span>P</span>RADEEP <span>K</span>UMAR</h2></div>
                <div className="menu-link">
                    <ul>
                        <li> <Link className='home' to="/">Home</Link> </li>
                        <li> <Link to="/aboutme">About Me</Link> </li>
                        <li><Link to="/projects">My Projects</Link></li>
                        <li><Link to="/contact">Contact Me</Link></li>
                    </ul>
                </div>
                <div className="mode" onClick={changeMode}>
                    {mode?<MdOutlineDarkMode className='lightMode' />:<MdOutlineLightMode className='darkMode' />}
                </div>
                <div className="social-link">
                    <ul>
                        <li><a href="https://www.instagram.com/pradeepkumar.es/" target='_blank'><FaInstagram /></a></li>
                        <li><a href="https://www.linkedin.com/in/pradeepkumar-es/" target='_blank' ><FaLinkedin /></a></li>
                        <li><a href="https://www.facebook.com/pradeepkumar.es/" target='_blank' ><FaFacebook /></a></li>
                    </ul>
                </div>
                <div className="mobile-menu">
                    <GiHamburgerMenu onClick={togglemenu} className={openMenu ? 'hamburgerMenu' : 'deactivate-hamburgerMenu'} />
                    <div className={openMenu?"none":"showMenuPart"}>
                        <div className="cross"><RxCross1 onClick={togglemenu} className={openMenu ? 'activate-cross' : 'crossStyle'} /></div>
                        <ul className={openMenu ? 'activate-mobileNavbar' : 'mobileMenuStyle'}>
                             <Link to="/"><li onClick={togglemenu} className={openMenu?"hideMenuPart":"none"} >Home</li></Link>                     
                             <Link to="/aboutme"><li onClick={togglemenu} className={openMenu?"hideMenuPart":"none"} >About Me</li></Link>
                            <Link to="/projects"><li onClick={togglemenu} className={openMenu?"hideMenuPart":"none"}>My Projects</li></Link>
                            <Link to="/contact"><li onClick={togglemenu} className={openMenu?"hideMenuPart":"none"}>Contact Me</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { RxCross1, RxSize } from "react-icons/rx"
import { MdHeight, MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import "../css/navbar.css"
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
     return (
        <>
            <div className="nav">
                {/* <div className="logo"><h2><span>M</span>Y <span>P</span>ORTFOLIO</h2></div> */} {/* using span we increase the size of letter */}
                <div className="logo"><h2>Pradeep Kumar</h2></div> {/* using styling and applying font-variant:small-caps to convert to uppercase and converted letter will have lower font size then original uppercase letter*/}
                <div className="menu-link">
                    <ul>
                        <li> <NavLink className={({isActive})=>(isActive?'active-link':'home')} to="/">Home</NavLink> </li>
                        {/* <li> <Link to="/aboutme">About Me</Link> </li> */}
                        {/* <li> <a href='#aboutme'>About Me</a> </li> */}
                        <li><NavLink className={({isActive})=>(isActive?'active-link':'')} to="/projects">My Projects</NavLink></li>
                        {/* <li><a href="#projects">My Projects</a></li> */}
                        <li><NavLink className={({isActive})=>(isActive? 'active-link':'')} to="/contact">Contact Me</NavLink></li>
                    </ul>
                </div>
                <div title='Toggle The Mode' className="mode" onClick={changeMode}> {/* Title attribute will show extra information about element tag on hover */}
                    {mode?<MdOutlineLightMode className='lightMode' />:<MdOutlineDarkMode className='darkMode' />}
                </div>
                
                <div className="mobile-menu">
                    <GiHamburgerMenu onClick={togglemenu} className={openMenu ? 'hamburgerMenu' : 'deactivate-hamburgerMenu'} />
                    <div className={openMenu?"none":"showMenuPart"}>
                        <div className="cross"><RxCross1 onClick={togglemenu} className={openMenu ? 'activate-cross' : 'crossStyle'} /></div>
                        <ul className={openMenu ? 'activate-mobileNavbar' : 'mobileMenuStyle'}>
                             <NavLink to="/"><li onClick={togglemenu} className={openMenu?"hideMenuPart":"none"} >Home</li></NavLink>                     
                             {/* <Link to="/aboutme"><li onClick={togglemenu} className={openMenu?"hideMenuPart":"none"} >About Me</li></Link> //correct versio */}
                             {/* <a href='#aboutme'><li onClick={togglemenu} className={openMenu?"hideMenuPart":"none"} >About Me</li></a> */}
                            <NavLink to="/projects"><li onClick={togglemenu} className={openMenu?"hideMenuPart":"none"}>My Projects</li></NavLink>
                            {/* <a href="#projects"><li onClick={togglemenu} className={openMenu?"hideMenuPart":"none"}>My Projects</li></a> */}
                            <NavLink to="/contact"><li onClick={togglemenu} className={openMenu?"hideMenuPart":"none"}>Contact Me</li></NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
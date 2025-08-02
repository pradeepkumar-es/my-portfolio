import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import '../css/projectcard.css'
export default function ProjectCard (props) {
    return (
        <div className="ProjectCard" >
             <img className="image" src={props.primage} alt={props.prname} />
            {/* <div className="project">
                <iframe src={props.prlink} frameborder="0"></iframe>
            </div> */}
            <h5 className="tech pce">{props.prtech}</h5>
            <h3 className="projectname pce" >{props.prname}</h3>
            <p className="details pce" >{props.prdetail}</p>
            <div className="icons">
                <a title="Github Link" href={props.prgitlink} target="_blank"><FaGithub/></a>
                <a title="Live Link" href={props.prlink} target="_blank"><FaEye/></a>
            </div>
            {/* <a className="button" href={props.prlink} target="_blank">View in Full Screen</a> */}
        </div>
    )
}
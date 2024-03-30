import React from "react";
import '../css/projectcard.css'
export default function ProjectCard (props) {
    return (
        <div className="ProjectCard">
            <div className="projectname"><h4>{props.prname}</h4></div>
            {/* <div className="projectlink"><img src={props.primage} alt={props.prname} /></div> */}
            <div className="project">
                <iframe src={props.prlink} frameborder="0"></iframe>
            </div>
            <div className="button">
                <a href={props.prlink} target="_blank">View in Full Screen</a>
            </div>
        </div>
    )
}
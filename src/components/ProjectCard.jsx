import React from "react";
import '../css/projectcard.css'
export default function ProjectCard (props) {
    return (
        <a className="ProjectCard" href={props.prlink}>
             <img className="image" src={props.primage} alt={props.prname} />
            {/* <div className="project">
                <iframe src={props.prlink} frameborder="0"></iframe>
            </div> */}
            <h5 className="tech pce">{props.prtech}</h5>
            <h3 className="projectname pce" >{props.prname}</h3>
            <p className="details pce" >{props.prdetail}</p>
            {/* <a className="button" href={props.prlink} target="_blank">View in Full Screen</a> */}
        </a>
    )
}
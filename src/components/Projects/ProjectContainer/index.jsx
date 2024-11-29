import React from "react";
import './ProjectContainer.css'


const ProjectContainer = (props) => {
    return(
        
        <div className="Projectmain">
            <h1 id="text">{props.text}</h1>
            <p>{props.desc}</p>
            <div className="ProjectContainer">
                <img src={props.src} alt={props.alt} />
            
            </div>
            <div className="Code">
                <a href="">Deploy</a>
                <a href="">&lt;/&gt;</a>
            </div>
        </div>

        
    )
}
export default ProjectContainer
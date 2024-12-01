import React from "react";
import './ProjectContainer.css'
import useScrollReveal from "../../useScrollReveal";


const ProjectContainer = (props) => {

    const [ref, isVisible] = useScrollReveal();

    return(
        
        <div ref={ref} className={`reveal ${isVisible ? 'reveal_visible' : ''}`} >
            <div className="Projectmain">
                <h1 id="text">{props.text}</h1>
                <p>{props.desc}</p>
                <div className="ProjectContainer">
                    <img src={props.src} alt={props.alt} />
            
                </div>
                <div className="Code">
                    <a href={props.deploy} target="_blank">Deploy</a>
                    <a href={props.code} target="_blank">&lt;/&gt;</a>
                </div>
            </div>
        </div>

        
    )
}
export default ProjectContainer
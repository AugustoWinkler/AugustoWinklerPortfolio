import React from "react";
import './Projects.css'
import ProjectContainer from "./ProjectContainer";
import AltColor from "../AltColor";

const Projects = () =>{
    return(

        <div className="Projects-main">
            <h1>
            <AltColor color={'var(--SecondaryColor)'}> My</AltColor> Projects</h1>
            <div className="Projects">
                <ProjectContainer src ='AW-COMP.png' text ='Components Lib' desc = 'A Simple Library of Components'/>
                <ProjectContainer src ='SBH.png' text ='Schiavi Biker House' desc = 'Harley-Davidson Mechanic Shop'/>
                <ProjectContainer src ='AWLawyer.png' text ='Lawyer' desc = 'Still working on it'/>
                <ProjectContainer src ='AC.png' text ='AquaCeleste' desc = 'Still working on it'/>
            </div>
        </div>
     
    )
}  
export default Projects
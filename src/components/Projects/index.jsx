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
                <ProjectContainer src ='AW-COMP.png' text ='Components Lib' desc = 'A Simple Library of Components' deploy = 'https://aw-comp-git-main-augustowinklers-projects.vercel.app/' code = 'https://github.com/AugustoWinkler/AWComp/tree/main/AWComp'/>
                <ProjectContainer src ='SBH.png' text ='Schiavi Biker House' desc = 'Harley-Davidson Mechanic Shop' deploy = 'https://schiavi-biker-house.vercel.app' code = 'https://github.com/AugustoWinkler/SchiaviBikerHouse'/>
                <ProjectContainer src ='AWLawyer.png' text ='Lawyer' desc = 'Still working on it' deploy = 'https://aw-lawyer.vercel.app' code = 'https://github.com/AugustoWinkler/AWLawyer'/>
                <ProjectContainer src ='AC.png' text ='AquaCeleste' desc = 'Still working on it' deploy = 'https://aqua-celeste.vercel.app' code = 'https://github.com/AugustoWinkler/AquaCeleste'/>
            </div>
        </div>

     
    )
}  
export default Projects
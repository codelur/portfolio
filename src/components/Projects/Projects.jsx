import "./Projects.css"

import React from "react";
import texts from '../../utils/texts';
import LanguageContext from "../../contexts/languageContext";
import ProjectsCard from "../ProjectsCard/ProjectsCard";
import projects from "../../utils/projects";

function Projects(){
    const { language } = React.useContext(
        LanguageContext
      );
    return(
        <div className="projects" id="projects">
            <div className="projects__title title">{texts[language].projects}</div>
            <hr className="split"></hr>
            <div className="projects__grid-container">
                {projects[language].map((item) => (
                    <ProjectsCard key={item.id} title={item.title} url={item.url} description={item.description} image={item.image}/>
                ))}
            </div>
        </div>
    )
}

export default Projects;
import "./Experience.css";

import React from "react";
import texts from '../../utils/texts';
import experience from "../../utils/experience";
import LanguageContext from "../../contexts/languageContext";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

function Experience(){
    const { language } = React.useContext(
        LanguageContext
      );

    
      
    return(
        <div className="experience" id="experience">
            <div className="experience__title title">{texts[language].experience}</div>
            <hr className="split"></hr>
            {experience[language]
                .filter((item) => item.company.trim() !== "")
                .map((item) => (
                    <ExperienceCard key={item.id} company={item.company} 
                    position={item.position}
                    details={item.details} />
                ))}
                   </div>
    );
}

export  default Experience;
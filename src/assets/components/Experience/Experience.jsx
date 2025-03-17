import "./Experience.css";

import React from "react";
import texts from '../../utils/texts';
import experience from "../../utils/experience";
import LanguageContext from "../../../contexts/languageContext";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

function Experience(){
    const { language } = React.useContext(
        LanguageContext
      );

    
      
    return(
        <div className="experience" id="experience">
            <div className="experience__title title">{texts[language].experience}</div>
            <hr className="split"></hr>
            {experience
                .filter((item) => item.company.trim() !== "")
                .map((item, index) => (
                    <ExperienceCard key={index} company={item.company} 
                    position={item.position}
                    details={item.details} />
                ))}
                   </div>
    );
}

export  default Experience;
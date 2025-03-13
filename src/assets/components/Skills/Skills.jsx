import "./Skills.css";

import React from "react";
import texts from '../../utils/texts';
import LanguageContext from "../../../contexts/languageContext";
import skills from "../../utils/skills";
import SkillCard from "../SkillCard/SkillCard";

function Skills(){
    const { language } = React.useContext(
        LanguageContext
      );
      
    return(
        <div className="skills" id="skills">
            <div className="skills__title title">{texts[language].skills}</div>
            <div className="skills__grid-container">
                {skills.map(item => (
                    <SkillCard key={item.id} skill={item.name} value={item.value} />
                ))}
            </div>
        </div>
    );
}

export  default Skills;
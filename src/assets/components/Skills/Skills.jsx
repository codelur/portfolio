import "./Skills.css";

import React from "react";
import texts from '../../utils/texts';
import LanguageContext from "../../../contexts/languageContext";
import skills from "../../utils/skills";
import SkillCard from "../SkillCard/SkillCard";
import skillIcons from "../../utils/skillIcons";

function Skills(){
    const { language } = React.useContext(
        LanguageContext
      );
      
    return(
        <div className="skills" id="skills">
            
            <div className="skills__title title">{texts[language].skills}</div>
            <hr className="split"></hr>
            <div className="skills__tools">
                <p align="center" className="skills__icons">
                    {skillIcons.map((skill) => (
                        <a key={skill.id} href={skill.url} target="_blank" rel="noreferrer">
                            <img className="skills__logo" src={skill.src} alt={skill.name} width="40" height="40" />
                        </a>
                    ))}
                </p>
            </div> 
            <div className="skills__grid-container">
                {skills.map((item, index) => (
                    <React.Fragment key={index}>
                        <SkillCard skill={item.name} value={item.value} />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export  default Skills;
import "./Skills.css";
import { useState, useEffect  } from 'react'
import React from "react";
import texts from '../../utils/texts';
import LanguageContext from "../../contexts/languageContext";
import skills from "../../utils/skills";
import SkillCard from "../SkillCard/SkillCard";
import skillIcons from "../../utils/skillIcons";

function Skills(){
    const { language } = React.useContext(
        LanguageContext
      );

    const [showAll, setShowAll] = useState(false);
    const visibleSkills = showAll ? skills : skills.slice(0, 8);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 500); 

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 500);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      
    return(
        <div className="skills" id="skills">
            
            <div className="skills__title title">{texts[language].skills}</div>
            <hr className="split"></hr>
            <div className="skills__tools">
                <p align="center" className="skills__icons">
                    {skillIcons.map((skill, index) => (
                        <a data-language={skill.name}  key={index} href={skill.url} target="_blank" rel="noreferrer">
                            <img className="skills__logo" src={skill.src} alt={skill.name} width="40" height="40" />
                        </a>
                    ))}
                </p>
            </div> 

            {!isMobile && 
                <div className="skills__grid-container">
                    {skills.map((item) => (
                        <React.Fragment key={item.id}>
                            <SkillCard skill={item.name} value={item.value} />
                        </React.Fragment>
                    ))}
                </div>
            }

            {isMobile && 
            
            <div className="skills__grid-container">
                {visibleSkills.map((item) => (
                    <React.Fragment key={item.id}>
                    <SkillCard skill={item.name} value={item.value} />
                    </React.Fragment>
                ))}

                {skills.length > 8 && !showAll && (
                    <button className="skills__grid-button" onClick={() => setShowAll(true)}>
                        Show All ({skills.length - 8} more)
                    </button>
                )}

                {skills.length > 8 && showAll && (
                    <button className="skills__grid-button" onClick={() => setShowAll(false)}>Show Less</button>
                )}
            </div>
            }
        </div>
            
    );
}

export  default Skills;
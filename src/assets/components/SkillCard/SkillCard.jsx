import "./SkillCard.css"

import React from "react";
import texts from '../../utils/texts';
import LanguageContext from "../../../contexts/languageContext";

function SkillCard({skill, value}){

    const { language } = React.useContext(
        LanguageContext
      );

    const description = value >=0 && value<=50 ? texts[language].familiar :
            (value >50 && value<=70? texts[language].intermediate:
                (value >70 && value<90? texts[language].advanced: 
                    texts[language].professional));

    return (
        <div className="skillcard">
            <div className="skillcard__text">
                <span className="skillcard__title">{skill} </span>
                <span className="skillcard__description"> {description}</span>
            </div>
            <div className="skillcard__total">
                <div className="skillcard__value" style={{ width: `${value}%` }}>
            </div>
            </div>

        </div>
    );
}

export default SkillCard;
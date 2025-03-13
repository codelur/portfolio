import React from "react";
import "./About.css"
import texts from '../../utils/texts';

import LanguageContext from "../../../contexts/languageContext";

function About(){
    const { language } = React.useContext(
        LanguageContext
      );
    return(
        <div className="about" id="about">
            <div className="about__developer"></div>
            <div className="about__info">
                <p className="about__info-title">SALVADOR SANCHEZ RODRIGUEZ</p>
                <p className="about__info-text">{texts[language].myinfo}
                </p>
            </div>
        </div>
    );
}

export default About;
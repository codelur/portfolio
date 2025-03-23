import React from "react";
import "./About.css"
import texts from '../../utils/texts';

import LanguageContext from "../../contexts/languageContext";
import { useSelector } from "react-redux";

function About(){
    const { language } = React.useContext(
        LanguageContext
      );
      
    const theme = useSelector((state) => state.theme.theme);

    return(
        <div className="about" id="about">
            <div className="about__developer"></div>
            <div className={`about__info about__info-${theme}`}>
                <p className="about__info-title">SALVADOR SANCHEZ RODRIGUEZ</p>
                <p className="about__info-text">{texts[language].myinfo}
                </p>
            </div>
        </div>
    );
}

export default About;
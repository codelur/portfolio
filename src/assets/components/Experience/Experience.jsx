import "./Experience.css";

import React from "react";
import texts from '../../utils/texts';
import LanguageContext from "../../../contexts/languageContext";

function Experience(){
    const { language } = React.useContext(
        LanguageContext
      );
      
    return(
        <div className="experience" id="experience">
            <div className="experience__title title">{texts[language].experience}</div>
        </div>
    );
}

export  default Experience;
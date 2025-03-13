import "./Contact.css";

import React from "react";

import texts from '../../utils/texts';

import LanguageContext from "../../../contexts/languageContext";

import github from "../../github.png";
import linkedin from "../../linkedin.webp";

function Contact (){
    const { language } = React.useContext(
        LanguageContext
      );

    return (
        <div className="contact" id="contact">
            <div className="contact__title">{texts[language].contact}</div>
            <div className="contact__info">{texts[language].contactinfo}
                <div className="contact__links">
                <a className="contact__link" href="https://github.com/codelur" target="_blank"><img src={github} alt="Github" className="contact__link-option" /></a>
                <a className="contact__link" href="https://www.linkedin.com/in/salvador-sadri/" target="_blank"><img src={linkedin} alt="LinkedIn" className="contact__link-option" /></a>                </div>
            </div>

        </div>
    );
}

export default Contact;
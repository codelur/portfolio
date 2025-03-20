import "./Contact.css";

import React from "react";
import texts from '../../utils/texts';
import LanguageContext from "../../contexts/languageContext";

import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.webp";
import pdf from "../../assets/pdf.webp";

function Contact (){
    const { language } = React.useContext(
        LanguageContext
      );

    return (
        <div className="contact" id="contact">
            <div className="contact__title title">{texts[language].contact}</div>
            <hr className="split"></hr>
            <div className="contact__options">
                <div className="contact__social">
                    <div className="contact__social-info">{texts[language].contactinfo}
                        <div className="contact__links">
                            <a className="contact__link" href="https://github.com/codelur" target="_blank"><img src={github} alt="Github" className="contact__link-option" /></a>
                            <a className="contact__link" href="https://www.linkedin.com/in/salvador-sadri/" target="_blank"><img src={linkedin} alt="LinkedIn" className="contact__link-option" /></a>                
                        </div>
                    </div>
                </div>
                <div className="contact__resume">
                    <div className="contact__resume-info">{texts[language].resume} 
                        <a className="contact__link click" href="../../../../public/resume.pdf" download="resume.pdf" >
                            <img src={pdf} alt="Resume" className="contact__resume-download" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
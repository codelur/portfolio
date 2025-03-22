import "./Contact.css";

import React from "react";
import texts from '../../utils/texts';
import LanguageContext from "../../contexts/languageContext";

import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.webp";
import pdf from "../../assets/pdf.webp";

import { useSelector } from "react-redux";

function Contact ({handleEmailContactClick}){
    const theme = useSelector((state) => state.theme.theme);
    const { language } = React.useContext(
        LanguageContext
      );
    
    

    return (
        <div className="contact" id="contact">
            <div className="contact__title title">{texts[language].contact}</div>
            <hr className="split"></hr>
            <div className="contact__options">
                {/* Social Info Section */}
                
                <div className="contact__social-info">
                    <div className="contact__email">
                        <p>{texts[language].contactinfo}</p>
                        <button
                        type="button"
                        className={`contact__email-contact-btn contact__email-contact-btn-${theme}`}
                        onClick={handleEmailContactClick}
                        >
                        Send email
                        </button>
                    </div>

                    
                </div>
                
                <div className="contact__social">
                    {/* Social Links */}
                    <div className="contact__links">
                        <p>{texts[language].contactsocials}</p>
                        <div className="contact__links-container">
                            <a
                                className="contact__link"
                                href="https://github.com/codelur"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={github} alt="Github" className="contact__link-option" />
                            </a>
                            <a
                                className="contact__link"
                                href="https://www.linkedin.com/in/salvador-sadri/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={linkedin} alt="LinkedIn" className="contact__link-option" />
                            </a>
                        </div>
                    </div>
                    {/* Resume Section */}
                    <div className="contact__resume">
                        <div className="contact__resume-info">
                            <p>{texts[language].resume}</p>
                            <a
                                className="contact__link click"
                                href="/resume.pdf"
                                download="resume.pdf"
                            >
                                <img src={pdf} alt="Resume" className="contact__resume-download" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
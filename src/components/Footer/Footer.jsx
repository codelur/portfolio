import "./Footer.css";

import React from "react";

import texts from '../../utils/texts';

import LanguageContext from "../../contexts/languageContext";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.webp";

function Footer() {
    const { language } = React.useContext(
        LanguageContext
      );
  return (
    <footer className="footer">
      <div className="footer__info">
        <div className="footer__nav">
            <a className="footer__link " href="#about">{texts[language].about}</a>
            <a className="footer__link " href="#skills">{texts[language].skills}</a>
            <a className="footer__link " href="#experience">{texts[language].experience}</a>
            <a className="footer__link " href="#projects">{texts[language].projects}</a>
        </div>
        <p className="footer__developer">© {new Date().getFullYear()} Salvador Sanchez, {texts[language].engineer}</p>
      </div>
      <div className="footer__follow">
        <p className="footer__follow_text">{texts[language].findme}</p>
        <div className="footer__links">
            <a className="footer__social" href="https://github.com/codelur" target="_blank"><img src={github} alt="Github" className="footer__link-option" /></a>
            <a className="footer__social" href="https://www.linkedin.com/in/salvador-sadri/" target="_blank"><img src={linkedin} alt="LinkedIn" className="footer__link-option" /></a>                
        </div>
      </div>
    </footer>
  );
}

export default Footer;
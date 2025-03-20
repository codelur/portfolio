import "./Header.css";
import React from "react";

import texts from '../../utils/texts';

import LanguageContext from "../../contexts/languageContext";
import spanish from "../../assets/spanish.png";
import english from "../../assets/usa.jpg";
import ThemeToggle from "../ThemeToggle/Themetoggle";

function Header({handleLanguage, changeTheme}){
    const { language } = React.useContext(
        LanguageContext
      );
    return(
        <header className="header">
            <div className="header__menu">
                <div className="header__nav">
                    <a className="header__link menu-link" href="#about">{texts[language].about}</a>
                    <a className="header__link menu-link" href="#skills">{texts[language].skills}</a>
                    <a className="header__link menu-link" href="#experience">{texts[language].experience}</a>
                    <a className="header__link menu-link" href="#projects">{texts[language].projects}</a>
                    <a className="header__link menu-link" href="#contact">{texts[language].contact}</a>
                </div>
                <div className="header__context">
                    <div className="header__context-language">
                        {texts[language].language} 
                        <label htmlFor="" className="header__label" onClick={() => handleLanguage("EN")}>
                            <img src={english} alt="Spanish" className="header__language-option" />
                        </label>
                        <label htmlFor="" className="header__label" onClick={() => handleLanguage("ES")}>
                            <img src={spanish} alt="Spanish" className="header__language-option" />
                        </label>
                    </div>
                    
                    <ThemeToggle changeTheme={changeTheme} />
                </div>
                

            </div>

        </header>
    );
}

export default Header;
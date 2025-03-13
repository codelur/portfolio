import "./Footer.css";

import React from "react";

import texts from '../../utils/texts';

import LanguageContext from "../../../contexts/languageContext";

function Footer() {
    const { language } = React.useContext(
        LanguageContext
      );
  return (
    <footer className="footer">
      <p className="footer__developer">© {texts[language].footerinfo}Salvador Sanchez, {texts[language].engineer}</p>
      <p className="footer__year">{new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
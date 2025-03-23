import "./SkillCard.css"

import React, { memo, useRef,useEffect } from "react";
import texts from '../../utils/texts';
import LanguageContext from "../../contexts/languageContext";

const SkillCard = memo(({skill, value}) => {

    const elementsRef = useRef([]);
    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                // Remove 'show' class when the element is out of the viewport
                entry.target.classList.remove("show");
            }
            });
        },
        { threshold: 1 } // Trigger when 20% of the div is visible
        );

        elementsRef.current.forEach((el) => {
        if (el) observer.observe(el);
        });

        return () => observer.disconnect(); // Cleanup observer on unmount
    }, []);

    const { language } = React.useContext(
        LanguageContext
      );

    const description = value >=0 && value<=50 ? texts[language].familiar :
            (value >50 && value<=70? texts[language].intermediate:
                (value >70 && value<90? texts[language].advanced: 
                    texts[language].professional));

    return (
        <div ref={(el) => elementsRef.current.push(el)} className="skillcard hidden">
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
});

export default SkillCard;
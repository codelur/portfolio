import "./ExperienceCard.css"

import {useState } from "react";

function ExperienceCard ({company,position, details}){

    const [isOpen, setIsOpen] = useState(false);

  const toggle = ()=>{
    setIsOpen(isOpen?false:true);
  }


    return(
        <div className="experiencecard">
            <div className="experiencecard__title"  onClick={toggle}>
                <div className={`experiencecard__title-text ${isOpen ? "open" : ""}`}>
                    {position}
                    <ul>
                        {details.map((item, index) => (
                        <li key={index}>
                            <span className="experiencecard__text-title">{item.title}</span>: {item.description}
                        </li>
                        ))}
                    </ul>
                </div>
              {company}
            </div>
        </div>
    );
}

export default ExperienceCard;
import "./ExperienceCard.css"

import {useState } from "react";

function ExperienceCard ({company,position, details}){

    const [isOpen, setIsOpen] = useState(false);

  const toggle = ()=>{
    setIsOpen(isOpen?false:true);
  }


    return(
        <div className="experiencecard">
            {false && <div className="experiencecard__title">
            
                <div className="experiencecard__position">
                    <p className="experiencecard__position-text">
                        {position}
                    </p>
                </div>
                <span className="experiencecard__company-text">{company}</span>
                <div className="experiencecard__text">
                    <ul>
                    {details
                        
                        .map((item, index) => (
                        <li key ={index}>
                            <span className="experiencecard__text-title">{item.title}</span> : {item.description}
                        </li>
                    ))}
                    </ul>
                </div>
                <span className="experiencecard__expand-company" >{company}</span>
            </div>}
            <div className="experiencecard__expand-title"  onClick={toggle}>
              
              
              {isOpen && (
                <>
                  
                    <p className="experiencecard__position-text">
                        {position}
                    </p>
                  <div className="experiencecard__expand-title-text">
                      <ul>
                      {details
                          
                          .map((item, index) => (
                          <li key ={index}>
                              <span className="experiencecard__text-title2">{item.title}</span> : {item.description}
                          </li>
                      ))}
                      </ul>
                  </div>
                </>
              )}
              {company}
            </div>
        </div>
    );
}

export default ExperienceCard;
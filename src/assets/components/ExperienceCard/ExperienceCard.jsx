import "./ExperienceCard.css"

import { useEffect, useRef } from "react";

function ExperienceCard ({company,position, details}){

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
      { threshold: 0.6 } // Trigger when 20% of the div is visible
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

    return(
        <div ref={(el) => elementsRef.current.push(el)} className="experiencecard hidden">
            <div className="experiencecard__title">
            
                <div className="experiencecard__position">
                    <p className="experiencecard__position-text">
                        {position}
                    </p>
                </div>
                {company}
                <div className="experiencecard__text">
                    <ul>
                    {details
                        
                        .map((item, index) => (
                        <li key ={index}>
                            {item.title} : {item.description}
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ExperienceCard;
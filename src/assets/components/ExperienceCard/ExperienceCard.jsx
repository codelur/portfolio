import "./ExperienceCard.css"

function ExperienceCard ({company,position, details}){

    return(
        <div className="experiencecard">
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
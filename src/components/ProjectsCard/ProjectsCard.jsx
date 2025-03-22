import "./ProjectsCard.css"

function ProjectsCard({title, url, description, image}){
    return(
        <div className="projectscard">
            <div className="projectscard__title">{title}</div>
            <div className="projectscard__logo"
            style={{ 
                backgroundImage:  `url(${image})`, 
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                color: "white",
                padding: "20px"
            }}>
                
                
                
            </div>
            
            <div className="projectscard__link">
                <p className="projectscard__description">{description}</p>
                <a href={url} target="_blank">{title}</a>
            </div>
        </div>
        
    )
}

export default ProjectsCard;
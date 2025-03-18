import "./ProjectsCard.css"

function ProjectsCard({title, url, description, image}){
    return(
        <div className="projectscard">
            <div className="projectscard__title"
            style={{ 
                backgroundImage:  `url(${image})`, 
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                color: "white",
                padding: "20px",
                minHeight: "150px"
            }}>
                
                
            </div>
            <div className="projectscard__link">
                <p>{description}</p>
                <a href={url} target="_blank">{title}</a>
            </div>
        </div>
        
    )
}

export default ProjectsCard;
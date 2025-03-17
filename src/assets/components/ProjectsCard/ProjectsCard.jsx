import "./ProjectsCard.css"

function ProjectsCard({title, url, description}){
    return(
        <div className="projectscard">
            <div className="projectscard__title">
                <h3>{title}</h3>
                
            </div>
            <div className="projectscard__link">
                <p>{description}</p>
                <a href={url} target="_blank">{title}</a>
            </div>
        </div>
        
    )
}

export default ProjectsCard;
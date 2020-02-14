import React from 'react';

export default function Projects(props) {
    
    return(
        <div>
            {props.projects.map(project => (
                <div className="projects">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
}
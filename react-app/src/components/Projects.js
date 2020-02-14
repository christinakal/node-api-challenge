import React from 'react';

export default function Projects(props) {
    
    return(
        <div>
            {props.projects.map(project => (
                <h1>{project.name}</h1>
            ))}
        </div>
    );
}
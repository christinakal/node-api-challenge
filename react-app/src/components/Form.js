import React, { useState } from 'react';

export default function Form(props) {

    const [project, setProject] = useState({
        name: '',
        description: ''
    })

    const handleChanges = e => {
        setProject({ ...project, [e.target.name]: e.target.value });
        console.log(e.target.value);
    }

    const submitForm = e => {
        e.preventDefault();
        props.addNewProject(project);
        setProject({name: '', description:''});
    }
    return (
        <form onSubmit={submitForm}>
            <h2>Add a new project</h2>
            <div>
                <label htmlFor="name">Name</label>
                <input 
                    id="name" 
                    type="text" 
                    placeholder="name" 
                    onChange={handleChanges}
                    name="name"
                    value={project.name}/>
            </div>
            <div>
                <label htmlFor="description">Add a description:</label>
                <input 
                    id="description" 
                    type="text" 
                    placeholder="description" 
                    onChange={handleChanges}
                    name="description"
                    value={project.description}
                />
            </div>
            <button type="submit">Add Project</button>
        </form>
    );
}
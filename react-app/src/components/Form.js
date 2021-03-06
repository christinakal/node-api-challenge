import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
        // e.preventDefault();
        // props.addNewProject(project);
        // setProject({name: '', description:''});
        axios.post('http://localhost:5000/api/projects', project)
            .then( res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    }

    return (
        <form onSubmit={submitForm}>
            <div className="input">
                <label htmlFor="name">Project Name</label>
                <input 
                    id="name" 
                    type="text" 
                    placeholder="name" 
                    onChange={handleChanges}
                    name="name"
                    value={project.name}/>
            </div>
            <div className="input">
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
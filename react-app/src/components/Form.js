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
        // props.add
    }
    return (
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input />
            </div>
            <div>
                <label htmlFor="description">Add a description:</label>
                <input />
            </div>
            <button type="submit">Add Project</button>
        </form>
    );
}
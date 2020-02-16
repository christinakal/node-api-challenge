import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Form from './components/Form';
import Projects from './components/Projects';

function App() {

  const [projects, setProjects] = useState([]); 

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
    .then( res => {
      console.log(res);
      setProjects(res.data);
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, projects)
  

const addNewProject = project => {
  const newProject = {
    name: project.name,
    description: project.description
  }

  setProjects([ ...projects, newProject]);
}


  return (
    <div className="App">
      <Form addNewProject={addNewProject} name={projects.name} description={projects.description}/> 
      <Projects projects={projects}/>
    </div>
  );
}

export default App;

import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Form from './components/Form';

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
  




  // const addNewMember = member => { 
  //   const newMember = {
  //     id: Date.now(),
  //     name: member.name,
  //     email: member.email,
  //     role: member.role
  //   }

  //   setTeamMembers([...teamMembers, newMember]);
  // }

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
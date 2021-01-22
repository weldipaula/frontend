import React, {useState, useEffect} from 'react'
import api from './services/api'

import './App.css'

import Header from './components/Header'

function App() {
  const [projects, setProjects] = useState([])
  

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data)
    })
  },[])

  //adicionando itens ao array com useState
  async function handleAddProject() {
    
    //método antigo sem o useState=> projects.push(`Novo projeto ${Date.now()}`)
    //setProjects([...projects, `Novo projeto ${Date.now()}`])

    const response = await api.post('projects', { 
      "title": `Novo projeto ${Date.now()}`,
      "owner": "Wellyngton"
      })

      const project = response.data

      setProjects([...projects,project])

  }
  
  return (
    <>
      <Header title='Homepage'/>

      <ul>
          {projects.map(project => <li key={project.id}>{project.title}</li>)}
        </ul>

        <button type='button' onClick={handleAddProject}> Adicionar </button>
    </>
  )
};

export default App
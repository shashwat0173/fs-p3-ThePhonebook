import { useState, useEffect } from 'react'
import axios from 'axios'
import Form from './Form'
import Numbers from './Numbers'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>

      <Form persons = {persons} setPersons = {setPersons} newName = {newName} setNewName = {setNewName} newNumber = {newNumber} setNewNumber = {setNewNumber}/>
      <Numbers persons={persons}/>
      
    </div>
  )
}

export default App
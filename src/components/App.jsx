import { useState, useEffect } from 'react'
import phoneService from '../services/phoneService'
import Form from './Form'
import Numbers from './Numbers'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  useEffect(() => {
    phoneService
      .getAll()
      .then(personObjects => {
        setPersons(personObjects)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>

      <Form persons = {persons} setPersons = {setPersons} newName = {newName} setNewName = {setNewName} newNumber = {newNumber} setNewNumber = {setNewNumber}/>
      <Numbers persons={persons} setPersons={setPersons}/>
      
    </div>
  )
}

export default App
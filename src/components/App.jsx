import { useState, useEffect } from 'react'
import phoneService from '../services/phoneService'
import Form from './Form'
import Numbers from './Numbers'
import Notifications from './Notifications'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)
  
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
      <Notifications message={notificationMessage}/>
      <Form persons = {persons} setPersons = {setPersons} newName = {newName} setNewName = {setNewName} newNumber = {newNumber} setNewNumber = {setNewNumber} setNotificationMessage={setNotificationMessage}/>
      <Numbers persons={persons} setPersons={setPersons}/>
      
    </div>
  )
}

export default App
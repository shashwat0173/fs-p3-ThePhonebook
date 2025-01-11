import phonebookService from '../services/phoneService'

const Form = ({persons,setPersons,newName,setNewName,newNumber,setNewNumber}) => {

    const handleNewNameOnChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNewNumberOnChange = (event) => {
        setNewNumber(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()
    
        if(persons.find(person => person.name === newName)) {
          alert(`${newName} is already added to phonebook`)
          return
        }
    
        const personObject = {
          name: newName,
          number: newNumber
        }

        phonebookService
          .create(personObject)
          .then( personObject => {
              setPersons(persons.concat(personObject))
              setNewName('')
              setNewNumber('')
            }
          )
    }

    return (
        <form onSubmit={addPerson}>
        <div>
          name: <input value = {newName} onChange={handleNewNameOnChange}/>
        </div>
        <div>
          number: <input value = {newNumber} onChange={handleNewNumberOnChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default Form
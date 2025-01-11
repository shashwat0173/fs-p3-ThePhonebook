import phoneService from '../services/phoneService'

//Should we move delete functionality to Numbers component to avoid passing persons and setPersons as props to each Person component?

const Person = ({name, number, id, persons, setPersons}) => {

    const handleDeleteOf = (id) => {
        window.confirm(`Delete ${name}?`) &&
        phoneService
            .remove(id)
            .then(deletedPerson => {
                setPersons(persons.filter(person => person.id !== deletedPerson.id))
            })
    }

    return (
        <p>{name} {number} <button style={{backgroundColor: '#3B9EBF'}} onClick={() => handleDeleteOf(id)}>delete</button></p>
    )
}

export default Person
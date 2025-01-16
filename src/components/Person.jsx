import phoneService from '../services/phoneService'

//Should we move delete functionality to Numbers component to avoid passing persons and setPersons as props to each Person component?

const Person = ({name, number, id, persons, setPersons}) => {

    const handleDeleteOf = (id) => {
        console.log(`Attempting to delete person with id: ${id}`);
        window.confirm(`Delete ${name}?`) &&
        phoneService
            .remove(id)
            .then(deletedPerson => {
                console.log(`Deleted person with id: ${deletedPerson.id}`);
                setPersons(persons.filter(person => person.id !== deletedPerson.id));
            })
            .catch(error => {
                console.error(`Failed to delete person with id: ${id}`, error);
            });
    }

    return (
        <p>{name} {number} <button style={{backgroundColor: '#3B9EBF'}} onClick={() => handleDeleteOf(id)}>delete</button></p>
    )
}

export default Person
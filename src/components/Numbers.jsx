import Person from "./Person"



const Numbers = ({persons, setPersons}) => {

    return(
        <>
            <h2>Numbers</h2>
            {persons.map(person => <Person key={person.name} name={person.name} number={person.number} id={person.id} persons = {persons} setPersons={setPersons}/>)}
        </>
    )
}

export default Numbers
const PeopleList = ({people, toggle, prevPeople}) => {


    return (

        <div className="">
            {people && people.map((person, i) => (
                <div key={person.id}>
                    {i > 0 ? <h2>{person.name} is even more awesome than {prevPeople[i-1]["name"]}</h2> : <h2>{person.name} is awesome</h2> }
                </div>
            ))}

            { /* prevPeople && prevPeople.map((prevPerson) => (
                <p>prevPeople is currently {prevPerson.name}</p>
            )) */} 
        </div> 

    )

}

export default PeopleList
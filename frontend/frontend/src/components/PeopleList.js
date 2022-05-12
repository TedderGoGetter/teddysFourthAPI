const PeopleList = ({people, prevPeople, fontSize}) => {

    

    return (

        

        //{fontSize: `${fontSize}px`}
        <div>
            {people && people.map((person, i) => (
                <div key={person.id} className="fixed inset-x-0 font-extrabold bg-slate-300 m-60" style={{fontSize: `${fontSize}px`}}>
                    {i > 0 ? <h2>{person.name} is even more awesome than {prevPeople[i-1]["name"]}</h2> : <h2>{person.name} is awesome</h2> }
                </div>
            ))}


        </div> 

    )

}

export default PeopleList
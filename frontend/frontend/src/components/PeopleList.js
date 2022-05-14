import {memo} from 'react'
const PeopleList = ({people, fontSize}) => {


    return (

        <div>
            {people && people.map((person, i) => (
                <div key={person.id} className="inset-x-0 font-extrabold bg-slate-200 m-60" style={{fontSize: `${fontSize}px`}}>
                    {i > 0 ? <h2>{person.name} is even more awesome than {people[i-1]["name"]}</h2> : <h2>{person.name} is awesome</h2> }
                </div>
            ))}
            
        </div> 

    )

}

export default memo(PeopleList)
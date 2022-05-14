import {useState, useEffect } from 'react'

const TierList = ({people}) => {
    
    
    const [revPeople, setRevPeople] = useState([])

    useEffect(() => {
        setRevPeople(people.reverse())
    }, [people])

    return (
        
        <div className="text-left bg-red-900 right-0 m-8 p-4 rounded fixed font-extrabold font-mono">
            <p>Rankings:</p>
            {revPeople &&
            revPeople.map((person, i) => (
                <div key={person.id}>
                    <p>#{i + 1} - {person.name}</p>
                </div>
            ))}
        </div>
    
    
    )

}

export default TierList
import React from "react";
import {useState, useEffect } from 'react'
import PeopleList from "./PeopleList"
import TierList from "./TierList"

function FormSubmit() {

    
    const [people, setPeople] = useState([])
    const [prevPeople, setPrevPeople] = useState([])

    useEffect(() => {  // this is how you make a proper get request
        fetch('http://localhost:8000/people')
            .then(res => {
                return res.json()  //you have to do something with the response, in thise case you turn it from a json object into a java one with the res.json
            })
            .then((data) => {   //converting it also takes some time and so that also gives you a promise, hence the second .then. the data is the actual data you finally end up using.
                setPeople(data)
                setPrevPeople(data)
                console.log('prev is ', prevPeople)
                console.log('people is ', people)
            })
    }, [])


    const [name, setName] = useState('')
  

    const handleSubmit = (e) => {
       // e.preventDefault()  // this prevents the form from resetting after a submit
        

        const sendOut = {name}

        fetch('http://localhost:8000/people', {
            method: 'POST',
            headers: {"Content-Type": "application/json" }, // You need to add this to a post request to specify the type of info being posted.
            body: JSON.stringify(sendOut)
        })
        .then(() => {
            fetch('http://localhost:8000/people')
            .then(res => {
                return res.json()  
            })
            .then((data) => {   
                setPrevPeople(people)
                console.log(data)
                setPeople(data)
            })
        })


    }

    //incrementer for making every next thing bigger.
    const [incrementer, setIncrementer] = useState(1)
    const toggleFunc = () => {
        setIncrementer(V => V + 1)
        console.log(incrementer)
    }

    return (
        <div>
            <TierList people={people}/>

            <div className="place-content-center">
                <PeopleList people={people} toggle={incrementer} prevPeople={prevPeople}/>
                



                <form className="form" onSubmit={handleSubmit}>
                    <label>Is there someone even more awesome?</label>
                    <input 
                        type="text" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)} // sets name to whatever we type as we type it
                    ></input>
                    <button onClick={toggleFunc}>Submit</button>
                    <p>{name}</p>
                </form>



            </div>

        </div>

        
        
    )
}

export default FormSubmit
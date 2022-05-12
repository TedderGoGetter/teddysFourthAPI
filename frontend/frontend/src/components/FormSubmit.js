import React from "react";
import {useState, useEffect } from 'react'
import PeopleList from "./PeopleList"
import TierList from "./TierList"
import Confetti from 'react-confetti'

function FormSubmit() {

    
    const [people, setPeople] = useState([])
    const [prevPeople, setPrevPeople] = useState([])


    //Using this one to increase the font size every submit. Would it make more sense to increase for every item in database?
    const [fontSize, setFontSize] = useState(16)


    useEffect(() => {  // this is how you make a proper get request
        fetch('http://localhost:8000/people')
            .then(res => {
                return res.json()  //you have to do something with the response, in thise case you turn it from a json object into a java one with the res.json
            })
            .then((data) => {   //converting it also takes some time and so that also gives you a promise, hence the second .then. the data is the actual data you finally end up using.
                setPeople(data)
                setPrevPeople(data)
               // console.log('prev is ', prevPeople)
               // console.log('people is ', people)
            })
    }, [])


    const [name, setName] = useState('')
  

    const handleSubmit = (e) => {
       e.preventDefault()  // this prevents the form from resetting after a submit
        

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

        //make it biggerrrr give it confetterrr
        setFontSize(fontSize + 5)
        console.log(fontSize)


    }

    return (
        <div>
            <TierList people={people}/>

            <div class="text-center">
                <PeopleList people={people} prevPeople={prevPeople} fontSize={fontSize}/>
                



                <form className="fixed bottom-0 text-center inset-x-0 m-60 bg-gray-600" onSubmit={handleSubmit}>
                    <br></br>
                    <label>Is there someone even more awesome?</label>

                    <br></br>

                    <input 
                        type="text" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)} // sets name to whatever we type as we type it
                    ></input>
                    <br></br>
                    <button class="bg-orange-800 rounded">Submit</button>
                    <Confetti
                        width={50}
                        height={50}
                        numberOfPieces={20}
                        run={false}
                    />
                    
                </form>



            </div>

        </div>

        
        
    )
}

export default FormSubmit
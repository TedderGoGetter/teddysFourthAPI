import {useState, useEffect, useCallback } from 'react'
import PeopleList from "./PeopleList"
import TierList from "./TierList"
import Logo from "../images/howcoolru.png"

function FormSubmit() {

    
    const [people, setPeople] = useState([])
    
    const [name, setName] = useState('')
    const [fontSize, setFontSize] = useState(25)
  
    useEffect(() => {  // this is how you make a proper get request
        fetch('http://localhost:7000/get')  
            .then(res => {
                return res.json()  //you have to do something with the response, in thise case you turn it from a json object into a java one with the res.json
            })
            .then((data) => {   //converting it also takes some time and so that also gives you a promise, hence the second .then. the data is the actual data you finally end up using.
                // console.log('get request data:', data)
                setPeople(data)
                // console.log('people is ', people)
            })
    }, [])


    const handleSubmit = useCallback( (e) => {  //and here's my post request. Not sure what useCallback and (e) are.

            e.preventDefault()  // this prevents the page from refreshing after a submit
            

            const sendOut = {name}

            fetch('http://localhost:7000/post', {
                method: 'POST',
                headers: {"Content-Type": "application/json" }, // You need to add this to a post request to specify the type of info being posted.
                body: JSON.stringify(sendOut)
            })

            //from here I did the old way


            .then((res) =>{               
                return res.json()
            })
            .then((data) => {
                console.log("what data is", data)
                console.log(people)
                setPeople([...people, data])  //this is how you add an array element with useState! Yay
            })
            

            //Iterator for making the text bigger
            setFontSize(fontSize + 5)

        }, [people, name, fontSize, setPeople, setFontSize]
    )

    //the reset button. Use the response to update state. Or a shallow delete on the frontend that mirrors what the backend is doing.
    const onReset = () => {
        console.log('onReset was called')
        fetch('http://localhost:7000/reset',

        {method: 'DELETE'}
        )
        
        .then((res) =>{               
            return res.json()
        })
        .then((data) => {
            console.log("what res from reset is", data)
            setPeople(data) 
        })
        
    }



    return (
        <div className="">
            
            <div className="top">
                <img className="logo" src={Logo} alt="issa logo"/>
                
                <TierList people={people}/>
            </div>

            <div className="people-container">
                <PeopleList className="people-list" people={people} fontSize={fontSize}/>
            </div>

            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <br></br>
                    <label className="label">Is there someone even more awesome?</label>

                    <br></br>

                    <input 
                        className='input'
                        type="text" 
                        required
                        value={name}
                        onChange={(e) => {
                            //console.log('checking input: ', e.target.value)
                            setName(e.target.value)
                        }} // sets name to whatever we type as we type it
                    ></input>
                    <br></br>
                    <button className='submit'>Submit</button>
                </form>


                <button className="reset" onClick={onReset}>Reset</button>

            </div>
        </div>  
    )
}

export default FormSubmit
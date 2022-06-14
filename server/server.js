const express = require('express')
const app = express()
const cors = require('cors')
const pool = require("./db.js") 


app.use(
    cors({
        origin:"http://localhost:3000",
    })
)

app.use(express.json()) // lets us use req.body

app.listen(7000)

// Routes that I want: Get all people, delete all except #1.

//so this will have to get data from the form in my frontend, and then use that to add a column in postgres.


//Add a person
app.post("/post", async(req, res) => {  //async makes it asynchronous and gives you tools such as await.
try {

    const  { name } =  req.body
    const newPerson = await pool.query(
        "INSERT INTO people (name) VALUES ($1) RETURNING *", 
        [name]
    )

    res.json(newPerson.rows[0])

} catch (err) {
    console.error(err.message)
} //get this by typing trycatch, it's an error handler
})

//get all people
app.get("/get", async(req,res) => {
    try {

        const allPeople = await pool.query("SELECT * FROM PEOPLE")  //Don't we just need Name?
        res.json(allPeople.rows)

    } catch (err) {
        console.error(err.message)
    }
})

//Delete all except id1
app.delete("/reset", async(req,res) => {
    try {
        const getReset = await pool.query("DELETE FROM people WHERE id != 1")
        
        res.json("Database was reset!") //do I even need this?
    } catch (err) {
        console.error(err.message)
    }
})





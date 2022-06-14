const express = require('express')
const app = express()
const cors = require('cors')

app.use(
    cors({
        origin:"http://localhost:3000",
    })
)

app.listen(7000)

app.get('/', (req, res) => {

    console.log('this is server')

    res.json(
        {
            "id": 1,
            "name": "Teddy"
          }
    )
})

//const peopleRouter = require('./routes/people')

//app.use('/people', peopleRouter)

const express = require('express')
const app = express()

app.listen(7000)

app.get('/', (req, res) => {
    res.send('Yoo')
})

const peopleRouter = require('./routes/people')

app.use('/people', peopleRouter)

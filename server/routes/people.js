const express = require('express')
const router = express.Router()

// I'm assuming I put all the people into an array. Json server had actual entries though.
const people = ['Teddy']

router.get('/teddy', (req, res) => {
res.send('teddy')
})

module.exports = router
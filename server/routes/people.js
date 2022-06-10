const express = require('express')
const router = express.Router()

router.get('/teddy', (req, res) => {
res.send('teddy')
})

module.exports = router
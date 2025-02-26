const express = require('express')
const app = express()
app.use(express.json())
const cors = require('cors')
const db = require('./config/db')
const contactRoute = require('./routes/ContactRoute')
const port = 3000
app.use(cors())
app.get('/', (req, res) => {
    res.send("Welcome to server")
})
app.use('/contacts', contactRoute)
app.listen(port, () => {
    console.log('server is running in port : ' + port)
})

console.log("Hello Hi")
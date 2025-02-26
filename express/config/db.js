const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://maxneodev:samplepassword@cluster0.4jodh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

const connection = mongoose.connection

connection.on('connected', () => { console.log('db connected') })
connection.on('error', () => { console.log('db error') })


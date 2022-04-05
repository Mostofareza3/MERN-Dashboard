const mongoose = require('mongoose')

const URL = 'mongodb+srv://POS-application:POS-application@cluster0.myaif.mongodb.net/POS-application?retryWrites=true&w=majority'

mongoose.connect(URL)

let connectionObj = mongoose.connection

connectionObj.on('connected', () => {
    console.log('Mongo DB Connection Successful')
})

connectionObj.on('error', () => {
    console.log('Mongo DB Connection Failed')
})
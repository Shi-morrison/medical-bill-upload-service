// Configuration
const express = require('express')
const app = express()
const items = require('./routes/items')

// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/items',items)
    

// Server response
app.listen(3000,()=>{
    console.log(`Server is listening on port 3000...`)
})
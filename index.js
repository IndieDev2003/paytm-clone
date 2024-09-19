const express = require("express");
const app = express()

const db = require('./db.js')
const mainRouter = require('./routes/index.js')

app.use('/app/v1', mainRouter)
app.get('/', (req,res)=>
{
    console.log('Working')
})

app.listen(process.env.PORT, () =>
{
    console.log(`Listening to port ${process.env.PORT}`)
})



const express = require('express')
const chalk = require('chalk')
const debug = require('debug')('app')
const morgan = require('morgan')
const app = express()
const port = 2531

app.use(morgan('combined'))

app.get("/", (req,res) =>{
    res.send("<h1>Hello Noob</h1>")
})

app.listen(port, ()=>{
    debug("Listening on PORT "+chalk.green(port))
})
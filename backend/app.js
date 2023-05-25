const express = require('express');
const cors = require('cors');
const app = express();
//DB connection
const conn = require('./db/conn')
conn();

app.use(cors())

app.use(express.json())

//Routes
const routes = require('./routes/router')

app.use("/api", routes)

app.listen(3100, ()=>{
    console.log('servidor online')
})

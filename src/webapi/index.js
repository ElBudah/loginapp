const express = require('express');
const app = express();
const cors = require('cors');
const route = require('./routes/user_routes');


app.use(cors());
app.use(express.json())

//Route for user
app.use('/users', route);


app.listen(5000, ()=>{
    console.log('The webserver is runnnig...');
})
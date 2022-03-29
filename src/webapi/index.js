const express = require('express');
const app = express();
const cors = require('cors');
const route = require('./routes/user_routes');


app.use(cors());
app.use(express.json())


app.use('/users', route);





app.listen(5000, ()=>{
    console.log('The webser is runnnig...');
})
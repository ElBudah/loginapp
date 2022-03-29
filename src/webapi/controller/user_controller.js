const express = require('express');
const app = express();

app.use(express.json());



exports.signup = async (req,res) => {

    const database = require('../db');
    const User = require('../user');
    await database.sync();

    let txtName = req.body.txtName;
    console.log(txtName);

}
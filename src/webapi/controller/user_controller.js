const express = require('express');
const app = express();

app.use(express.json());



exports.signup = async (req, res) => {

    const database = require('../db');
    const User = require('../user');
    await database.sync();

    let txtName = req.body.Name;
    let txtPassword = req.body.Password;

    console.log(txtName);
    console.log(txtPassword);

    var validation = false;

    //function to check is there is a User with the same name
    const NewUserValidation = await User.findOne({ where: { name: txtName } }).then(
        count => {
            console.log(count)
            if(count == null){
                console.log(' null')
                // New User Creation
                User.create({
                    name: txtName,
                    password: txtPassword,
                })
                validation = true;
            }
            else{
                console.log('User already created')

            }
        }
    )
    
        //Create
        /* const NewUser = await User.create({
            name: txtName,
            password: txtPassword,
        }) */
    
    console.log("Validation just before exiting: "+ validation);
    return res.json(validation);
}

exports.deleteall = async(req, res) =>{

    console.log('inside destroyer')
    const database = require('../db');
    const User = require('../user');
    await database.sync();

    await User.destroy({
        where: {},
        truncate: true
    })

    const text = 'done'

    return res.json(text);
}
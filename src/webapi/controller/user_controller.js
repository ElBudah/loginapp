const express = require('express');
const app = express();
const cors = require('cors');

const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());


// Sign Up Code
exports.signup = async (req, res) => {

    const database = require('../db');
    const User = require('../user');
    await database.sync();

    let txtName = req.body.Name;
    let txtPassword = req.body.Password;
    let txtEmail = req.body.Email;

    console.log(txtName);
    console.log(txtPassword);
    console.log("O email inserido é: " + txtEmail);

    var validation = false;

    //function to check is there is a User with the same name
    const NewUserValidation = await User.findOne({ where: { email: txtEmail } }).then(
        count => {
            console.log(count)
            if (count == null) {
                console.log(' null')
                // New User Creation
                User.create({
                    name: txtName,
                    password: txtPassword,
                    email: txtEmail,
                })
                validation = true;
            }
            else {
                console.log('User already created')

            }
        }
    )

    //Create
    /* const NewUser = await User.create({
        name: txtName,
        password: txtPassword,
    }) */

    console.log("Validation just before exiting: " + validation);
    return res.json(validation);
}

//Sign In
exports.sigin = async (req, res) => {

    const database = require('../db');
    const User = require('../user');
    await database.sync();

    let txtName = req.body.Name;
    let txtPassword = req.body.Password;
    let txtEmail = req.body.Email;

    var login = false;

    const LoginProcess = await User.findOne({
        where: {
            name: txtName,
            password: txtPassword,
            email: txtEmail
        }
    }).then(
        result => {
            login = true;
        }
    )

    return res.json(login);
}

//Read all data
exports.read = async (req, res) => {

    const database = require('../db');
    const User = require('../user');
    await database.sync();

    const AllData = await User.findAll({
        raw: true
    });

    return res.json(AllData);

}

//Delete Selected ID
exports.deleteid = async (req, res) => {

    const database = require('../db');
    const User = require('../user');
    await database.sync();

    let IDselected = req.body.id;

    await User.destroy({
        where: {
            id: IDselected
        }
    })

    return res.json({});

}

//Delete All USers Code
exports.deleteall = async (req, res) => {

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

exports.update = async(req,res) => {

    const database = require('../db');
    const User = require('../user');
    await database.sync();

    let NameUpdate = req.body.Name;
    let PasswordUpdate = req.body.Password;
    let EmailUpdate = req.body.Email;
    let IDupdate = req.body.id;

    console.log("O ID selecionado foi: " + IDupdate);


    await User.update(
        {name: NameUpdate},
        {where: {
            id: IDupdate
        }}
    );

    return res.json({
        ok: true
    })
}
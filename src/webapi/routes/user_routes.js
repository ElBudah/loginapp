const express = require('express');
const app = express();
const route = express.Router();
const user_controller = require('../controller/user_controller');

app.use(express.json());

//Route for SignUp a new User
route.post('/signup', user_controller.signup);


//Route for delete all User
route.get('/deleteall', user_controller.deleteall);


module.exports = route;
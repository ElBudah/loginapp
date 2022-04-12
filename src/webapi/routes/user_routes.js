const express = require('express');
const app = express();
const route = express.Router();
const user_controller = require('../controller/user_controller');

app.use(express.json());

//Route for SignUp a new User
route.post('/signup', user_controller.signup);

//Route for SignIn a new user
route.post('/signin', user_controller.sigin);

//Route for read all data
route.get('/read', user_controller.read);

//Route to delete only the selected IDs
route.post('/deleteid', user_controller.deleteid);

//Route for delete all User
route.get('/deleteall', user_controller.deleteall);


module.exports = route;
const express = require('express');
const app = express();
const route = express.Router();
const user_controller = require('../controller/user_controller');

app.use(express.json());

route.post('/signup', user_controller.signup);


module.exports = route;
const express = require('express');
const EmailController = require('./controllers/EmailController');

const routes = express.Router();


routes.get('/email', EmailController.listar);
routes.post('/email', EmailController.create);

module.exports = routes;
const express = require("express");
const routes = express.Router();
const CityController = require('./controllers/CityController');

routes.get('/', CityController.index);

module.exports = routes;

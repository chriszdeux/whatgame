const express = require('express');
const routesDevelopers = express.Router();

const developers_controller = require('../../controllers/developers.controllers');

routesDevelopers.get('/', developers_controller.index);
routesDevelopers.get('/:id', developers_controller.get_details);

module.exports = routesDevelopers
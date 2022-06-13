const express = require('express');
const routesCreators = express.Router();

const creators_controller = require('../../controllers/creators.controllers');

routesCreators.get('/', creators_controller.index);
routesCreators.get('/:id', creators_controller.get_details);

module.exports = routesCreators
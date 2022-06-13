const express = require('express');
const routesPlatforms = express.Router();

const platforms_controller = require('../../controllers/platforms.controllers');

routesPlatforms.get('/', platforms_controller.index);
routesPlatforms.get('/:id', platforms_controller.get_platform);

module.exports = routesPlatforms
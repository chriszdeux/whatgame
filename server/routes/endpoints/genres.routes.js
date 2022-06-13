const express = require('express');
const routesGenres = express.Router();

const genres_controller = require('../../controllers/genres.controllers');

routesGenres.get('/', genres_controller.index);
routesGenres.get('/:id', genres_controller.get_genre);

module.exports = routesGenres
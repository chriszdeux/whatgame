const express = require('express');
const routesGames = express.Router();

const game_controllers = require('../../controllers/games.controllers');


routesGames.get('/', game_controllers.index)
routesGames.get('/:id', game_controllers.get_game)
routesGames.get('/addition/:id', game_controllers.get_additions)
routesGames.get('/addition/:id', game_controllers.get_additions)


module.exports = routesGames
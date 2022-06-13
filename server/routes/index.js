const express = require('express');
const mainRoute = express.Router();

const gamesRoutes = require('./endpoints/games.routes');
const creatorsRoutes = require('./endpoints/creators.routes');
const developersRoutes = require('./endpoints/developers.routes');
const genresRoutes = require('./endpoints/genres.routes');
const platformsRoutes = require('./endpoints/platforms.routes');


mainRoute.use('/games', gamesRoutes);
mainRoute.use('/creators', creatorsRoutes);
mainRoute.use('/developers', developersRoutes);
mainRoute.use('/genres', genresRoutes);
mainRoute.use('/platforms', platformsRoutes);

module.exports = mainRoute
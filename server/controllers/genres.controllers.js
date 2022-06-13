const axios = require('axios');
const url ="https://api.rawg.io/api/genres"
require('dotenv').config();

const cleanParams = require('../utils/cleanParams');

const key = `?key=${process.env.GAME_API_KEY}`
const genres_controller = {}

//GET LIST OF CREATORS
genres_controller.index = async ( req, res ) => {
  const data = await axios.get(`${url}${ key }`).then(response => {
    return response.data
  }).catch(err => {
    return {
      error:err.code,
      error_status: err.status,
      error_detail: err.response.data.detail
    }
  })
  
  res.json(data)
}

genres_controller.get_genre = async ( req, res ) => {
  const id = cleanParams(req.params.id)
  const data = await axios.get(`${url}/${ id }${ key }`).then(response => {
    return response.data
  }).catch(err => {
    return {
      error:err.code,
      error_status: err.status,
      error_detail: err.response.data.detail
    }
  })
  res.json(data)
}


module.exports = genres_controller
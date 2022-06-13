const axios = require('axios');
const url ="https://api.rawg.io/api/platforms"
require('dotenv').config();

const cleanParams = require('../utils/cleanParams');

const key = `?key=${process.env.GAME_API_KEY}`
const platforms_controller = {}

//GET LIST OF CREATORS
platforms_controller.index = async ( req, res ) => {
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

platforms_controller.get_platform = async ( req, res ) => {
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


module.exports = platforms_controller
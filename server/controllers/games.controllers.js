const axios = require('axios');
const url ="https://api.rawg.io/api/games"
require('dotenv').config();

const cleanParams = require('../utils/cleanParams');

const key = `?key=${process.env.GAME_API_KEY}`
const games_controller = {}


//LIST OF GAMES
games_controller.index = async ( req, res ) => {
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
//GET SINGLE GAME
games_controller.get_game = async ( req, res ) => {
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
//GET EXPANSIONS, ADD'S
games_controller.get_additions = async ( req, res ) => {
  console.log(req.params)
  const id = cleanParams(req.params.id)
  const data = await axios.get(`${url}/${ id }/additions${ key }`).then(response => {
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
//GET DEVELOPMENT TEAM
games_controller.get_development = async ( req, res ) => {
  console.log(req.params)
  const id = cleanParams(req.params.id)
  const data = await axios.get(`${url}/${ id }/development${ key }`).then(response => {
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
//GET GAMES PART OF THE SERIE
games_controller.get_series = async ( req, res ) => {
  console.log(req.params)
  const id = cleanParams(req.params.id)
  const data = await axios.get(`${url}/${ id }/game-series${ key }`).then(response => {
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

//GET GAMES PART OF THE SERIE
games_controller.get_series = async ( req, res ) => {
  console.log(req.params)
  const id = cleanParams(req.params.id)
  const data = await axios.get(`${url}/${ id }/game-series${ key }`).then(response => {
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

//GET SCREENSHOTS OF THE GAME
games_controller.get_screenshots = async ( req, res ) => {
  console.log(req.params)
  const id = cleanParams(req.params.id)
  const data = await axios.get(`${url}/${ id }/screenshots${ key }`).then(response => {
    return response.data
  }).catch(err => {
    return {
      error:err.code,
      error_status: err.status,
      error_detail: err.response.data.detail
    }
  }).catch(err => {
    return {
      error:err.code,
      error_status: err.status,
      error_detail: err.response.data.detail
    }
  })
  
  res.json(data)
}

//GET ACHIEVEMENTS OF THE GAME
games_controller.get_achievements = async ( req, res ) => {
  console.log(req.params)
  const id = cleanParams(req.params.id)
  const data = await axios.get(`${url}/${ id }/achievements${ key }`).then(response => {
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

//GET TRAILERS OF THE GAME
games_controller.get_trailers = async ( req, res ) => {
  console.log(req.params)
  const id = cleanParams(req.params.id)
  const data = await axios.get(`${url}/${ id }/movies${ key }`).then(response => {
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

//GET COMMENTS OF THE GAME
games_controller.get_comments = async ( req, res ) => {
  console.log(req.params)
  const id = cleanParams(req.params.id)
  const data = await axios.get(`${url}/${ id }/reddit${ key }`).then(response => {
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



module.exports = games_controller
import { useEffect, useState } from "react"
import { getDetailsGame, GetGames, getGamesByGenre, getGenreGames, getGameScreenshots, getGameByName } from "../data/fetchGames"

export const useFetchGames = () => {
  const [dataGame, setDataGame] = useState({
    data: [],
    loading: true
  })

  useEffect(() => {
    GetGames()
      .then(game => {
        setDataGame({
          data: game,
          loading: false
        })
      })
  }, [ ])
  // debugger
  return dataGame
}

export const useFetchGenres = () => {
  const [dataGenres, setDataGenres] = useState({
    dataGenre: [],
    loading: true
  })

  useEffect(() => {
    getGenreGames()
      .then(genre => {
        setDataGenres({
          dataGenre: genre,
          loading: false
        })
      })
  }, [ ])

  return dataGenres
}

export const useGamesByGenre = ( genre ) => {
  const [gamesByGenreData, setGamesByGenreData] = useState({
    dataListGame: [],
    loading: true
  })

  useEffect(() => {
    getGamesByGenre(genre)
      .then(listGame => {
        setGamesByGenreData({
          dataListGame: listGame,
          loading: false
        })
      })
  }, [ genre ])

  return gamesByGenreData
}

export const useGetGameDetails = ( game ) => {
  const [gameDetails, setGameDetails] = useState({
    detailsData: { },
    loading: true
  })

  useEffect(() => {
    getDetailsGame(game)
      .then(data => {
        setGameDetails({
          detailsData: data,
          loading: false
        })
      })
    }, [ game ]);
    // debugger
  return gameDetails
}

export const useGetScreenshots = ( game ) => {
  const [screenshots, setScreenshot] = useState({
    screenshotData: [],
    loading: true
  })

  useEffect(() => {
    getGameScreenshots( game )
      .then(screenshot => {
        setScreenshot({
          screenshotData: screenshot,
          loading: false
        })
      })

  }, [ game ])

  return screenshots;
}

export const useGetGamesByName = ( searchInput ) => {
  const [resultData, setResultData] = useState({
    gamesData: [],
    loading: true
  })

  useEffect(() => {
    getGameByName( searchInput )
      .then(result => {
        setResultData({
          resultData: result,
          loading: false
        })
      })
  }, [ searchInput ])
// debugger
  return resultData
}
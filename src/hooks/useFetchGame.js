import { useEffect, useRef, useState } from "react"
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
    data: [],
    loading: true
  })

  useEffect(() => {
    getGenreGames()
      .then(genre => {
        setDataGenres({
          data: genre,
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

  const isMounted = useRef(true)

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [ ])

  useEffect(() => {
    getGameByName( searchInput )
      .then(result => {
        // if(isMounted.current) {
        //   setResultData({
        //     resultData: result,
        //     loading: false
        //   })
        // } else {
        //   console.log(`not called`)
        // }

        setResultData({
          resultData: result,
          loading: false
        })
      })
  }, [ searchInput ])
// debugger
  return resultData
}
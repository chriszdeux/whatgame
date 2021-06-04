import { useEffect, useRef, useState } from "react"
import { getDetailsGame, GetGames, getGamesByGenre, getGenreGames, getGameScreenshots, getGameByName, resizeFile } from "../data/fetchGames"

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
  // debugger
  return dataGenres
}

export const useGamesByGenre = ( genre ) => {
  const [gamesByGenreData, setGamesByGenreData] = useState({
    data: [],
    loading: true
  })

  useEffect(() => {
    getGamesByGenre(genre)
      .then(listGame => {
        setGamesByGenreData({
          data: listGame,
          loading: false
        })
      })
  }, [ genre ])

  return gamesByGenreData
}

export const useGetGameDetails = ( game ) => {
  const [gameDetails, setGameDetails] = useState({
    data: { },
    loading: true
  })

  useEffect(() => {
    getDetailsGame(game)
      .then(dataGame => {
        setGameDetails({
          data: dataGame,
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
    data: [],
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

        setResultData({
          data: result,
          loading: false
        })
      })
  }, [ searchInput ])
// debugger
  return resultData
}

// export const useResizeImage = ( image = 'https://media.rawg.io/media/screenshots/a87/a8733e877f8fbe45e4a727c22a06aa2e.jpg') => {
//   const [resizeImage, setResizeImage] = useState({
//     lowImage: {},
//     loading: true
//   })

//   useEffect(() => {
//     resizeFile(image)
//       .then(myImage => {
//         setResizeImage({
//           lowImage: myImage,
//           loading: false
//         })
//       })
//   })
//   // debugger
//   return resizeImage
// }
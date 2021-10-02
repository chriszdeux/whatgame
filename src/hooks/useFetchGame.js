import { useEffect, useRef, useState } from "react"
import { getDetailsGame, GetGames, getGamesByGenre, getGenreGames, getGameScreenshots, getGameByName, resizeFile } from "../data/fetchGames"

export const useFetchGames = ( pagination ) => {
  const [dataGame, setDataGame] = useState({
    data: [],
    loading: true
  })

  useEffect(() => {
    // debugger
    GetGames( pagination )
      .then(game => {
        setTimeout(() => {
          setDataGame({
            data: game,
            loading: false
          })
        }, 1000);
      })
  }, [ pagination ])
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
        setTimeout(() => {
          setDataGenres({
            data: genre,
            loading: false
          })
        }, 1000);
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
        setTimeout(() => {
          setGamesByGenreData({
            data: listGame,
            loading: false
          })
        }, 1000);
      })
  }, [ genre ])
  // debugger
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
        setTimeout(() => {
          setGameDetails({
            data: dataGame,
            loading: false
          })
        }, 1000);
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
        setTimeout(() => {
          setScreenshot({
            screenshotData: screenshot,
            loading: false
          })
        }, 1000);
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
        setTimeout(() => {
          setResultData({
            data: result,
            loading: false
          })
        }, 1000);
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
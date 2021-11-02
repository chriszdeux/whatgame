import { useEffect, useRef, useState } from "react"
import { getDetailsGame, GetGames, getGamesByGenre, getGenreGames, getGameScreenshots, getGameByName, resizeFile } from "../data/fetchGames"

export const useFetchGames = ( pagination ) => {
  const isMounted = useRef(true)
  
  const [dataGame, setDataGame] = useState({
    data: [],
    loading: true
  })

    useEffect(() => {
      return () => {
        isMounted.current = false
      }
    }, [])
  useEffect(() => {
    // debugger
    GetGames( pagination )
      .then(game => {
        setTimeout(() => {
          if(isMounted.current) {
            setDataGame({
              data: game,
              loading: false
            })
          }
        }, 0);
      })

      
  }, [ pagination ])
  // debugger
  return dataGame
}

export const useFetchGenres = () => {
  const [genresData, setGenresData] = useState({
    data: [],
    loading: true
  })

  const [genreCollection, setGenreCollection] = useState([])
  const isMounted = useRef(true)

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [  ])
  useEffect(() => {
    getGenreGames()
      .then(genre => {
        setTimeout(() => {
          if(isMounted.current) {
            setGenresData({
              data: genre,
              loading: false
            })
          }
        }, 0);
      })
  }, [ ])

  useEffect(() => {
    setTimeout(() => {
      genresData.data.map(item => {
        getGamesByGenre(item.slug)
          .then(item2 => {
            setGenreCollection(c => [...c, {
              id: item.id,
              genre: item.name,
              data: item2
            }])
          })
      })
    }, 0);
  }, [ genresData.data ])
  // debugger
  return {genresData, genreCollection}
}

export const useGamesByGenre = ( genre ) => {
  const [gamesByGenreData, setGamesByGenreData] = useState({
    data: [],
    loading: true
  })
  const isMounted = useRef(true)

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [  ])
  useEffect(() => {
    setTimeout(() => {
    getGamesByGenre(genre)
      .then(listGame => {
          if(isMounted.current) {
            setGamesByGenreData({
              data: listGame,
              loading: false
            })
          }
        })
      }, 3000);
      }, [ genre ])
  // debugger
  return gamesByGenreData
}

export const useGetGameDetails = ( game ) => {
  const [gameDetails, setGameDetails] = useState({
    data: { },
    loading: true
  })
  const isMounted = useRef(true)

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [  ])
  useEffect(() => {
    getDetailsGame(game)
      .then(dataGame => {
        setTimeout(() => {
          if(isMounted.current) {
            console.log(`mounted`)
            setGameDetails({
              data: dataGame,
              loading: false
            })
          } else {
            console.log(`dismounted`)
          }
        }, 0);
      })
    }, [ game ]);
    // debugger
  return gameDetails
}

export const useGetScreenshots = ( game ) => {
  const isMounted = useRef(true)
  const [screenshots, setScreenshot] = useState({
    screenshotData: [],
    loading: true
  })
  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [  ])
  useEffect(() => {
    getGameScreenshots( game )
      .then(screenshot => {
        setTimeout(() => {
          if(isMounted.current) {
            setScreenshot({
              screenshotData: screenshot,
              loading: false
            })
          }
        }, 0);
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
          if(isMounted.current) {
            setResultData({
              data: result,
              loading: false
            })
          }
        }, 0);
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

// setTimeout(() => {
  //   genre.map(item => {
  //     getGamesByGenre(item.slug)
  //       .then(item2 => {
  //         setGenreCollection({
  //           data:[...data, {
  //             genre_title: item.name,
  //             array: item2.dataGames
  //             // loading: true
  //           }],
  //           loading: false
  //         })
  //       })
  //   })
  // }, 2000);
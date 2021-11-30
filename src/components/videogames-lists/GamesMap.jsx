import React, { useContext, useEffect, useState } from 'react'
import { useFetchGenres } from '../../hooks/useFetchGame'
import { GameList } from '../videogames-lists/GameList'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { LoadingComponent } from '../loading/LoadingComponent'
import { BackgroundAnimation } from '../animations/BackgroundAnimation'
import { DataContext } from '../../context/DataFetchContext'
export const GamesMap = () => {
  // const { data, loading } = useFetchGenres()
  const { dataGenres, genreLoading, genreCollection } = useContext(DataContext)
  useEffect(() => {
    // console.log('GAMES--MAP')
  }, [dataGenres])
  // debugger
  const [handleGenres, setHandleGenres] = useState([])

  useEffect(() => {
    setHandleGenres(genreCollection)
  }, [ genreCollection ])

  if(dataGenres.length ===  genreCollection.genreCollection) {
    debugger
  }

  // debugger
  return (
    <section className="container__games">
      {
           genreLoading
            ? <LoadingComponent />
            : <>
                {
                  handleGenres.sort().map(genre => (
                    <LazyLoadComponent 
                    key={genre.id}
                    delayTime="3000"
                    >
                    <GameList key={genre.id} genre={genre}/>
                    </LazyLoadComponent>
                    ))
                  }
              </>
          }
          {/* <BackgroundAnimation /> */}
    </section>
  )
}

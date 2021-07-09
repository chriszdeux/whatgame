import React from 'react'
import { useFetchGenres } from '../../hooks/useFetchGame'
import { GameList } from '../videogames-lists/GameList'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { LoadingComponent } from '../loading/LoadingComponent'
export const GamesMap = () => {
  const { data, loading } = useFetchGenres()

  return (
    <>
      {
            loading
            ? <LoadingComponent />
            : <>
                {
                  data.map(genre => (
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
    </>
  )
}

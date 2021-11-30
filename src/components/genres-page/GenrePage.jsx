import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataFetchContext'
import { GameList } from '../videogames-lists/GameList'
import { GameSmallCard } from '../videogames-lists/GameSmallCard'
import { GenresGrid } from './GenresGrid'
import { HomeImage } from './HomeImage'

import '../../styles/genres-style.css'
import { useFetchGenres, useGamesByGenre } from '../../hooks/useFetchGame'
import { GameMediumCard } from '../videogames-lists/GameMediumCard'
import { GamesGenreGrid } from './GamesGenreGrid'
import { LoadingComponent } from '../loading/LoadingComponent'
import { usePagination } from '../../hooks/usePagination'
import { Pagination } from '../pagination/Pagination'

export const GenrePage = () => {
  // const [gamesByGenre, setGamesByGenre] = useState()
  // const { data, loading } = useFetchGenres()
  const { dataGenres, genreLoading, gamesByGenre } = useContext(DataContext)
  const {
    handleNextPage, 
    handlePreviousPage, 
    currentPage, 
    page, 
    myLoad,
    setMyLoad, setCurrentPage } = usePagination( )
  // debugger
  // const { gamesByGenre  } = useContext(DataContext)
  // const { slug, name} = gamesByGenre
  // useEffect(() => {
  //   // console.log('grid changed')
  //   return () => {
      
  //   }
  // }, [ gamesByGenre ])
  // debugger
  
  return (
    <>
      {
        genreLoading
          ? <LoadingComponent />
          : <>
            <section className="genres games__list" >
              {/* <h2 className="genres--title">Genres</h2> */}
              {/* <HomeImage 
                className="genre__home__img" 
                data={ data }
              />       */}
              <div className="hero__text__content">
              <h2 className="genre--title">{ gamesByGenre }</h2>
                {/* <p className="hero--text">{ name }</p> */}
              </div>
                <GamesGenreGrid />
            </section>

          {/* <GenresGrid gamesByGenre={ gamesByGenre }/> */}
          {/* {
            data.map(genre => (
              <GameList 
                key={genre.id} 
                genre={genre}
                onClick={ () => setGamesByGenre( genre ) }
              />
            ))
          } */}
          {/* <GamesGenreGrid slug={ slug } /> */}
          </>
      }
    </>
  )
}

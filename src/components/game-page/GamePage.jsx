import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataFetchContext'
import { useFetchGames, useGetGamesByName } from '../../hooks/useFetchGame'
import { GameMediumCard } from '../videogames-lists/GameMediumCard'
import { IoIosArrowBack as LeftArrow, IoIosArrowForward as RightArrow } from 'react-icons/io'
import { LoadingComponent } from '../loading/LoadingComponent'
import { ResultHeader } from '../search-page/ResultHeader'
import { GameResults } from './GameResults'
import { GetGames } from '../../data/fetchGames'
import { usePagination } from '../../hooks/usePagination'
import { Pagination } from '../pagination/Pagination'

export const GamePage = ( ) => {
  const {
    handleNextPage, 
    handlePreviousPage, 
    currentPage, 
    page, 
    myLoad,
    setMyLoad, setCurrentPage } = usePagination( )
  const { data, loading } = useFetchGames( page )
  // const [currentPage, setCurrentPage] = useState(1)
  // debugger
  // useEffect(() => {
  //   setMyLoad(loading)
  // }, [ data ])
  useEffect(() => {
    setMyLoad(loading)
  }, [ data ])

  useEffect(() => {
    setCurrentPage(currentPage)
    setMyLoad(true)
  }, [page])
  // debugger
  const next  = !loading && data[1]
  const previous = !loading && data[2]
  // debugger
  return (
    
       <>
      {
        myLoad 
          ? <LoadingComponent />
          : <section id="games" className="second__container games__list">
          <GameResults /> 
          <div className="cards__medium__container">
              {
                data[0].map( data => (
                  <GameMediumCard key={ data.id.toString() }  className="animate__animated animate__fadeIn" data={ data }/>
                ))
              }
            </div>
            <Pagination pagination={{ handleNextPage, handlePreviousPage, currentPage, next, previous }}/>
      
    </section>
      }
            </>
  )
}

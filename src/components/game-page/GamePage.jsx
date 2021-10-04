import React, { useContext, useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
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
import { useFullData } from '../../hooks/useFullData'
import { ShowMoreButton } from '../helpers/ShowMoreButton'

export const GamePage = React.memo(( ) => {

  
  const {
    handleNextPage, 
    handlePreviousPage, 
    currentPage, 
    page, 
    myLoad,
    setMyLoad, setCurrentPage,loadMoreGames, setLoadMoreGames } = usePagination( )
    
  const { data, loading } = useFetchGames( page )
  
  const {moreLoad, pagination, fullData} = useFullData( data )
  // debugger
  const {next}  = !!pagination && pagination
  // const results = !loading && data[0]
  // debugger
  // const {next}  = !!pagination && pagination
  // const results = !loading && data[0]
  // debugger
  useEffect(() => {
    setMyLoad(false)
    setLoadMoreGames(true)
  }, [ data ])

  useEffect(() => {
    setLoadMoreGames(false)
  }, [ fullData ])
  
  // useEffect(() => {
  //   setFullLoad( moreLoad.flat().filter(item => {return item !== undefined}) )
  // }, [ data ])
  // addToggle
  // debugger
  return (
    
       <>
      {
        loading 
          ? <LoadingComponent />
          : <section id="games" className="second__container games__list">
          <GameResults /> 
          <div id="infinite__scroll" className="cards__medium__container">

              {
                fullData.map( data => (
                  <GameMediumCard key={ data.id.toString() }  className="animate__animated animate__fadeIn" data={ data }/>
                  ))
                }
              {/* </InfiniteScroll> */}
            </div>
            {/* <Pagination pagination={{ handleNextPage, handlePreviousPage, currentPage, next, previous }}/> */}
            <ShowMoreButton myData={ { handleNextPage, loadMoreGames, next } }/>
      
    </section>
      }
            </>
  )
})

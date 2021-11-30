import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataFetchContext'
import { useGamesByGenre } from '../../hooks/useFetchGame'
import { usePagination } from '../../hooks/usePagination'
import { LoadingComponent } from '../loading/LoadingComponent'
import { Pagination } from '../pagination/Pagination'
import { GameMediumCard } from '../videogames-lists/GameMediumCard'
import InfiniteScroll from 'react-infinite-scroll-component';
import { ShowMoreButton } from '../helpers/ShowMoreButton'
import { useFullData } from '../../hooks/useFullData'
import { BackgroundAnimation } from '../animations/BackgroundAnimation'


export const GamesGenreGrid = (  ) => {
  const { gamesByGenre, setGamesByGenre } = useContext(DataContext)
  // debugger
  // const [nextPage, setNextPage] = useState( gamesByGenre )


  const {
    handleNextPage, handlePreviousPage, page, myLoad, currentPage, setMyLoad, setPage, setCurrentPage, loadMoreGames, setLoadMoreGames } = usePagination( )

  useEffect(() => {
    setPage(gamesByGenre)
  }, [ gamesByGenre ])
    
  const { data, loading } = useGamesByGenre( page )
  // const { dataGames } = !!data && data 
  const {moreLoad, pagination, fullData, setMoreLoad} = useFullData( !!data && data )
  // debugger
  useEffect(() => {
    setMoreLoad([])
  }, [ gamesByGenre ])
  // debugger
  const { next, count } = !!pagination && pagination
  // debugger
  useEffect(() => {
    setMyLoad(false)
    setLoadMoreGames(true)
    
  }, [ data ])

  useEffect(() => {
    setLoadMoreGames(false)
  }, [ fullData ])


  const [buttonLoad, setButtonLoad] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setButtonLoad(false)
    }, 2000);
  }, [])
  // debugger
  return (
    <>
    {
      loading
      ? <LoadingComponent />
      :<>
        
          <ul className="games__container">

          {/* <InfiniteScroll
             dataLength={data[0].length}
             next={ () => setNextPage(next) }
             hasMore={true}
             loader={<h4>Loading...</h4>}
             scrollableTarget="scrollableDiv"
             
            > */}
         {
           fullData.map((data, index) => (
             data.image &&
             <GameMediumCard key={ data.id } values={{ data, index }}/>
             ))
            }
          {/* </InfiniteScroll> */}
        {/* <Pagination pagination={{ handleNextPage, handlePreviousPage, currentPage, next, previous }}/> */}
            </ul>
        {
          fullData.length > 0 &&
          <ShowMoreButton values={ {next, handleNextPage, loadMoreGames} }/>
        }
        <BackgroundAnimation />
        </>
    }
    </>
  )
}

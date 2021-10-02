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
  // debugger
  const {moreLoad, pagination, fullData, setMoreLoad} = useFullData( !!data && data )
  const { next } = !!pagination && pagination

  useEffect(() => {
    setMyLoad(loading)
  }, [ data ])

  useEffect(() => {
    setMyLoad(true)
    setMoreLoad([])
    setLoadMoreGames(true)
  }, [ gamesByGenre ])

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
      <h2 className="list--title">{ gamesByGenre }</h2>
    {
      myLoad
        ? <LoadingComponent />
        :<>
        <section id="scrollableDiv" className="genre__games__grid second__container animate__animated animate__fadeIn">
          {/* <InfiniteScroll
             dataLength={data[0].length}
             next={ () => setNextPage(next) }
             hasMore={true}
             loader={<h4>Loading...</h4>}
             scrollableTarget="scrollableDiv"
             
          > */}
         {
           fullData.map(data => (
             <GameMediumCard key={ data.id } data={ data }/>
             ))
            }
          {/* </InfiniteScroll> */}
        {/* <Pagination pagination={{ handleNextPage, handlePreviousPage, currentPage, next, previous }}/> */}
        </section>
        {
          !buttonLoad && <ShowMoreButton myData={ {next, handleNextPage, loadMoreGames} }/>
        }
        </>
    }
    </>
  )
}

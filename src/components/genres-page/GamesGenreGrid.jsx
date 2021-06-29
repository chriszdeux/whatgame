import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataFetchContext'
import { useGamesByGenre } from '../../hooks/useFetchGame'
import { usePagination } from '../../hooks/usePagination'
import { LoadingComponent } from '../loading/LoadingComponent'
import { Pagination } from '../pagination/Pagination'
import { GameMediumCard } from '../videogames-lists/GameMediumCard'
import InfiniteScroll from 'react-infinite-scroll-component';


export const GamesGenreGrid = (  ) => {
  const { gamesByGenre, setGamesByGenre } = useContext(DataContext)
  // debugger
  const [nextPage, setNextPage] = useState( gamesByGenre )


  const {
    handleNextPage, handlePreviousPage, page, myLoad, currentPage, setMyLoad, setPage, setCurrentPage } = usePagination( )

    useEffect(() => {
      setNextPage(gamesByGenre)
    }, [ nextPage ])
  // const { slug } = gamesByGenre
  const { data, loading } = useGamesByGenre( nextPage )
  
    // useEffect(() => {
    //   setGamesByGenre(page)
    //   // setCurrentPage(1)
    // }, [ page ])

  useEffect(() => {
    // setMyLoad(loading)
    // setPage(gamesByGenre)
    
  },[  data ])
  
  // useEffect(() => {
  //   // setCurrentPage(currentPage)
  //   setMyLoad(true)
  //   // setGamesByGenre( page )
  // }, [ nextPage ])
  // debugger
  const next  = !loading && data[1]
  const previous = !loading && data[2]
  const count = !loading && data[3]
  // debugger

  return (
    <>
      <h2 className="list--title">{ gamesByGenre }</h2>
    {
      loading
        ? <LoadingComponent />
        :<>
        <section id="scrollableDiv" className="genre__games__grid second__container animate__animated animate__fadeIn">
          <InfiniteScroll
             dataLength={data[0].length}
             next={ () => setNextPage(next) }
             hasMore={true}
             loader={<h4>Loading...</h4>}
             scrollableTarget="scrollableDiv"
             
          >
         {
           data[0].map(data => (
             <GameMediumCard key={ data.id } data={ data }/>
             ))
            }
          </InfiniteScroll>

        <Pagination pagination={{ handleNextPage, handlePreviousPage, currentPage, next, previous }}/>
        </section>
        </>
    }
    </>
  )
}

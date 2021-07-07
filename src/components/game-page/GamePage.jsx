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

export const GamePage = ( ) => {
  const {
    handleNextPage, 
    handlePreviousPage, 
    currentPage, 
    page, 
    myLoad,
    setMyLoad, setCurrentPage,loadMoreGames, setLoadMoreGames } = usePagination( )
    
  const { data, loading } = useFetchGames( page )
  const {moreLoad, pagination, fullData} = useFullData( data )
  const { next } = !!pagination && pagination
  // debugger
  // const { next, previuos, count, fullData } = !loading && moreLoad
  // debugger
  // const [moreLoad, setMoreLoad] = useState( [] )
  // const [pagination, setPagination] = useState()
  // // const [fullLoad, setFullLoad] = useState([])
  // // const { next, previous, count } = pagination
  // useEffect(() => {
  //   setMoreLoad(c => [...c, data[0]])
  //   setPagination({
  //     next: data[1],
  //     previous: data[2],
  //     count: data[4],
  //   })
  // }, [ data ])

  // useEffect(() => {
  //   setFullLoad( moreLoad.flat().filter(item => {return item !== undefined}) )
  // }, [ loading === false ])
  // debugger    
  // debugger
  const results = !loading && data[0]
  // debugger
  // if(data !== []) {
  //   setMoreLoad(moreLoad => [...moreLoad, results])
  // }
  // const next  = !loading && data[1]
  // const previous = !loading && data[2]
  // const count = !loading && data[4]
  // let myData = !loading && [data => [...data, results]]
  // let moreData = !loading && [...myData, results]
  // let fullData = !loading && moreData.flat()
  // const fullData = moreLoad.flat().filter(item => {return item !== undefined})
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

  // debugger
  return (
    
       <>
      {
        loading 
          ? <LoadingComponent />
          : <section id="games" className="second__container games__list">
          <GameResults /> 
          <div id="infinite__scroll" className="cards__medium__container">
            {/* <InfiniteScroll
            style={
              {
                display: 'flex',
                flexWrap: 'wrap'
              }
            } 
              dataLength={ fullData.length }
              next={ () => handleNextPage(pagination.next) }
              inverse={ true }
              hasMore={ true }
              loader={<h3>loading...</h3>}
              scrollableTarget="infinite__scroll"
            > */}

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
}

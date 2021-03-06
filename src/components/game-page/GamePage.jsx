import React, { useContext, useRef } from 'react'
import {  GamesDataContext } from '../../context/DataFetchContext'
import { GameMediumCard } from '../videogames-lists/GameMediumCard'
import { LoadingComponent } from '../loading/LoadingComponent'
import { GameResults } from './GameResults'
import { ShowMoreButton } from '../helpers/ShowMoreButton'
import { BackgroundAnimation } from '../animations/BackgroundAnimation'

export const GamePage = React.memo(({history} ) => {
// debugger
const refGames = useRef(null)
  const { fullData,
    loading,
    next,
    handleNextPage,
    loadMoreGames } = useContext(GamesDataContext)
    // debugger
   

    // useEffect(() => {
    //   setTimeout(() => {
    //     handleToTop()
        
    //   }, 1000);
    // }, [fullData])
    // debugger
  // const {
  //   handleNextPage, 
  //   handlePreviousPage, 
  //   currentPage, 
  //   page, 
  //   myLoad,
  //   setMyLoad, setCurrentPage,loadMoreGames, setLoadMoreGames } = usePagination( )
    
  // const { data, loading } = useFetchGames( page )
  
  // const {moreLoad, pagination, fullData} = useFullData( data )
  // // debugger
  // const {next}  = !!pagination && pagination
  // // const results = !loading && data[0]
  // // debugger
  // // const {next}  = !!pagination && pagination
  // // const results = !loading && data[0]
  // // debugger
  // useEffect(() => {
  //   setMyLoad(false)
  //   setLoadMoreGames(true)
  // }, [ data ])

  // useEffect(() => {
  //   setLoadMoreGames(false)
  // }, [ fullData ])
  
  // useEffect(() => {
  //   setFullLoad( moreLoad.flat().filter(item => {return item !== undefined}) )
  // }, [ data ])
  // addToggle
  // debugger
  // useEffect(() => {
  //   if(!refGames) return refGames.current.scrollTop = 500
    
  // }, [fullData])
  // debugger

  return (
    
       <>
      {
        loading 
          ? <LoadingComponent />
          : <section id="games" className="second__container games__list">
          <GameResults /> 
          <ul  className="games__container" ref={!!refGames && refGames}>

              {
                fullData.map( (data, index) => (
                  data.image &&
                  <GameMediumCard key={ data.id }   values={{ data, index }}/>
                  ))
                }
              {/* </InfiniteScroll> */}
            </ul>
            {/* <Pagination pagination={{ handleNextPage, handlePreviousPage, currentPage, next, previous }}/> */}
            {
              fullData.length > 0 &&
                <ShowMoreButton values={ { handleNextPage, loadMoreGames, next , refGames} }/>
            }
            
            <BackgroundAnimation />

    </section>
      }
            </>
  )
})

import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataFetchContext'
import { useFetchGames, useGetGamesByName } from '../../hooks/useFetchGame'
import { GameMediumCard } from '../videogames-lists/GameMediumCard'
import { ResultHeader } from './ResultHeader'
import { SuggestionsSearch } from './SuggestionsSearch'
import { IoIosArrowBack as LeftArrow, IoIosArrowForward as RightArrow } from 'react-icons/io'
import { LoadingComponent } from '../loading/LoadingComponent'
import { Pagination } from '../pagination/Pagination'
import { usePagination } from '../../hooks/usePagination'
import { useFullData } from '../../hooks/useFullData'
import { ShowMoreButton } from '../helpers/ShowMoreButton'

export const SearchPage = () => {
  const { searchGame } = useContext( DataContext )

  const {handleNextPage, handlePreviousPage, page, myLoad, currentPage, setMyLoad, setPage, setCurrentPage, loadMoreGames, setLoadMoreGames} = usePagination(  )
  
  useEffect(() => {
    setPage(searchGame)
  }, [ searchGame ])

  const { data, loading } = useGetGamesByName( page )
  // debugger
  // useEffect(() => {
  //   setMyLoad(true)
  // }, [data])
  // const { dataGame } = !!data && data
  const { moreLoad, pagination, fullData, setMoreLoad } = useFullData(!!data && data)
// debugger
   
useEffect(() => {
  setMoreLoad([])
}, [ searchGame ])

  // const [cleanGames, setCleanGames] = useState([])
  // const {next} = !data && data[1]
  const { next } = !!pagination && pagination
  // useEffect(() => {
  //   setMyLoad(loading)
    
  // }, [ data ])
  
  // useEffect(() => {
    
    // }, [ loading ])
 
    
    useEffect(() => {
      setMyLoad(true)
      setLoadMoreGames(true)
    }, [data])
    
    useEffect(() => {
      // setMyLoad(false)
      setLoadMoreGames(false)
    }, [ fullData ])
    
    // debugger
    // debugger
    // debugger
    
    // const handleLoadingMoreGames = () => {
      
      // }
      
      // for(let i = 1; i <=10; i++) {
        //   pages.push(i);
        // }
        // debugger
        
        return (
          
          <>
      {
        loading 
        ? <LoadingComponent data={ searchGame }/>
        : <section className="second__container games__list">
          <ResultHeader searchGame={ searchGame }/> 
          <div className="games__container">
              {
                fullData.map( data => (
                  <GameMediumCard key={ data.id.toString() }  className="animate__animated animate__fadeIn" data={ data }/>
                ))
              }
            </div>
            <ShowMoreButton className="animate__animated animate__fadeIn" values={ {next, handleNextPage, loadMoreGames} }/>
            {/* <Pagination pagination={{ handleNextPage, handlePreviousPage, currentPage, next, previous }}/> */}
            </section>
      }
            </>
  )
}

import React, { useEffect } from 'react'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { SearchPage } from '../components/search-page/SearchPage'
import { Header } from '../components/header/Header'
import { Home } from '../components/home/Home'
import { ModalCard } from '../components/modal/ModalCard'
import { GameList } from '../components/videogames-lists/GameList'
import { useFetchGames, useFetchGenres } from '../hooks/useFetchGame'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import history from './history'
import { GenrePage } from '../components/genres-page/GenrePage'
import { LoadingComponent } from '../components/loading/LoadingComponent'
import { GamePage } from '../components/game-page/GamePage'
import { GamesMap } from '../components/videogames-lists/GamesMap'
import { FavGamesPage } from '../components/favorite-games-page/FavGamesPage'
import { ApiComponent } from '../components/api-component/ApiComponent'
import { ScrollTop } from '../components/helpers/ScrollTop'
import { GamesDataContext } from '../context/DataFetchContext'
import { usePagination } from '../hooks/usePagination'
import { useFullData } from '../hooks/useFullData'
import { BackgroundAnimation } from '../components/animations/BackgroundAnimation'



export const GameRouter = () => {
  // const dataSlice =  data.slice(6, 11);
  // debugger

  const {
    handleNextPage, 
    handlePreviousPage, 
    currentPage, 
    page, 
    myLoad,
    setMyLoad, setCurrentPage,loadMoreGames, setLoadMoreGames } = usePagination( )
    
  const { data, loading } = useFetchGames( page )

  const {moreLoad, pagination, fullData} = useFullData( data )
  const {next}  = !!pagination && pagination
  useEffect(() => {
    setMyLoad(false)
    setLoadMoreGames(true)
  }, [ data ])

  useEffect(() => {
    setLoadMoreGames(false)
  }, [ fullData ])
  
  return (
    <>
    <Router history={ history }>
      <Header />
      <Switch>
        <Route  exact path="/" component={ Home }>
          <Home/>
        </Route>
        <Route  exact path="/home" component={ Home }>
          <Home/>
        </Route>
        

        <Route exact path="/genres" component={ GenrePage }>
        </Route>
        <Route exact path="/search-result" component={ SearchPage }>
        </Route>
        <Route exact path="/favorite-games" component={ FavGamesPage }>
        </Route>
        <Route  exact path="/api" component={ ApiComponent } />
        <GamesDataContext.Provider value={{
          fullData,
          loading,
          next,
          handleNextPage,
          loadMoreGames
        }}>
          <Route exact path="/games" component={ GamePage }>

          </Route>
        </GamesDataContext.Provider>
      </Switch>
      {/* <ScrollTop /> */}
      </Router>

    </>
  )
}

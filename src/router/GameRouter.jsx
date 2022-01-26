import React, { useContext, useEffect } from 'react';
import Modal from 'react-modal';
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
  Redirect,
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
import { DataContext, GamesDataContext } from '../context/DataFetchContext'
import { usePagination } from '../hooks/usePagination'
import { useFullData } from '../hooks/useFullData'
import { BackgroundAnimation } from '../components/animations/BackgroundAnimation'
import { CardContent } from '../components/modal/CardContent'

import { VscChromeClose as CloseIcon } from 'react-icons/vsc';


export const GameRouter = () => {
  // const dataSlice =  data.slice(6, 11);
  // debugger
  const {handleModal} = useContext(DataContext)
  const { openContent, name, slug, handleOpenModal, animation } = handleModal
  const {
    handleNextPage, 
    handlePreviousPage, 
    currentPage, 
    page, 
    myLoad,
    setMyLoad, setCurrentPage,loadMoreGames, setLoadMoreGames } = usePagination( )
    const { openGameModal, handleOpenGameModal, handleCloseGameModal } = useContext(DataContext)

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
<<<<<<< HEAD
        <Route exact path="/" component={ Home } />
        <Route  exact path="/whatgame" component={ Home }/>
=======
        <Route exact path="/whatgame" component={ Home }/>
        <Route  exact path="/" component={ Home }>
          <Home/>
        </Route>
>>>>>>> 494dce96885744ecb16c668e97a9e42d3b1876e3
        {/* <Route  exact path="/games" component={ GamePage }>
          <Home/>
        </Route> */}
        

        <Route exact path="/whatgame/genres" component={ GenrePage }>
        </Route>
        <Route exact path="/whatgame/search-result" component={ SearchPage }>
        </Route>
        <Route exact path="/whatgame/favorite-games" component={ FavGamesPage }>
        </Route>
        <Route  exact path="/whatgame/api" component={ ApiComponent } />
        <Route exact path="/whatgame/games">
          <GamesDataContext.Provider value={{
            fullData,
            loading,
            next,
            handleNextPage,
            loadMoreGames
          }}>
            <GamePage />
          </GamesDataContext.Provider>
          </Route>
          <Route>
          </Route>
<<<<<<< HEAD
          <Redirect to="/whatgame" component={ Home }/>
=======
        </GamesDataContext.Provider>
          <Redirect to="/" />
>>>>>>> 494dce96885744ecb16c668e97a9e42d3b1876e3
      </Switch>

      <Modal
        isOpen={ openGameModal }
        onRequestClose={ handleCloseGameModal }
        ariaHideApp={false}
        className="Modal "
        overlayClassName="Overlay--cards"
        
        >
        <CloseIcon 
          className="close--icon animate__animated animate__fadeIn"
          onClick={ handleCloseGameModal }
          />
        <CardContent />
      </Modal>
{/* 
      <Modal
        isOpen={ openContent }
        onRequestClose={ handleOpenModal }
        ariaHideApp={false}
        className="Modal "
        overlayClassName="Overlay--cards"
        
        >
        <CloseIcon 
          className="close--icon animate__animated animate__fadeIn"
          onClick={ handleOpenModal }
          />
        <CardContent values={{ slug, animation }}/>
      </Modal> */}
      {/* <ScrollTop /> */}
      </Router>

    </>
  )
}

import React from 'react'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { GamePage } from '../components/game-page/GamePage'
import { Header } from '../components/header/Header'
import { Home } from '../components/home/Home'
import { ModalCard } from '../components/modal/ModalCard'
import { GameList } from '../components/videogames-lists/GameList'
import { useFetchGenres } from '../hooks/useFetchGame'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { SearchContext } from '../context/UseResultsGamesContext'
export const GameRouter = () => {
  const { dataGenre, loading } = useFetchGenres()
    
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route  exact path="/">
          <Home/>
          {
            loading 
            ? <h2>Loading</h2>
            : dataGenre.map(genre => (
              <LazyLoadComponent 
              key={genre.id}
              // delayTime="3000"
              >
              <GameList key={genre.id} genre={genre}/>
              </LazyLoadComponent>
              ))
            }
        </Route>

        <Route exact="/results">
          <GamePage />
        </Route>

      </Switch>
      </Router>
    </>
  )
}

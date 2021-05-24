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
import history from './history'
import { GenrePage } from '../components/genres-page/GenrePage'



export const GameRouter = () => {
  const { data, loading } = useFetchGenres()
  const dataSlice =  data.slice(0, 5);
  return (
    <>
    <Router history={ history }>
      <Header />
      <div>
        <Switch>
          <Route  exact path="/" component={ Home }>
            <Home/>
            {
              loading 
              ? <h2>Loading</h2>
              : dataSlice.map(genre => (
                <LazyLoadComponent 
                key={genre.id}
                // delayTime="3000"
                >
                <GameList key={genre.id} genre={genre}/>
                </LazyLoadComponent>
                ))
              }
          </Route>

          <Route exact path="/genres" component={ GenrePage }>
          </Route>
          <Route exact path="/games" component={ GamePage }>
          </Route>

        </Switch>
      </div>
      </Router>
    </>
  )
}

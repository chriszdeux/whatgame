import React from 'react'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { SearchPage } from '../components/search-page/SearchPage'
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
import { LoadingComponent } from '../components/loading/LoadingComponent'
import { GamePage } from '../components/game-page/GamePage'
import { GamesMap } from '../components/videogames-lists/GamesMap'



export const GameRouter = () => {
  // const dataSlice =  data.slice(6, 11);
  // debugger
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
        <Route exact path="/games" component={ GamePage }>

        </Route>
        <Route exact path="/genres" component={ GenrePage }>
        </Route>
        <Route exact path="/search-result" component={ SearchPage }>
        </Route>
      </Switch>
      </Router>
    </>
  )
}

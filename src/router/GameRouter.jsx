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



export const GameRouter = () => {
  const { data, loading } = useFetchGenres()
  const dataSlice =  data.slice(6, 11);
  // debugger
  return (
    <>
    <Router history={ history }>
      {
        loading
          ? <LoadingComponent />
          :<> 
            <Header />
            <div>
              <Switch>
                <Route  exact path="/" component={ Home }>
                  <Home/>
                  {
                    data.map(genre => (
                      <LazyLoadComponent 
                      key={genre.id}
                      delayTime="3000"
                      >
                      <GameList key={genre.id} genre={genre}/>
                      </LazyLoadComponent>
                      ))
                    }
                </Route>
                <Route exact path="/games" component={ GamePage }>

                </Route>
                <Route exact path="/genres" component={ GenrePage }>
                </Route>
                <Route exact path="/search-result" component={ SearchPage }>
                </Route>
      
              </Switch>
            </div>
          </> 
      }
      </Router>
    </>
  )
}

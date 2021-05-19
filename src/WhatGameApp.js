import React from 'react'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { GamePage } from './components/game-page/GamePage'
import { Header } from './components/header/Header'
import { Hero } from './components/hero/Hero'
import { ModalCard } from './components/modal/ModalCard'
import { GameList } from './components/videogames-lists/GameList'
import { useFetchGenres } from './hooks/useFetchGame'

import 'react-lazy-load-image-component/src/effects/opacity.css';
export const WhatGameApp = () => {
  const { dataGenre, loading } = useFetchGenres()
  // debugger
  
  return (
    <>
      <Header />
      <Hero />
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
      {/* {
        loading 
        ? <h2>Loading</h2>
        : dataGenre.map(genre => (
            <GameList key={genre.id} genre={genre}/>
        ))
      } */}
      <ModalCard />
      <GamePage />
    </>
  )
}

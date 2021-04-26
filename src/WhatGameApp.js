import React from 'react'
import { Header } from './components/header/Header'
import { Hero } from './components/hero/Hero'
import { ModalCard } from './components/modal/ModalCard'
import { GameList } from './components/videogames-lists/GameList'

export const WhatGameApp = () => {
  return (
    <>
      <Header />
      <Hero />
      <GameList/>
      <GameList/>
      <GameList/>
      <ModalCard />
    </>
  )
}

import React, { useContext } from 'react'
import { DataContext } from '../../context/DataFetchContext'
import { GameList } from '../videogames-lists/GameList'
import { GameSmallCard } from '../videogames-lists/GameSmallCard'
import { GenresGrid } from './GenresGrid'
import { HomeImage } from './HomeImage'

import '../../styles/genres-style.css'

export const GenrePage = () => {

  // debugger
  return (
    <>
      <main className="genres">
        <h2 className="genres--title">Genres</h2>
        <HomeImage className="genre__home__img" />      
        <div className="hero__text__content">
          {/* <p className="hero--text">{ name }</p> */}
        </div>
      </main>

      <GenresGrid />
    </>
  )
}

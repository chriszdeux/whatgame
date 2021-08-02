import React, { useEffect, useReducer, useState } from 'react'
import { favoritesReducer } from './components/helpers/favoritesReducer';
import { FavSubmit } from './components/helpers/FavSubmit';
import { DataContext } from './context/DataFetchContext'
import { useFetchGenres, useGetGamesByName } from './hooks/useFetchGame'
import { useShowContent } from './hooks/useShowContent';

import { GameRouter } from './router/GameRouter';

export const WhatGameApp = () => {
  const [ searchGame, setSearchGame ] = useState( );
  const { resultData, loading } = useGetGamesByName( searchGame )

  const [stateGenre, setStateGenre] = useState( )
  
  const { data: dataGenres, loading: genreLoading } = useFetchGenres()
  // debugger
  const init = () => {
    return JSON.parse(localStorage.getItem('favoriteGames')) || []
  }

  const [ openContent, handleOpenContent, animation ] = useShowContent()
  // debugger
  const [gamesByGenre, setGamesByGenre] = useState( '' )
  
  const [favoriteGames, dispatch] = useReducer(favoritesReducer, [], init)
  // debugger
  useEffect(() => {
    localStorage.setItem('favoriteGames', JSON.stringify(favoriteGames))
  }, [ favoriteGames ])
  return (
    <>
      <DataContext.Provider value={ 
        {
          resultData,
          searchGame, 
          setSearchGame, 
          loading,
          dataGenres,
          genreLoading,
          setStateGenre,
          openContent,
          handleOpenContent,
          animation,
          gamesByGenre,
          setGamesByGenre,
          favoriteGames,
          dispatch
        } 
        }>
        <GameRouter />
      </DataContext.Provider>
    </>
  )
}

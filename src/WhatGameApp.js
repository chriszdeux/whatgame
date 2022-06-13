import React, { useEffect, useReducer, useState } from 'react'
import { favoritesReducer } from './components/helpers/favoritesReducer';
import { DataContext } from './context/DataFetchContext'
import { useFetchGames, useFetchGenres, useGetGamesByName } from './hooks/useFetchGame'
import { useModalGame } from './hooks/useModalGame';
import { useShowContent } from './hooks/useShowContent';

import { GameRouter } from './router/GameRouter';

export const WhatGameApp = () => {
  const [ searchGame, setSearchGame ] = useState( );
  const { resultData, loading } = useGetGamesByName( searchGame )
  const [mainModal, setMainModal] = useState({
    name: '',
    image: '',
    open: false
  })

  const { openGameModal, gameModalInfo, handleCloseGameModal, handleOpenGameModal, animation } = useModalGame()

  const fetchGames = useFetchGames()

  
  const { genresData, genreCollection } = useFetchGenres();
  const { data: dataGenres, loading:genreLoading } = genresData
  const init = () => {
    return JSON.parse(localStorage.getItem('favoriteGames')) || []
  }

  const [ openContent, handleOpenContent ] = useShowContent()

  const [gamesByGenre, setGamesByGenre] = useState( '' )
  
  const [favoriteGames, dispatch,] = useReducer(favoritesReducer, [], init)


  const [handleModal, setHandleModal] = useState({})
  
  useEffect(() => {
    localStorage.setItem('favoriteGames', JSON.stringify(favoriteGames))
  }, [ favoriteGames ])

  return (
    <>
      <DataContext.Provider value={ 
        {
          fetchGames,
          resultData,
          searchGame, 
          setSearchGame, 
          loading,
          dataGenres,
          genreLoading,
          openContent,
          handleOpenContent,
          // animation,
          gamesByGenre,
          setGamesByGenre,
          favoriteGames,
          dispatch,
          genreCollection,
          setHandleModal,
          handleModal,
          setMainModal,
          mainModal,
          openGameModal, 
          gameModalInfo, 
          handleCloseGameModal, 
          handleOpenGameModal, 
          animation 
          // genreData
          // allGenresGames,
          // handleAllGenresGames
        } 
        }>
        <GameRouter />
      </DataContext.Provider>
    </>
  )
}

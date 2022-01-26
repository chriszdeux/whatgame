import React, { useEffect, useReducer, useState } from 'react'
import { favoritesReducer } from './components/helpers/favoritesReducer';
import { DataContext } from './context/DataFetchContext'
import { useFetchGenres, useGetGamesByName } from './hooks/useFetchGame'
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
  // const handleMainModal = (name, image) => {

  // }

  


  
  const { genresData, genreCollection } = useFetchGenres();
  const { data: dataGenres, loading:genreLoading } = genresData
  // debugger
  // const {data: dataGenres, loading: genreLoading,  genreCollection} = useFetchGenres();
  // debugger

  // const [allGenresGames, setAllGenresGames] = useState([])

  // const handleAllGenresGames = (data) => {
  //   setAllGenresGames(c => [...c, {

  //   }].filter(item => item !== undefined))
  // }
  // const { data: dataGenres, loading: genreLoading } = useFetchGenres();
  // console.log(dataGenres)
  // debugger
  // console.log(dataGenres)
  const init = () => {
    return JSON.parse(localStorage.getItem('favoriteGames')) || []
  }

  const [ openContent, handleOpenContent ] = useShowContent()
  // debugger
  const [gamesByGenre, setGamesByGenre] = useState( '' )
  
  const [favoriteGames, dispatch,] = useReducer(favoritesReducer, [], init)
  // debugger

  const [handleModal, setHandleModal] = useState({})
  
  useEffect(() => {
    localStorage.setItem('favoriteGames', JSON.stringify(favoriteGames))
  }, [ favoriteGames ])
  // debugger
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

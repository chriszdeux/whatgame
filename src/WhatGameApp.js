import React, { useState } from 'react'
import { DataContext } from './context/DataFetchContext'
import { useFetchGenres, useGetGamesByName } from './hooks/useFetchGame'
import { useShowContent } from './hooks/useShowContent';

import { GameRouter } from './router/GameRouter';

export const WhatGameApp = () => {
  const [ searchGame, setSearchGame ] = useState( );
  const { resultData, loading } = useGetGamesByName( searchGame )

  const [stateGenre, setStateGenre] = useState( )
  const { data, loading: genreLoading } = useFetchGenres()
  // debugger

  const [ openContent, handleOpenContent ] = useShowContent()
  // debugger
  const [gamesByGenre, setGamesByGenre] = useState( '' )
  // debugger
  return (
    <>
      <DataContext.Provider value={ 
        {
          resultData,
          searchGame, 
          setSearchGame, 
          loading,
          data,
          genreLoading,
          setStateGenre,
          openContent,
          handleOpenContent,
          gamesByGenre,
          setGamesByGenre
        } 
        }>
        <GameRouter />
      </DataContext.Provider>
    </>
  )
}

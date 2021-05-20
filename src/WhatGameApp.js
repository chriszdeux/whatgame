import React, { useState } from 'react'
import { SearchContext } from './context/UseResultsGamesContext'
import { useGetGamesByName } from './hooks/useFetchGame'

import { GameRouter } from './router/GameRouter';

export const WhatGameApp = () => {
  const [ searchGame, setSearchGame ] = useState( );
  const { resultData, loading } = useGetGamesByName( searchGame )
  // debugger
  return (
    <>
      <SearchContext.Provider value={ {resultData, setSearchGame, loading} }>
        <GameRouter />
      </SearchContext.Provider>
    </>
  )
}

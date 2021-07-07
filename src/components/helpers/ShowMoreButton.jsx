import React from 'react'
import { usePagination } from '../../hooks/usePagination'

export const ShowMoreButton = ( {myData} ) => {
  const { handleNextPage, loadMoreGames, next } = !!myData && myData
    // debugger
  return (
    <div className="scroll__more">
      <button 
        className="show--more"
        onClick={() => handleNextPage(next)}
        eslint-disable-next-line 
        // className={ myLoad &&'loading--button--animation'  }
      >{
        loadMoreGames
          ?  'loading...'
          : 'Show More'
      }</button>
    </div>
  )
}

import React, { useContext } from 'react'
import { DataContext } from '../../context/DataFetchContext'

export const SubMenuItem = ({ handleGenrePage }) => {
  
  const { dataGenres } = useContext(DataContext)
  // const { genreLoading, dataGenre, handleGenrePage } = values
  // const { dataGenre} = useContext(DataContext)
  // debugger
  return (
    <>
      {
        <ul className="sub--menu animate__animated animate__fadeIn">
      {
        dataGenres.map(item => ((
          <li 
            className="sub--menu--item"
            onClick={ () => handleGenrePage(item.slug) }
            
          >
            { item.name }
          </li>
        )))
      }
    </ul>
      }
    </>
  )
}

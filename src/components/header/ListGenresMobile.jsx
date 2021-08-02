import React, { useContext } from 'react'
import { DataContext } from '../../context/DataFetchContext'

export const ListGenresMobile = ({values}) => {
  
  const { dataGenres } = useContext( DataContext )
  const { changeAnimation2, handleGenrePage } = values
  return (
    <ul className={`sub__menu__genres ${ changeAnimation2 ? 'animate__animated animate__fadeInUp' : 'animate__animated animate__fadeOutDown' }`}>
      {
        dataGenres.map(item => (
          <li
            key={item.name} 
            className="genre--item"
            onClick={ () => handleGenrePage(item.slug) }
          >{item.name}
          
          </li>
        ))
      }
    </ul>
  )
}

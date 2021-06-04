import React, { useContext, useState } from 'react'
import { DataContext } from '../../context/DataFetchContext'

export const SuggestionsSearch = ({ data }) => {
  // const { id, name } = data
  // debugger
  const { setSearchGame } = useContext( DataContext )
  const [hover, setHover] = useState('')
  return (
    <div className="search__suggestions second__container">
      <h2 className="list--title">Maybe you try to say: </h2>
      <ul className="search__list">
        {
          data.map(({id, name, slug}) => (
            <li 
              className="search--item" 
              key={ id }
              onMouseEnter={() => setHover(name)}
              onMouseLeave={() => setHover('') }
              onClick={() => setSearchGame(slug)}
              >{  
                (name.length > 15)
                  ? `${ name.slice(0,15) }...`
                  : `${ name }`
                }
              </li>
          ))
        }
      </ul>
      
      {
        hover !== '' && <h2 className="zooming--title">{ hover }</h2>
      }
    </div>
  )
}

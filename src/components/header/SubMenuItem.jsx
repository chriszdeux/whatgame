import React from 'react'
import { Link } from 'react-router-dom';
import { useFetchGenres } from '../../hooks/useFetchGame';

export const SubMenuItem = () => {
  const { data, loading } = useFetchGenres()
  // debugger
  return (
    <ul className="submenu__container">
      {
        data.map(item => (
          <li 
            // key={ list.name }
            className="sub--list--item"
            // onClick={ handleClickSubmit }
            >
              {/* { JSON.parse((item)) } */}
              {/* <Link to={ list.page } >
                { list.name }
              </Link> */}
          </li>
        ))
      }
    </ul>
  )
}

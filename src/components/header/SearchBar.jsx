import React from 'react'
import { AiOutlineSearch as SearchIcon } from 'react-icons/ai';


export const SearchBar = () => {
  return (
    <form action="" className="search__bar">
        <input className="search--input" type="text"/>
        <SearchIcon className="search--icon"/>
      </form>
  )
}

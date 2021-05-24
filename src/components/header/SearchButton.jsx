import React from 'react'
import ReactDOM from 'react-dom'
// import history from ''
import { AiOutlineSearch as SearchIcon } from 'react-icons/ai';
import { useHistory } from 'react-router-dom'
export const SearchButton = () => {
   const history = useHistory(); 
  const handleClick = (  ) => {
    // history.replace('./games', null)
    // console.log(history)
    // debugger
  }
  // console.log(history)
  // debugger
  return (
    <button 
          type="submit" 
          className="button--submit"
          onClick={ handleClick }
        >
        <SearchIcon className="search--icon"/>
       </button>
  )
}

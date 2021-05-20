import React, { useContext, useState } from 'react'
import { AiOutlineSearch as SearchIcon } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../context/UseResultsGamesContext';
import { useGetGamesByName } from '../../hooks/useFetchGame';


export const SearchBar = ( { handleOpenContent } ) => {
  const { setSearchGame } = useContext( SearchContext )
  const [inputValue, setInputValue] = useState('')
  // const { setSearchGame } = useContext( SearchContext );
  // setSearchGame({
  //   name: 'arce',
  //   age: 28
  // })
  const handleOnChange = ( e ) => {
    setInputValue(e.target.value)
    // console.log(e.target.value)
  }
  
  const handleSubmit = ( e ) => {
    e.preventDefault();
    if(inputValue.length > 2) {
      setSearchGame( inputValue )
      setInputValue('')
      handleOpenContent(false)
    }
    // debugger
    // e.history.pushState(inputValue, 'New page', './genres')
  }
  // console.log(resultData)
  // debugger
  return (
    <>
    <form 
      className="search__bar"
      onSubmit={ handleSubmit }
      to="/genres"
    >
      <input 
        className="search--input" 
        type="text"
        value={ inputValue }
        onChange={ handleOnChange }
      />
      <Link to="/genres"> 
        <SearchIcon className="search--icon"/>
       {/* <button type="submit" className="button--submit">
       </button> */}
      </Link>
    </form>
        </>
  )
}

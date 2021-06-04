import React, { useContext, useState } from 'react'
import { unmountComponentAtNode } from 'react-dom'
import { Link, useHistory } from 'react-router-dom';
import { DataContext } from '../../context/DataFetchContext';
import { useGetGamesByName } from '../../hooks/useFetchGame';
import { SearchButton } from './SearchButton';

export const SearchBar = ( { handleOpenContent } ) => {

  const history = useHistory();
  const { setSearchGame } = useContext( DataContext )
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
      const replaceSimbols = /\s/gi
      setSearchGame( inputValue.toLowerCase().replace(replaceSimbols, '-') )
      setInputValue('')
      handleOpenContent(false)
      history.push('./games', null)
    }
    // debugger
    // history.push('./genres')
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
      to="/games"
    >
      <input 
        className="search--input" 
        type="text"
        value={ inputValue }
        onChange={ handleOnChange }
      />
      {/* <Link to="/genres"> 
      </Link> */}
      <SearchButton />
    </form>
        </>
  )
}

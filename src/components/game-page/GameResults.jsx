import React, { useRef } from 'react';
import { SearchButton } from '../header/SearchButton';

import '../../styles/game-page-style.css';
import { OrderBy } from '../search-page/OrderBy';
export const GameResults = ( { data } ) => {
  const inputRef = useRef(null)
  // debugger
  return (
    <form className="result">
      {/* <div className="header__result"> */}
        <h3 className="list--title">Search <span className="highlight--text">Result ...</span></h3>
        {/* <OrderBy /> */}
        {/* <div className="page__form">
          <label htmlFor="page--number" className="page--input--label">Search by page</label>
          <input type="number" id="page--number"name className="page--input"
          ref={inputRef}
          placeholder="page by number"
          />

        <SearchButton />
        </div> */}
      {/* </div> */}
    </form>
  )
}

import React from 'react';


import '../../styles/game-page-style.css';
import { OrderBy } from '../search-page/OrderBy';
export const GameResults = ( { data } ) => {
  // debugger
  return (
    <form className="result">
      <div className="header__result">
        <h3 className="list--title">Search <span className="highlight--text">Result ...</span></h3>
        <OrderBy />
      </div>
    </form>
  )
}

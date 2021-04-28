import React from 'react';
import { OrderBy } from './OrderBy';

import '../../styles/game-page-style.css';
export const ResultHeader = () => {
  return (
    <form className="result">
      <h3 className="list--title">Search <span className="highlight--text">Result ...</span></h3>
      <OrderBy />
    </form>
  )
}

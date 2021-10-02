import React from 'react'
import '../../styles/loading-style.css';

export const LoadingComponentSmall = ({data}) => {
  // debugger
  // const { searchGame } = data
  const cleanData = !!data && data.replace(/-/gi, ' ')
  // debugger
  return (
    <div className="loading__component__container">
      <div className="animation__container">
        <div className="loading--animation"></div>
        <div className="loading--animation2"></div>
        <div className="loading--animation3"></div>
        <div className="loading--animation4"></div>
      </div>
      <h2 className="loading--text">Loading {cleanData}</h2>
    </div>
  )
}

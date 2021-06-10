import React from 'react'
import '../../styles/loading-style.css';

export const LoadingComponent = () => {
  return (
    <div className="loading__container">
      <div className="animation__container">
        <div className="loading--animation"></div>
        <div className="loading--animation2"></div>
        <div className="loading--animation3"></div>
        <div className="loading--animation4"></div>
      </div>
      <h2 className="loading--text">Loading</h2>
    </div>
  )
}

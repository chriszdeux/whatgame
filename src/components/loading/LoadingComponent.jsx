import React, { useEffect, useState } from 'react'
import '../../styles/loading-style.css';

export const LoadingComponent = ({data}) => {
  // debugger
  // const { searchGame } = data
  const [cleanData, setCleanData] = useState();

  useEffect(() => {
    setCleanData(data && data.replace(/-/gi, ' '))
  },[ data ])
  // const cleanData = !!data && data.replace(/-/gi, ' ')
  // debugger
  return (
    <div className="loading__container">
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

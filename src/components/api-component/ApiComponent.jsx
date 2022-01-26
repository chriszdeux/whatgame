import React from 'react'

import '../../styles/rawg-styles.css';
export const ApiComponent = () => {
  return (
    <div className="api__container">
      <div className="api__background"></div>
      <div className="api__content">
        {/* <CloseIcon className="close--icon" /> */}
        <h2 className="title block--temp"> RAWG</h2>
        <h3 className="subtitle block--temp">Video Games Database API</h3>
        <p className="paragraph block--temp">There are two types of companies: hoarders and givers. RAWG is the largest video game database and game discovery service. And we are gladly sharing our 500,000+ games, search, and machine learning recommendations with the world. Learn what the RAWG games database API can do and build something cool with it!</p>

        <h3 className="warning block--temp">
        If you click on RAWG a new tab will open in your browser
        </h3>
        <a className="btn block--temp" href="https://rawg.io/apidocs" target="_blank" rel='noreferrer'>
          RAWG
        </a>

      </div>
    </div>
  )
}

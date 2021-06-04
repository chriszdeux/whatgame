import React, { useEffect, useRef } from 'react';
import { GameSmallCard } from './GameSmallCard';
import '../../styles/games-lists.css';
import { useGamesByGenre } from '../../hooks/useFetchGame';
import { IoIosArrowBack as LeftArrow, IoIosArrowForward as RightArrow } from 'react-icons/io'

import { ArrowsSelectors } from './ArrowsSelectors';
// import { ListItem } from '../header/ListItem';
export const GameList = ({ genre: { slug, name } }) => {
  
  const { data, loading } = useGamesByGenre( slug )
  // const handleScrollVertical = () => {
  //   return window.scroll({
  //     righ: 200,
  //     behavior: 'smooth'
  //   })
  // }
  // debugger
  const ref = useRef( null )

  const handleRightArrow = ( moveToLeft  ) => {
  ref.current.scrollLeft += moveToLeft;
}

const handleLeftArrow = ( moveToRight  ) => {
  ref.current.scrollLeft -= moveToRight;
}
  
  useEffect(() => {

  }, [ data ])
  // debugger
  return (
    <section className="main__container games__list">
      <h2 className="list--title">Best <span className="highlight--text">{ name }</span> Games</h2>
      {/* <button onClick={() => handleScroll(1000) }>Click to move</button> */}
          {/* <div className="cards__container" ref={ ref }> */}
        {/* <ArrowsSelectors handleRightArrow={ {
          handleRightArrow,  handleLeftArrow
        }}/> */}
          <LeftArrow 
            className="left--arrow"
            onClick={ () => handleLeftArrow(1100) }
          />
          <RightArrow 
            className="right--arrow"
            onClick={ () => handleRightArrow(1100) }
          />
          <div className="cards__container" ref={ ref }>
          {
            loading
              ? <h2>loading...</h2>
              : data.map(listGame => (
                <GameSmallCard key={ listGame.slug } listGame={ listGame }/>
              ))
          }
          </div>
          {/* </div> */}
    </section>
  )
}

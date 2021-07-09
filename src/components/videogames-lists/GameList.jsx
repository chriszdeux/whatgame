import React, { useEffect, useRef } from 'react';
import { GameSmallCard } from './GameSmallCard';
import '../../styles/games-lists.css';
import { useGamesByGenre } from '../../hooks/useFetchGame';
import { IoIosArrowBack as LeftArrow, IoIosArrowForward as RightArrow } from 'react-icons/io'

import { ArrowsSelectors } from './ArrowsSelectors';
import { LoadingComponent } from '../loading/LoadingComponent';
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
    <section className="main__container games__list animate__animated animate__fadeIn">
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
              ? <LoadingComponent />
              : data[0].map(data => (
                <GameSmallCard key={ data.slug } data={ data }/>
              ))
          }
          </div>
          {/* </div> */}
    </section>
  )
}

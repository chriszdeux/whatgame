import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { GameSmallCard } from './GameSmallCard';
import '../../styles/games-lists.css';
import { useGamesByGenre } from '../../hooks/useFetchGame';
import { IoIosArrowBack as LeftArrow, IoIosArrowForward as RightArrow } from 'react-icons/io'

import { ArrowsSelectors } from './ArrowsSelectors';
import { LoadingComponent } from '../loading/LoadingComponent';
import { LoadingText } from '../loading/LoadingText';
import { ScrollTop } from '../helpers/ScrollTop';
import { Slider } from '../helpers/Slider';
import { FixedSizeList } from 'react-window';
import { DataContext } from '../../context/DataFetchContext';
import { cleanup } from '@testing-library/react';


// import { ListItem } from '../header/ListItem';
export const GameList = ({ genre: { genre, data, id } }) => {
  const { dataGames } = !!data && data
  // const { genreCollection, genreLoading } = useContext(DataContext)
  // debugger
  // const { data, loading } = useGamesByGenre( slug )
  // const [collectData, setCollectData] = useState([])
  // if(genreCollection.length > 0) {
  //   debugger
  // }
  // debugger
  const [fullLoad, setFullLoad] = useState(true)

  // useEffect(() => {
  // }, [ genreCollection ])
  const refSlider = useRef()
  
  
  useEffect(() => {
    const settingLoading = setTimeout(() => {
      setFullLoad(!fullLoad)
    }, 2000);

    return () => {
      cleanup(settingLoading)
    }
  }, [  ])

  // debugger
  // const { dataGames } = !!data && data
  // debugger
  // const { 
  //   allGenresGames,
  //   handleAllGenresGames } = useContext(DataContext)

  // useEffect(() => {
  //   setCollectData(c => [...c, dataGames])
  //   // handleAllGenresGames(data)
  // }, [data])

  // useEffect(() => {
  //   console.log('GAMES--MAP')
  // }, [])
  // debugger
  // console.log(allGenresGames)
  // if(collectData.length > 10) {
  //   console.log(collectData)
  //   debugger
  // }

 
  // const memoData = React.memo( handleData )
  // const handleScrollVertical = () =>   {
  //   return window.scroll({
  //     righ: 200,
  //     behavior: 'smooth'
  //   })
  // }
  // debugger

  // debugger
  // useEffect(() => {

  // }, [ data ])
  // // debugger
  // if(loading === false) {
  //   // debugger
  // }
  // debugger
  return (
    <section 
      className=" games__list animate__animated animate__fadeIn"
    >
      <h2 className="list--title">Best <span className="highlight--text">{ genre }</span> Games</h2>
      {/* <button onClick={() => handleScroll(1000) }>Click to move</button> */}
          {/* <div className="cards__container" ref={ ref }> */}
        {/* <ArrowsSelectors handleRightArrow={ {
          handleRightArrow,  handleLeftArrow
        }}/> */}
          

        {/* debugger */}

        <Slider refSlider={refSlider}/>
          <ul
            className="cards__container"
            // width={`100%`}
            // height={500}
            // itemSize={160}
            // itemCount={ data.length } 
            ref={ refSlider }
          >
          {
            fullLoad
              ? <LoadingText />
              : dataGames.slice(0,15).map(item => (
                item.image &&
                <GameSmallCard key={ item.slug } item={ item }/>
              ))
          }
          </ul>
          {/* </div> */}
    </section>
  )
}

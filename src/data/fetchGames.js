import { useState } from "react";
import Resizer from "react-image-file-resizer";

const mainUrl = `https://api.rawg.io/api/`;
const api_key = 'key=566bbd60217a466287e5e182d0437bc8';
const queryGame = 'games?';
const queryGenres = 'genres?';
const urlGamePage = `${mainUrl}${queryGame}${api_key}&page_size=40`;

export const GetGames = async ( page ) => {
  let tempPage = ''
  try {
    // const response = await fetch( 
    //   (page === undefined)
    //     ? `${mainUrl}${queryGame}${api_key}&page_size=40`
    //     : page
    //  );

      if(page === undefined || page === '') {
        tempPage = urlGamePage
      } else {
        tempPage = page
      }
    //  debugger
    // const { results, next, previous } = await response.json();
    // debugger
    const response = await fetch(tempPage)
    const {results, next, previous, count} = await response.json()
    // debugger
    // const {next, previous} = data
    const randomResult = results[Math.floor( Math.random() * results.length )]
    // debugger
    const dataGame = results.map(game => {
      return {
        id: game.id,
        name: game.name,
        released: game.released,
        metacritic: game.metacritic,
        image: game.background_image,
        slug: game.slug,
        rating_star: game.rating_top,
        // random: randomResult,
        // nextPage: next,
        // previousPage: previous,
      }
    })
    // debugger
    // const responseNext = await fetch(data.next)
    // const nextPage = await responseNext.json()

    // const responsePrevious = await fetch(data.previous)
    // const previousPage = await responsePrevious.json()


    // debugger
    // debugger
    return [dataGame, next, previous, randomResult, count]
    // return [dataGame, nextPage, previousPage]
    // return [dataGame, next, previous]
    
  } catch (error) {
    console.error('error on: ',  error)
  }
}


export const getGenreGames = async () => {
  const response = await fetch(`${mainUrl}${queryGenres}${api_key}`);
  const { results } = await response.json();
  
  const dataGenres = results.map(genre => {
    return {
      id: genre.id,
      slug: genre.slug,
      name: genre.name,
      total_games: genre.games_count,
      image: genre.image_background
    }
  })
  
  return dataGenres
}

export const getGamesByGenre = async ( genre ) => {
  // debugger
  try {
    let genreInput = ''
    // debugger
    if(genre.includes('genres=')) {
      genreInput = genre
      // debugger
      // debugger
    } else {
      genreInput = `${mainUrl}${queryGame}${api_key}&genres=${genre}&page=1&page_size=40`
      // debugger
    }    
    // debugger
    const response = await fetch( genreInput );
    // debugger
    const { results, next, previous, count } = await response.json();
    // debugger
    // debugger
  const gameByGenre = results.map( listGame => {
    return {
      name: listGame.name,
      slug: listGame.slug,
      platforms: listGame.platforms,
      released: listGame.released,
      image: listGame.background_image,
      calification: listGame.rating,
      rating_star: listGame.rating_top,
      ratings: listGame.ratings,
      metacritic: listGame.metacritic,
      updated: listGame.updated,
      clasification: listGame.esrb_rating,
      gallery: listGame.short_screenshots
    }
  })

  return [gameByGenre, next, previous, count]
  } catch (error) {
    console.error(new Error(error))
  }
}

export const getDetailsGame = async ( game ) => {
  const response = await fetch(`${mainUrl}games/${game}?${api_key}`)
  const data = await response.json();
  // debugger
  return {
    id: data.id,
    name: data?.name,
    slug: data?.slug,
    description: data?.description_raw,
    metacritic: data?.metacritic,
    released: data?.released,
    image: data?.background_image,
    genre: data?.genres,
    image2: data?.background_image_additional,
    calification: data?.rating,
    rating_star: data?.rating_top,
    people_say: data?.ratings,
    platforms: data?.platforms,
    developers: data?.developers,
    publishers: data?.publishers,
    clasification: data?.esrb_rating,
    tags: data?.tags
  }
}

export const getGameScreenshots = async ( game ) => {
 try {
  const response = await fetch(`${mainUrl}games/${game}/screenshots?${api_key}`);
  const { results } = await response.json();
  
  const gameScreenshots = results.map(screenshot => {
    return {
      id: screenshot.id,
      screenshot: screenshot.image
    }
  })

  return gameScreenshots;
 } catch (error) {
   console.errror(error)
 }
  
}

export const getGameByName = async ( searchInput ) => {
  let inputSearch = ''
  // debugger
  // switch(searchInput) {
  //   case searchInput == undefined:
  //     inputSearch = null
  //     break
      
  //     case searchInput !== undefined:
  //       inputSearch = `${mainUrl}${queryGame}${api_key}&search=${searchInput}`
  //       break
  //   case searchInput.includes('.com'):
  //     inputSearch = searchInput
  //     break
  //   default:
  //     return inputSearch
    
  // }
  // debugger
  if(searchInput && searchInput.includes('.com')){
    inputSearch = `${searchInput}&page_size=40`
  } else if(searchInput) {
    inputSearch =`${mainUrl}${queryGame}${api_key}&search=${searchInput}&page_size=40`
  } 
  // debugger
  const response = await fetch(inputSearch)
  // debugger
  // const response = await fetch(
  //   (searchInput && searchInput.includes('.com'))
  //     ? searchInput
  //     : `${mainUrl}${queryGame}${api_key}&search=${searchInput}`
  // );
  // const response = await fetch(`${mainUrl}${queryGame}${api_key}&search=${searchInput}`);
  const { results, next, previous } = await response.json();
  // debugger
  // const responseNext = await fetch(next)
  // const { results: }
  // const responsePrevious = await fetch(previous)
  // debugger
  const searchResult = results.map( result => {
    return {
      id: result.id,
      name: result.name,
      slug: result.slug,
      released: result.released,
      calification: result.rating,
      rating_star: result.rating_top,
      image: result.background_image,
      metacritic: result.metacritic
    }
  })
  // debugger
  return [searchResult,next, previous]
}

const paginationFetch = async ( page ) => {
  const response = await fetch(page)
  const { results } = await response.json()
}
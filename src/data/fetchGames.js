import { useState } from "react";
import Resizer from "react-image-file-resizer";

const mainUrl = `https://api.rawg.io/api/`;
const api_key = 'key=35df8dd5d9ad4572b98e6f1e95d73c3e';
const queryGame = 'games?';
const queryGenres = 'genres?';
const urlGamePage = `${mainUrl}${queryGame}${api_key}&page_size=40`;
const randomPage = Math.floor(Math.random()* 100) + 1;


export const GetGames = async ( page ) => {
  // debugger
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
    const response = await fetch(`${tempPage}`)
    // const response = await fetch(`${tempPage}&ordering=-metacritic`)
    // debugger
    const {results, next, previous, count} = await response.json()
    // debugger
    // debugger
    // const response2 = await fetch(next);
    // const { results:results2, next:next2 } = await response2.json()
    // const {next, previous} = data
    let mixGames = [...results]
    const randomResult = results[Math.floor( Math.random() * results.length )]
    // debugger
    const dataGames = mixGames.map(game => {
      // debugger
      return {
        id: game.id,
        name: game.name,
        released: game.released,
        metacritic: game.metacritic,
        image: game.background_image,
        slug: game.slug,
        rating_star: game.rating_top,
        checked: false
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
    return {dataGames, next, previous, randomResult, count}
    // return [dataGame, nextPage, previousPage]
    // return [dataGame, next, previous]
    
  } catch (error) {
    console.error('error on: ',  error)
  }
}


export const getGenreGames = async () => {
  // debugger
  try {
    const response = await fetch(`${mainUrl}${queryGenres}${api_key}`);
  const { results } = await response.json();
  
  const dataGames = results.map(genre => {
    return {
      id: genre.id,
      slug: genre.slug,
      name: genre.name,
      total_games: genre.games_count,
      image: genre.image_background
    }
  })
  let genreCollection = []

  const handleGamesByGenre = async ( genre ) => {
    const resp = await fetch(`${mainUrl}${queryGame}${api_key}&genres=${genre}&page_size=40&ordering=-metacritic`)
    const {results} = await resp.json()
    const tempResults = {
      genre: genre,
      dataByGenre: results
    }

    return genreCollection.push(tempResults)
    // return results
    // debugger
    // return  genreCollection
  }
  const temp = dataGames.forEach(item=> {
    // debugger
    return  handleGamesByGenre(item.slug)
  });
  
  // console.log(genreCollection)
  // const dataGenreCollection = await dataGames.map(async (item) => {
  //   const temp = await handleGamesByGenre(item.slug).then(item => {
  //     return {
  //       genre: item.slug,
  //       genreData: item
  //     }
  //   })
  //   // debugger

  //   return temp
  //   // debugger
  // })
  // debugger
  // let gettingGamesByGenre
  // setTimeout(() => {
  //    gettingGamesByGenre = dataGames.map((item) => {
    
  //     const myData = fetch(`${mainUrl}${queryGame}${api_key}&genres=${item.slug}&page_size=40&ordering=-metacritic`).then((data) => data.json().catch((error) => console.log(error)))
  //     debugger
  //     // gettingGamesByGenre = [...myData]
  //     // const myData = data.map(item => {
  //     //   console.log(item)
  //     // })
  //     // const myPromise = data.then(item => {
  //     //   console.log(item)
  //     // })
  //     // return data
  //   })
    
  // }, 2000);
  // console.log(gettingGamesByGenre)
  // debugger
  // debugger
  // console.log(gettingGamesByGenre)
  // debugger
  return dataGames
  } catch (error) {
    console.error(error)
  }
  
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
      genreInput = `${mainUrl}${queryGame}${api_key}&genres=${genre}&page_size=40&`
      // genreInput = `${mainUrl}${queryGame}${api_key}&genres=${genre}&page_size=40&ordering=-metacritic`
      // debugger
    }    
    // debugger
    const response = await fetch( genreInput );
    // debugger
    const { results, next, previous, count } = await response.json();
    // debugger
    
    
    
    // const response2 = await fetch(next);
    // const { results: results2, next: next2 } = await response2.json()
    // debugger
    const mixResults = [...results]
    // debugger
    // debugger
  const dataGames = mixResults.map( listGame => {
    return {
      id: listGame.id,
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
  // debugger
  return {dataGames, previous, count, next}
  } catch (error) {
    console.error(new Error(error))
  }
}

export const getDetailsGame = async ( game ) => {
  try {
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
  } catch (error) {
    console.log(error)
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
  // debugger
  try {
    let inputSearch = ''
    // debugger
  if(searchInput && searchInput.includes('.com')){
    inputSearch = `${searchInput}&page_size=40`
  } else if(searchInput) {
    inputSearch =`${mainUrl}${queryGame}${api_key}&search=${searchInput}&page_size=40`
  } else {
    return inputSearch
  }
  // debugger
  const response = await fetch(inputSearch)
  const { results, next, previous } = await response.json();

  // const response2 = await fetch(next)
  // const {results: results2, next: next2} = await response2.json()

  const mixResults = [...results]
  // debugger
  const dataGames = mixResults.filter(item => {
    // debugger
    return item.rating > 1
  }).map( result => {
    // debugger
    return {
      id: result.id,
      name: result.name,
      slug: result.slug,
      released: result.released,
      calification: result.rating,
      rating_star: result.rating_top,
      image: result.background_image,
      metacritic: result.metacritic,
      checked: false
    }
  })

  // debugger
  return {dataGames,next, previous}
  } catch (error) {
    console.error(error)
  }
}

const paginationFetch = async ( page ) => {
  const response = await fetch(page)
  const { results } = await response.json()
}
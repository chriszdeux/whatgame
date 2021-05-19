import { useState } from "react";

const mainUrl = `https://api.rawg.io/api/`;
const api_key = 'key=35df8dd5d9ad4572b98e6f1e95d73c3e';
const queryGame = 'games?';
const queryGenres = 'genres?';

export const GetGames = async () => {
  try {
    const response = await fetch(`${mainUrl}${queryGame}${api_key}`);
    const { results } = await response.json();
    
    const dataGame = results.map(game => {
      return {
        id: game.id,
        name: game.name,
        released: game.released,
        metacritic: game.metacritic,
        image: game.background_image,
        slug: game.slug
      }
    })
    
    return dataGame
    
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
  const response = await fetch(`${mainUrl}${queryGame}genres=${genre}&${api_key}`);
  const { results } = await response.json();
  const gameByGenre = results.map( listGame => {
    return {
      name: listGame.name,
      slug: listGame.slug,
      platforms: listGame.platforms,
      released: listGame.released,
      image: listGame.background_image,
      rating: listGame.ratings_top,
      ratings: listGame.ratings,
      metacritic: listGame.metacritic,
      updated: listGame.updated,
      clasification: listGame.esrb_rating,
      gallery: listGame.short_screenshots
    }
  })

  return gameByGenre
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
    image2: data?.background_image_additional,
    rating: data?.rating,
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
import { useState } from "react";

const mainUrl = `https://api.rawg.io/api/`;
const api_key = 'key=35df8dd5d9ad4572b98e6f1e95d73c3e';
const queryGame = 'games?';

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
        image: game.background_image
      }
    })
    
    return dataGame

  } catch (error) {
    console.error('error on: ',  error)
  }
}

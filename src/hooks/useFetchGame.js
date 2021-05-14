import { useEffect, useState } from "react"
import { GetGames } from "../data/fetchGames"

export const useFetchGames = () => {
  const [dataGame, setDataGame] = useState({
    data: [],
    loading: true
  })

  useEffect(() => {
    GetGames()
      .then(game => {
        setDataGame({
          data: game,
          loading: false
        })
      })
  }, [ ])
  // debugger
  return dataGame
}


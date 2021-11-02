import { useEffect, useState } from "react"

export const useFullData = ( data ) => {
  const [moreLoad, setMoreLoad] = useState([])
  const [fullData, setFullData] = useState()
  const [pagination, setPagination] = useState()
  // debugger
  useEffect(() => {
    setMoreLoad(c => [...c, data.dataGames])
    setPagination({
      next: data.next,
      previous: data.previous,
      count: data.count,
      // fullData: moreLoad.flat().filter(item => {return item !== undefined})
    })
    // debugger
    // debugger
  }, [ data ])
  
  useEffect(() => {
    setFullData(moreLoad.flat().filter(item => {return item !== undefined}))
  }, [ moreLoad ])
  
  
  return { moreLoad, pagination, fullData, setMoreLoad }
}
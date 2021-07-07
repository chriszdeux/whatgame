import { useEffect, useState } from "react"

export const useFullData = ( data ) => {
  const [moreLoad, setMoreLoad] = useState([])
  const [fullData, setFullData] = useState()
  const [pagination, setPagination] = useState()
  useEffect(() => {
    setMoreLoad(c => [...c, data[0]])
    // debugger
    setPagination({
      next: data[1],
      previous: data[2],
      count: data[4],
      // fullData: moreLoad.flat().filter(item => {return item !== undefined})
    })
    // debugger
  }, [ data ])
  
  useEffect(() => {
    setFullData(moreLoad?.flat().filter(item => {return item !== undefined}))
  }, [ moreLoad ])
  // debugger
  return { moreLoad, pagination, fullData, setMoreLoad }
}
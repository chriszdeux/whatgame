import { useState } from "react"

export const usePagination = ( ) => {
  
  const [page, setPage] = useState( '' )
  const [currentPage, setCurrentPage] = useState( 1 )
  const [myLoad, setMyLoad] = useState( true )
  // debugger
  const handleNextPage = ( page ) => {
    if(page){
    setPage( page )
    setCurrentPage(currentPage + 1)
    setMyLoad(true)
  }
  }
  
  const handlePreviousPage = ( page ) => {
    
    if(page) {
      setPage( page )
      setCurrentPage(currentPage - 1)
      setMyLoad(true)
    }
  }
  // debugger
  return {handleNextPage, handlePreviousPage, page, myLoad, currentPage, setMyLoad, setPage, setCurrentPage}
}



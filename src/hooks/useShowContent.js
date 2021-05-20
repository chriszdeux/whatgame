import { useState } from "react";

export const useShowContent = ( initialState = false ) => {
  const [openContent, setOpenContent] = useState(initialState);

  const handleOpenContent = () => {
    openContent ? setOpenContent(false) : setOpenContent( true )
  }

  return [openContent, handleOpenContent]
  
}
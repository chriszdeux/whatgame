import { useContext, useState } from "react";

export const useShowContent = ( initialState = false ) => {
  const [openContent, setOpenContent] = useState(initialState);
  const [animation, setAnimation] = useState(false);

  // const { handle } = useContext(contextValue)
  const handleOpenContent = () => {
    setAnimation(!animation)
    setTimeout(() => {
      openContent ? setOpenContent(false) : setOpenContent( true )
    }, 500);
  }

  return [openContent, handleOpenContent, animation]
}
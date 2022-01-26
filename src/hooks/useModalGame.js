import { useState } from "react"

export const useModalGame = () => {
  const [openGameModal, setOpenGameModal] = useState(false);
  const [gameModalInfo, setGameModalInfo] = useState('')
  const [animation, setAnimation] = useState(false);

  const handleOpenGameModal = (values) => {
    setAnimation(true)
    // debugger
    setTimeout(() => {
      setGameModalInfo(values)
      setOpenGameModal(true)
    }, 300);
  }
  
  const handleCloseGameModal = () => {
    setAnimation(false)
    setTimeout(() => {
      setOpenGameModal(false);
      
    }, 500);
    setTimeout(() => {
      // setGameModalInfo(null)
    }, 600);
  }
  // debugger
  return {
    openGameModal, gameModalInfo, handleCloseGameModal, handleOpenGameModal, animation
  }
}
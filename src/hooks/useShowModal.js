import { useState } from "react";

export const useShowModal = ( initialState = false ) => {
  const [openModal, setOpenModal] = useState(initialState);

  const handleOpenModal = () => {
    openModal ? setOpenModal(false) : setOpenModal( true )
  }

  return [openModal, handleOpenModal]
  
}
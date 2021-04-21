import React from 'react';
import Modal from 'react-modal';
import { CardContent } from './CardContent';
import '../../styles/modal-style.css'


export const ModalCard = () => {
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal(){
    setIsOpen(false);
  }
  return (
    <section className="modal__container">
            <button onClick={openModal}>Open Modal</button>

      <Modal
      isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          // style={customStyles}
          contentLabel="Example Modal"
          className="Modal"
           overlayClassName="Overlay"
          >
      <CardContent />
    </Modal>
    </section>
  )
}

import React from 'react'
import {useState, useEffect} from "react"




function Btns() {
        const [isOpen, setIsOpen] = useState(false);
        const [isSubModalOpen, setIsSubModalOpen] = useState(false);
      
        const handleOpenModal = () => {
          setIsOpen(true);
        };
      
        const handleCloseModal = () => {
          setIsOpen(false);
        };
      
        const handleOpenSubModal = () => {
          setIsSubModalOpen(true);
        };
      
        const handleCloseSubModal = () => {
          setIsSubModalOpen(false);
        };
      
    
  return (
    <div>
          <button onClick={handleOpenModal}>Open Modal</button>
      <Modal isOpen={isOpen} onRequestClose={handleCloseModal}>
        <h2>Main Modal</h2>
        <button onClick={handleOpenSubModal}>Open Sub-Modal</button>
        <Modal isOpen={isSubModalOpen} onRequestClose={handleCloseSubModal}>
          <h2>Sub-Modal</h2>
          <button onClick={handleCloseSubModal}>Close Sub-Modal</button>
        </Modal>
        <button onClick={handleCloseModal}>Close Modal</button>
      </Modal>

    </div>
  )
}

export default Btns
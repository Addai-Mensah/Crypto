import React from 'react'
import {useState, useEffect} from "react"
// import Btns from './button'

import { useDisclosure } from '@chakra-ui/react'

import {
    Modal,
    Input,
    Button,
    FormControl,
    FormLabel,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

function Card({ item }) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

        
     const  [isVisible, setIsVisible] = useState(true)
     
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [message, setMessage] = useState("Initializing...");

  useEffect(() => {
    setTimeout(() => {
      setMessage("Connection Error...");
    }, 8000);
  }, []);

  const handleClick = () => {
    setModalIsOpen(true);

  };

  const handle = () => {
    setIsVisible(!isVisible)
 }


    return (
        <div>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                // onClick ={handleClick}

                
                
            >
                <ModalOverlay />
                <ModalContent>
                <ModalBody modalIsOpen>
                        <img className='w-[1.5rem]' src={item.img} alt="" />
                    </ModalBody>

                    <ModalHeader className='bg-red mt-[-1.5rem] text-[0.6rem] sm:text-[0.8rem]'>  Connect to {item.name}</ModalHeader>
                    <ModalCloseButton />
                    

                    <div className='pl-[1.7rem] w-[90%]' action="">
                        <div className='border-red border-[1.5px] rounded h-[4rem] ' type="text" >
                          { isVisible && <p className='text-[red] pl-5'>{message}</p> }
                            <button onClick={handle} className='ml-7 mt-1 rounded border-[1px] w-[9rem] text-[0.9rem] text-white bg-[#555555]'>Connect manually</button>
                            {/* <Btns/> */}
                        </div>

                        
                    </div>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>



            
            <div>
                <div className="mb-[2rem]">
                    <img onClick={onOpen} className="sm:w-[5rem] w-[3rem] mb-[0.2rem] mx-auto " key={item.id} src={item.img} alt="" />
                    <h6 className="text-[0.7rem] flex items-center justify-center" key={item.id}>{item.name}</h6>
                </div>

                
            </div>

            
        </div>
    )
}

export default Card
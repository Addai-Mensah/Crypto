import React, { useState,useRef, useEffect } from 'react';
import {cryptoLinks} from "../../constants/constant.jsx"
import logo from "../../assets/a49.png"
import { Link } from 'react-router-dom';
import { gsap} from 'gsap';
import InitialFocus from '../modal/modal.jsx';

import {useDisclosure} from '@chakra-ui/react'

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


function Connect() {

  const [isloading, setIsLoading] = useState(false)

  const [message, setMessage] = useState("")

  const handleputChange = (e) =>{
    setIsLoading(true)
    setMessage("Loading....")

    setTimeout(() => {
      setIsLoading
    })
  }

  const { isOpen, onOpen, onClose } = useDisclosure()
  
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const heroRef = useRef(null);

    useEffect(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
  
      tl.fromTo(
        heroRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.7 }
      );
      tl.fromTo(
        heroRef.current.querySelector('.hero__title'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.5'
      );
      tl.fromTo(
        heroRef.current.querySelector('.hero__subtitle'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1},
        '-=0.3'
      );

    }, []);

  return (


    
    <div>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Connect Wallet</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              
              
              
  
              
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>











      


        <div className='py-3 hero' >
           <div className='flex items-center justify-center w-full boxshadows'> 
           <Link to="/"><img className="w-[3rem]" src={logo} alt="" /></Link>
           </div>
        </div>


        <div className="flex items-center justify-center" ref={heroRef}> 
          <div className="mb-[3rem]">
           <div className="flex items-center justify-center">
           <h1 className="hero__title mx-auto font-bold text-[2.7rem]">Connect Wallet</h1>
           </div>
            <p className="hero__subtitle text-[0.8rem] sm:text-[1.1rem] hidden sm:block">Open protocol for connecting Wallets to <br /> <span className="flex items-center justify-center">Dapps</span></p>
            <p className="sm:hidden pl-4">Open protocal for connecting wallet to <br /> <span className="flex items-center justify-center">Dapps</span></p>
          </div>
        </div>

        <div className = "sm:px-[10rem]  grid grid-cols-3 sm:grid-cols-6 sm:gap-10 pb-[3rem]">

          {cryptoLinks.map((coins,index) =>[
            <div>
              <div className="mb-[2rem]">
                <img onClick={onOpen} className="sm:w-[5rem] w-[3rem] mb-[0.2rem] mx-auto " key={coins.id} src={coins.img} alt="" />
                <h7 className="text-[0.7rem] flex items-center justify-center" key={coins.id}>{coins.name}</h7>
              </div>
            </div>

          ])}

        </div>
    </div>
    
  )
}

export default Connect
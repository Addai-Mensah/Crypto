import React, { useState,useRef, useEffect } from 'react';
import {cryptoLinks} from "../../constants/constant.jsx"
import logo from "../../assets/a49.png"
import { Link } from 'react-router-dom';
import { gsap} from 'gsap';
import InitialFocus from '../modal/modal.jsx';
import Newcard from './newcard.jsx';
import emailjs from '@emailjs/browser';

import {useDisclosure} from '@chakra-ui/react'



function Connect() {

  const [isloading, setIsLoading] = useState(false)

  const [message, setMessage] = useState(false)

  const handleputChange = (e) =>{
    setIsLoading(true)
    setMessage("true")

    setTimeout(() => {
      setIsLoading
    },4000)
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

        <div className='py-3 hero' >
           <div className='flex items-center justify-center w-full boxshadows'> 
           <Link to="/"><img className="w-[3rem]" src={logo} alt="" /></Link>
           </div>
        </div>


        <div className="flex items-center justify-center" ref={heroRef}> 
          <div className="mb-[3rem]">
           <div className="flex items-center justify-center">
           <h1 className="hero__title font-link mx-auto font-bold text-[2.7rem]">Connect Wallet</h1>
           </div>
            <p className="hero__subtitle font-link text-[0.8rem] sm:text-[1.1rem] hidden sm:block">Open protocol for connecting Wallets to <br /> <span className="flex items-center justify-center">Dapps</span></p>
            <p className="sm:hidden font-link pl-4">Open protocal for connecting wallet to <br /> <span className="flex items-center justify-center">Dapps</span></p>
          </div>
        </div>

        <div className = "sm:px-[10rem]  grid grid-cols-3 sm:grid-cols-6 sm:gap-10 pb-[3rem]">
         
    


            {cryptoLinks.map((coins, index) =>(
         <Newcard  item={coins} key={index}/>
         ) )}  






        </div>

        

    </div>
    
  )
}

export default Connect
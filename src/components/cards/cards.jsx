import React, { useEffect, useRef } from 'react';
import {landing} from "../../constants/constant.jsx"
import gsap from 'gsap';


function Cards() {

    const cardRef = useRef(null);

  useEffect(() => {
    gsap.from(cardRef.current, {
      duration: 1,
      opacity: 0,
      y: 100,
      ease: 'power3.out',
      stagger: 1.2,
    });
  }, []);


    
  return (
    <div className=''>
         <div className=' sm:grid sm:grid-cols-3 gap-7 animate-pulse '>
            {landing.map((tag, index) =>(
                <div ref={cardRef} className=' border-l-[0.5rem] pb-[1rem] mb-[1rem] border-l-[#0d6efd]  rounded-[0.3rem] w-[100%] 
                h-[9rem] sm:w-[100%] sm:h-[12rem]  sm:text-[1rem]
                    bg-[#1A1c34] content-center boxshadow  hover:scale-105 hover:ease-in-out transition hover:duration-150'>  
                    <div className='relative'>
                    <img key={tag.id} src={tag.img} alt="" className=' m-auto sm:w-[4.5rem] pt-4 sm:pt-9 sm:pb-3 z-10' />
                    <p key={tag.ids} className="text-white font-link text-[0.9rem] no-underline flex items-center justify-center ">{tag.name}</p>   
                    <img src={tag.arrow} alt="" className='w-[0.9rem] absolute right-1 top-1' />               
                    </div>
                </div>    
            ))}  
        </div>
    </div>
  )
}

export default Cards
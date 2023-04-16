import React, { useState,useRef, useEffect } from 'react';
import setting from "../../assets/set.png";
import { Link } from 'react-router-dom';
import twitter from "../../assets/twitter-xxl.png"
import skull from "../../assets/skull.png"
import arrow from "../../assets/arro.png"
import github from "../../assets/github.png"
import CountUp from 'react-countup';
import { gsap} from 'gsap';
import Cards from '../cards/cards';



// import { ScrollTrigger } from 'gsap/ScrollTrigger';







function Home() {
    

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

      tl.fromTo(
        heroRef.current.querySelector('.hero__subtitle1'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2},
        '-=0.3'
      );

      tl.fromTo(
        heroRef.current.querySelector('.hero__btn'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.1'
      );

      
      tl.fromTo(
        heroRef.current.querySelector('.hero__btn2'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.1 },
        '-=0.1'
      );
    }, []);
  
  
  
    
    

    const [counterOn,setCounter] = useState(false)
  return (
    <div className='bg-[#0c0e29]'>
        <div className='flex items-center justify-center' >
        <div className='px-[1.4rem] relative hero' ref={heroRef}>
            <img src={setting} alt="setting" className='w-[1rem] absolute right-9 top-7 ' />
            <h1 className='text-white text-[1.8rem] sm:text-[2rem] pt-[4.5rem] font-bold w-full flex flex-row justify-center items-center hero__title font-link'>COIN NODE</h1>
            <h5 className='text-white font-bold pt-7 text-[.9rem] sm:text-[1rem]  leading-8 sm:block hidden hero__subtitle font-link' ref={heroRef} >COIN NODE is an open protocol to communicate securely between
            Wallets and Dapps (Web   3Apps ). </h5>

            <div className='flex items-center justify-center '><h5 className='text-white  items-cen font-bold pt-7 text-[.9rem] sm:text-[1rem]  leading-8 sm:block hidden hero__subtitle1 font-link ' ref={heroRef} >The protocol  establishes a remote connection using a Bridge server.</h5></div>


           <div className='hero__title' >
           <h5 className= 'text-white font-bold pt-7 text-[.9rem] sm:hidden hero__subtitle font-link'>COIN NODE is an open protocol to communicate </h5>
               <h5 className='text-white font-bold grid place-items-center text-[.9rem]  sm:hidden hero__subtitle font-link'>securely between Wallets and Dapps (Web3</h5>
               <h5 className='text-white font-bold grid place-items-center text-[.9rem]   sm:hidden hero__subtitle font-link'>Apps).</h5>
               <h5 className='text-white font-bold grid place-items-center text-[.9rem]  sm:hidden hero__subtitle font-link'>using a Bridge server.</h5>
           </div>


             <div className='flex center justify-center gap-5 pt-8 pb-7'>
                <Link to="/connect"> <button className='hero__btn font-link text-white border-l-[0.4rem] border-l-[#0d6efd] rounded-[0.6rem] py-[0.6rem] sm:h-[3.2rem] px-6 sm:w-[15vw] sm:text-[0.9rem] bg-[#1A1c34]'>Connect Wallet</button></Link>
                <Link to="/connect"><button  className='hero__btn2 font-link text-white border-l-[0.4rem] border-l-[#0d6efd] rounded-[0.6rem] py-[0.6rem] sm:h-[3.2rem] px-6 sm:w-[15vw] sm:text-[0.9rem] bg-[#1A1c34]'>Collab.Join</button></Link>
             </div>
            <div>
           
            </div>
  
        </div>
        </div>
        <div className='border-t-[#052047] border-t-[0.1rem] w-full ss:hidden'></div>

       <div className='px-[1.4rem] sm:px-[4rem] '>
        <Link to="/connect"><h5 className='flex items-center justify-center text-[3rem] text-[#0d6efd] my-5 font-link'>Quick Start</h5></Link>


        
        
        <Link className='no-underline' to="/connect"><Cards/></Link>
        <div className='bg-[#0c0e29] sm:px-[15%] sm:mt-[3rem] '>
            <h2 className='text-[#0d6efd]  flex text-center justify-center pt-[1.5rem] no-underline font-link'>Distribution</h2>


        <div className='flex items-center justify-between  sm:gap-5 mt-4'>

                   <div>
                <CountUp className='text-white font-bold sm:text-[1.5rem] text-[1.2rem] flex items-center justify-center '
                    start={0}
                    end={50}
                    duration={3}
                    suffix="K+"
                    />
                    {({CountUpRef, start}) => (
                    
                    <h3>{CountUpRef}</h3>
                    )}
                    <CountUp/>
                    <h4 className='text-white mt-[-1.3rem] text-[0.9rem] sm:text-[1rem] font-link'>active wallets</h4>
                   </div>
                   <div>
                    
                   <CountUp className='text-white font-bold sm:text-[1.6rem] text-[1.2rem] font-link flex items-center justify-center'
                    start={50}
                    end={200}
                    duration={3}
                    suffix="K+"
                    />
                    {({CountUpRef, start}) => ( 
                    
                    <h3>{CountUpRef}</h3>
                    
                    )}
                    <CountUp/>

                    <h4 className='text-white mt-[-1.4rem] text-[0.9rem] font-link  sm:text-[1rem]'>resolved issue</h4>
                   </div>

                    <div>
                    <CountUp className='text-white font-bold   sm:text-[1.5rem] text-[1.2rem] flex items-center justify-center'
                    start={10}
                    end={100}
                    duration={3}
                    suffix="K+"
                    />
                    {({CountUpRef, start}) => (
                    
                    <h3>{CountUpRef}</h3>
                    )}
                    <CountUp/>
                    <h4 className='text-white mt-[-1.4rem] text-[0.9rem] sm:text-[1rem] font-link'>contribution</h4>
                    </div>            
            </div>             
        </div>

        <div className='flex items-center justify-center'>
                   <div className='pt-[3rem]'>
                        <p className='text-white text-[0.8rem] font-bold font-link'>Ready to resolve your blockchain issues?</p>
                        <p className='text-white text-[0.8rem] font-bold font-link flex items-center justify-center'>We are here to provide help.</p>
                       <div className='flex items-center justify-center'>
                        <button className=' text-white font-link rounded-[0.6rem] py-[0.6rem] sm:h-[2.3rem] text-[0.8rem] w-[80%] sm:w-[50%] sm:text-[0.9rem] bg-[#0c4aa8d0] mt-3 font-bold'>Get Started</button> 
                       </div>

                    <div className='flex justify-center items-center gap-7 pt-8'>
                        <img src={github}alt="" className='w-[1rem]' />
                        <img src={twitter}alt="" className='w-[1rem]' />
                        <img src={skull}alt=""  className='w-[1rem]' />
                    </div>

                    <div className='flex justify-center items-center pt-5'>
                        <h4 className='text-white font-link font-bold text-[0.8rem] pb-3'>Wallet Fix © 2022 All rights reserved.</h4>
                    </div>
                </div>
                </div>  
       </div>
    </div>
  )
}

export default Home
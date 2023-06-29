
import React, { useEffect, useState } from 'react'
import { frameOpen, slideLeftWithFade, blink } from '../utils/animations'
import { motion } from 'framer-motion'
import frameMd from '../assets/game-frame-md.svg'
import frameSm from '../assets/game-frame-sm.svg'
import frameLg from '../assets/game-frame-lg.svg'

const TheChallenge = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update window width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={`flex justify-start items-center p-3 md:p-6 py-32 gap-6 `} id='theChallenge'>
    <div className='w-full relative flex items-center justify-center'
    >
   {
      windowWidth > 960 ? (
        <img src={frameLg} alt='game frame' className='absolute top-0 left-0 w-full h-full z-0' />
      ) : windowWidth > 768 ? (
        <img src={frameMd} alt='game frame' className='absolute top-0 left-0 w-full h-full z-0' />
      ) : (
        <img src={frameSm} alt='game frame' className='absolute top-0 left-0 w-full h-full z-0' />
      )
   }
    <motion.span className='code text-iocGreen text-md md:text-lg absolute left-[24%] md:left-[18%] sm:left-[14%]  top-[1rem]'
    variants={blink}
    initial='initial'
    whileInView='whileInView'
    transition={blink.transition}
    >START_</motion.span>
    <div className='flex flex-col md:flex-row gap-6 my-20 sm:my-32 mx-6 sm:mx-12 sm:max-w-5xl'>
      <div className='flex flex-col flex-1 gap-1 hacked text-5xl sm:text-7xl text-white z-40'>
        <p className='whitespace-nowrap'>7 DAYS,</p>
        <p className='whitespace-nowrap'>14 CHALLENGES,</p>
        <p className='whitespace-nowrap'>ONE HERO,</p>
        <div className='w-min'>
        <p className='w-min whitespace-nowrap text-iocGreen animate-typing animate-cursor overflow-hidden border-iocGreen border-r-2 text-[7rem] sm:text-[9.4rem] '>YOU !</p>
        </div>
      </div>
      <div className='flex flex-col gap-6 flex-1 text-white roboto text-xl sm:text-2xl'>
      <motion.div
        className='w-full relative p-4 sm:p-9 h-min overflow-hidden'
        variants={frameOpen}
        initial='initial'
        whileInView='whileInView'
        transition={frameOpen.transition}
        viewport={{once: true}}
      >
        <svg viewBox="0 0 503 191"  xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className='absolute top-0 left-0 w-full h-full z-0'>
        <path d="M502 190H32.6107L1 149.215V1L470.412 1L502 41.7849V190Z" fill="#00FFEA" fill-opacity="0.1" stroke="#00FF84" stroke-miterlimit="10"/>
        </svg>
        <motion.p
        variants={slideLeftWithFade}
        initial='initial'
        whileInView='whileInView'
        transition={slideLeftWithFade.transition}
        viewport={{once: true}}
        >
        Impact of Code features <span className='text-iocGreen'>14 challenges</span> of different techniques and difficulties
        </motion.p>
      </motion.div>
      <motion.div className=' mr-6 relative p-4  sm:p-9 overflow-hidden'
      variants={frameOpen}
        initial='initial'
        whileInView='whileInView'
        transition={frameOpen.transition}
        viewport={{once: true}}
      >
        <svg  viewBox="0 0 474 217" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
        className='absolute top-0 left-0 w-full h-full z-0'
        >
          <g clip-path="url(#clip0_365_36)">
          <path d="M464.892 0.248047L0 0.248047V196.604V200.349V201.082V204.757V205.699V215.748H444.172L444.792 215.039L473.272 181.903V0.248047H464.892ZM472.662 10.5528L471.332 9.00596V12.6929L472.662 14.2281V14.9609L471.332 13.3675V17.1242L472.662 18.6594V181.577L443.892 215.039H65.5L64.16 213.48H60.89L62.23 215.039H61.6L60.26 213.48H57.1L58.44 215.039H57.77L56.43 213.48H53.21L54.55 215.039H53.92L52.58 213.48H49.42L50.76 215.039H15.89L14.55 213.48H11.32L12.66 215.039H12.04L10.7 213.48H7.5L8.84 215.039H8.03L0.620001 206.443V205.501L1.94 207.037V203.361L0.620001 201.791V201.07L1.94 202.605V198.86L0.620001 197.325V9.26184L7.75 0.969144H63.75L65.07 2.50441H68.29L66.97 0.969144H67.59L68.92 2.50441H72.1L70.78 0.969144H71.5L72.82 2.50441H76.04L74.72 0.969144H75.34L76.67 2.50441H79.83L78.5 0.969144H457.442L458.762 2.50441H461.992L460.662 0.969144H461.292L462.612 2.50441H465.782L464.452 0.969144H465.552L472.702 9.27348L472.662 10.5528Z" fill="#00FF84"/>
          </g>
          <defs>
          <clipPath id="clip0_365_36">
          <rect width="474" height="216" fill="white" transform="translate(0 0.248047)"/>
          </clipPath>
          </defs>
        </svg>
        <motion.p
        variants={slideLeftWithFade}
        initial='initial'
        whileInView='whileInView'
        transition={slideLeftWithFade.transition}
        viewport={{once: true}}
        >
        You don’t have to be a computer science student to solve them but you need to have a base knowledge in <span className='text-iocGreen'>algorithms</span>  and<span className='text-iocGreen'> data structures</span>
        </motion.p>
      </motion.div>
      </div>
    </div>
    </div>
    </section>
  )
}

export default TheChallenge
import React from 'react'
import { motion } from 'framer-motion';
import { riseWithFade } from '../utils/animations';
const TheEvent = () => {
  return (
    <section className={`w-full flex flex-col justify-start items-center px-6 sm:px-24 md:px-40 py-32 gap-4 `} id='theEvent'>
    <motion.p 
    initial='initial'
    whileInView='whileInView'
    transition={riseWithFade.transition}
    variants={riseWithFade}
    className=' text-iocPurpilLight text-xl mono'>THE EVENT</motion.p>
    <motion.h1 className='hacked heading text-5xl md:text-6xl text-white text-center'
    initial='initial'
    whileInView='whileInView'
    transition={riseWithFade.transition}
    variants={riseWithFade}
    >Impact of code</motion.h1>
    <motion.p 
    initial='initial'
    whileInView='whileInView'
    transition={riseWithFade.transition}
    variants={riseWithFade}
    className='roboto text-md sm:text-xl md:text-2xl text-center font-normal text-gray-300 uppercase'>Impact of code is a <span className='text-white font-semibold'>one-week-long dev event</span> that consists of daily coding challenges wrapped up in a story scenario under the theme of an <span className='text-white font-semibold'>apocalyptic world</span> (prequel to last year’s story) in which we follow the steps of a character as he solves his way to escape the end.</motion.p>
    <motion.p 
    className='roboto text-md sm:text-xl md:text-2xl  text-center font-normal text-gray-300 uppercase'
    initial='initial'
    whileInView='whileInView'
    transition={riseWithFade.transition}
    variants={riseWithFade}
    >Each day participants will discover a new primary challenge and a bonus challenge with a chance to win points after solving each one.</motion.p>
    </section>
  )
}

export default TheEvent
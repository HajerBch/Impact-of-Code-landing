import React from 'react'
import { motion } from 'framer-motion';
import { riseWithFade } from '../utils/animations';
import FaqItem from '../components/FaqItem';
import FinalScene from '../components/FinalScene';

const Faq = () => {
  return (
    <section className={` w-full flex flex-col items-center px-6 md:px-64 py-12 pt-52 pb-[86%] md:pb-[64%] gap-2 sky relative overflow-hidden`} id='faq'>
    <FinalScene />
    <motion.p 
    initial='initial'
    whileInView='whileInView'
    transition={riseWithFade.transition}
    variants={riseWithFade}
    className=' text-iocPurpilLight text-xl mono'>FAQS</motion.p>
    <motion.h1 className='hacked heading text-5xl md:text-6xl text-white text-center pb-6 md:pb-20'
    initial='initial'
    whileInView='whileInView'
    transition={riseWithFade.transition}
    variants={riseWithFade}
    >Frequently asked questions</motion.h1>
    <div className='w-full z-40'>
    <FaqItem question='What is Impact of Code?' answer='IOC stands for Impact of Code. Impact of code is a one week long event created by Micro club in collaboration with Etudz Academy that consists of algorithmic challenges wrapped in a compelling story , each day the challenges get harder and harder, by solving them you gain a score which will elavate your rankings among the participants and gain you chances to win valuable prizes!  🎁' />
    <FaqItem question='How can I participate?' answer='You can participate by registering on our website and joining our discord server. You will receive an email with all the details.' />
    <FaqItem question='What are the prizes?' answer='The prizes are as follows: 1st place: 1000$ 2nd place: 500$ 3rd place: 250$' />
    <FaqItem question='How can I win?' answer='You can win by solving the daily challenges and submitting your solutions on our website. The more challenges you solve, the more points you get. The top 3 participants with the most points will win the prizes.' />
    <FaqItem question='What are the rules?' answer='The rules are as follows: 1. You must be a student. 2. You must be 18 years old or older. 3. You must be a resident of Algeria. 4. You must be a member of our discord server. 5. You must solve the daily challenges and submit your solutions on our website.' />
    <FaqItem question='What is the schedule?' answer='The event will start on the 1st of August and end on the 7th of August. Each day, a new challenge will be released at 12:00 PM GMT+1. The deadline for submitting your solutions is 11:59 PM GMT+1.' last />
    </div>
    </section>
  )
}

export default Faq
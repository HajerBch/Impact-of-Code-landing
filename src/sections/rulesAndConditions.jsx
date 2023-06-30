import React from 'react'
import RuleAndConditionLine from '../components/RuleAndConditionLine'
import pic1 from '../assets/r-a-c1.png'
import pic2 from '../assets/r-a-c2.png'

const RulesAndConditions = () => {
  return (
    <section className='w-full flex flex-col items-center pt-32 md:py-32 gap-16 sm:gap-24 md:gap-32 overflow-hidden' id='rulesAndConditions'>
        <h1 className='hacked heading text-5xl md:text-6xl px-6 text-white text-center'>Rules and Conditions</h1>
        <div className='w-full flex items-center justify-center pb-[90%] md:pb-[16%] relative'>
        <img src={pic1} alt="" className='absolute -left-2 -top-7 md:w-[38%] hidden md:block'/>
        <img src={pic2} alt="" className='absolute -bottom-32 right-0 md:-right-2 md:-bottom-64 w-[82%] md:w-[46%] z-0'/>
        <div className='flex flex-col gap-16 md:gap-20 justify-center items-center mx-6 sm:mx-12 sm:max-w-6xl'>
        <RuleAndConditionLine
           content='Make sure you register for the event and respect all of the previously stated regulations.'
          icon = 'user'
          direction='right'
        />
        <RuleAndConditionLine 
           content='Do not touch the platform or conduct any sort of attack on it.'
          icon = 'hacker'
          direction='right'
            
          />
        <RuleAndConditionLine 
           content='Do not touch the platform or conduct any sort of attack on it.'
          icon = 'timer'
          direction={'right'}
          />
          <RuleAndConditionLine 
           content='Make sure you register for the event and respect all of the previously stated regulations.'
          icon = 'form'
          direction={'left'}
          />
          <RuleAndConditionLine 
           content='Do not touch the platform or conduct any sort of attack on it.'
          icon = 'eye'
          direction={'left'}
          />
          <RuleAndConditionLine 
           content='Do not touch the platform or conduct any sort of attack on it.'
          icon = 'share'
          direction={'left'}
          />
        </div>
        </div>
    </section>
  )
}

export default RulesAndConditions
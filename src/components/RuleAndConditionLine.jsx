import React from 'react'
import { svgs } from '../assets/svgs'

const RuleAndConditionLine = ({direction, content, icon}) => {
  return (
    <div className='flex w-full items-center justify-center gap-4 md:gap-6 z-10'>
    <p className={'flex-grow roboto  text-md sm:text-lg md:text-2xl  text-right opacity-0'+ (direction === 'left' ? ' text-white opacity-100':' hidden md:block') }>
   {content}
    </p>
    <div className={`flex justify-center w-16 h-16  md:w-24 md:h-24 min-w-[6rem] items-center relative`}>
        <svg viewBox="0 0 222 223" fill="none" xmlns="http://www.w3.org/2000/svg"
        className='absolute w-[200%]'
        preserveAspectRatio="none"
        >
        {svgs[icon]}
        </svg>
    </div>
    <p className={'flex-grow roboto text-md sm:text-lg md:text-2xl opacity-0'+ (direction === 'right' ? ' text-white opacity-100':' hidden md:block') }>
    {content}
    </p>
    </div>
  )
}

export default RuleAndConditionLine
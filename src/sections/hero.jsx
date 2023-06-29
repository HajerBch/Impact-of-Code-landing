import React from 'react'

const hero = () => {
  return (
    <section className={`w-full flex flex-col justify-start items-center px-6 md:px-64 pt-40 pb-[640px] gap-6 `} id='heroSection'>
    <p className='text-iocPurpilLight text-xl mono'>IMPACT OF CODE</p>
    <h1 className='hacked heading leading-[64px] md:leading-[106px] text-6xl md:text-9xl  text-white text-center'>Save the world from Apocalypse</h1>
    <p className='mono text-3xl md:text-4xl text-iocGreen whitespace-nowrap'>16TH AUGUST 2023</p>
    <div className='flex flex-col justify-center items-center gap-1 text-iocGreen'>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="animate-bounce rotate-90">
  <g transform="rotate(90 12 12)">
    <path fill="currentColor" d="M10 20H8V4h2v2h2v3h2v2h2v2h-2v2h-2v3h-2v2z" />
  </g>
</svg>
    <p className='mono text-lg'>SCROLL TO EXPLORE</p>
    </div>
    </section>
  )
}

export default hero
import React, { useRef, useState } from 'react';
import video from '../assets/video.mov'
import Unmuted from '../components/Unmuted';
import Muted from '../components/Muted';

const Recording = () => {
    const videoRef = useRef(null);
    const [muted, setMuted] = useState(true);
  
  const handleTogglePlay = () => {
    const video = videoRef.current;
    if (video.muted) {
      video.muted = false;
      setMuted(false);
    } else {
      video.muted = true;
      setMuted(true);
    }
  };

  return (
    <section className='flex flex-col md:flex-row items-center w-full md:gap-4 px-6 md:px-24 pt-12 '>
    <div className='flex flex-col justify-center items-center cursor-pointer hover:opacity-70 order-last md:order-first' onClick={handleTogglePlay}>
        {muted ?
        <>
            <Muted className="w-10 md:w-20 h-8 md:h-16"/> 
            <p className='text-[#73FAC6] mono text-md md:text-xl pt-1'>UNMUTE</p>
         </>
         : <>
            <Unmuted  className="w-10 md:w-20 h-8 md:h-16"/> 
            <p className='text-[#73FAC6] mono  text-md md:text-xl pt-1'>MUTE</p>
         </>
         } 
         </div>
    
    <video src={video} 
    autoPlay loop muted
    id='recording'
    ref={videoRef}
    className='flex-grow'
    ></video>
    </section>
  )
}

export default Recording
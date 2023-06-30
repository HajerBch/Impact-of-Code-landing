import React from 'react'
import trees from '../assets/trees.svg'
import layer1 from '../assets/layer1.svg'
import layer2 from '../assets/layer2.png'
import man from '../assets/man.svg'
import moon from '../assets/moon.svg'
import grass from '../assets/grass.svg'
import {  useParallax } from 'react-scroll-parallax'

const FinalScene = () => {
    const treesParallax = useParallax({
        scale: [1.1, 1.4, 'easeInQuad'],
      });

    const  moonParallax = useParallax({
        translateY: [30, -40],
        });

    const manParallax = useParallax({
        translateY: [10, 10],
        });

    const layer1Parallax = useParallax({
        translateY: [-20, 20],
        easing: [0, 0.55, 0.45, 1]
        });

    const layer2Parallax = useParallax({
            translateY: [25, 20],
            easing: [0, 0.55, 0.45, 1]
        });


    
  return (
    <div className='absolute bottom-0 w-full object-cover'>
    <img src={grass} alt="" className='w-full absolute -bottom-24 md:-bottom-64 z-30' />
    <img src={trees} alt="" className='w-full absolute -bottom-12 md:-bottom-40 z-30' ref={treesParallax.ref} />
    <img src={layer1} alt="" className='w-full absolute bottom-0 md:bottom-0 z-20' ref={layer1Parallax.ref}/>
    <img src={layer2} alt="" className='w-full absolute bottom-0 md:bottom-0 z-10' ref={layer2Parallax.ref}/>
    <img src={man} alt="" className='w-full absolute bottom-0 md:bottom-0 z-20' ref={manParallax.ref}/>
    <img src={moon} alt="" className='w-full absolute bottom-52 md:bottom-96 z-0' ref={moonParallax.ref}/>
    </div>
  )
}

export default FinalScene
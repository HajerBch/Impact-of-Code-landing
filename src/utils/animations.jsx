export const riseWithFade = {
    initial: { opacity: 0,  y : 100 },
     whileInView :{ opacity: 1, scale: 1 , y : 0},
    transition :{
        duration: 0.9,
        delay: 0.4,
        ease: [0, 0.71, 0.2, 1.01]
      },
      viewport: {once: false , amount : 1 }
}

export const slideRightWithFade = {
    initial: { opacity: 0,  x : -100 },
     whileInView :{ opacity: 1, scale: 1 , x : 0},
    transition :{
        duration: 0.9,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01]
      },
      viewport: {once: false , amount : 1 }
}
export const slideLeftWithFade = {
    initial: { opacity: 0,  x : 100 },
     whileInView :{ opacity: 1, scale: 1 , x : 0},
    transition :{
        duration: 0.9,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01]
      },
      viewport: {once: false , amount : 1 }
}

export const frameOpen = {
    initial: { opacity: 0,  x : 100},
        whileInView :{ opacity: 1,  x : 0},
        transition :{
            duration: 0.4,
            delay: 0.1,
            ease: 'linear'
        },
        viewport: {once: false , amount : 1 }
}

export const blink = {
    initial: { opacity: 0 },
    whileInView :{ opacity: 1 },
    transition :{
        duration: 0.5, repeat: Infinity, repeatType: 'reverse'
    },
    viewport: {once: false , amount : 0.5 }
}


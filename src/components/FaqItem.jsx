import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { slideRightWithFade } from '../utils/animations';
import faqIcon from '../assets/faq.svg'

const FaqItem = ({ question, answer, last }) => {
const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={'flex flex-col py-6 md:py-8 gap-4' + (last? '':' border-b border-iocPurpilLight') }>
    <motion.div className='flex items-center w-ful gap-4 cursor-pointer' onClick={toggleAccordion} 
    variants={slideRightWithFade}
    initial='initial'
    whileInView='whileInView'
    transition={slideRightWithFade.transition}
    >
        <img  src={faqIcon} alt='faq icon' className={ (isOpen ? 'rotate-90' : '')}  />
        <p className="roboto text-xl md:text-2xl font-semibold text-white uppercase">{question}</p>
    </motion.div>
    <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="pl-9 overflow-hidden"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: 'auto' },
              collapsed: { height: 0 },
            }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <p className="text-gray-300 text-xl  roboto">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FaqItem
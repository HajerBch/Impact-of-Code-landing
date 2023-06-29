import React from 'react'
import { useState, useEffect} from 'react'
import logo from '../assets/logo.svg'


const Navbar = () => {

  const [activeSection, setActiveSection] = useState('')
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setIsNavbarVisible(true); // User is scrolling up, show the navbar
      } else {
        setIsNavbarVisible(false); // User is scrolling down, hide the navbar
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);


  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
      let currentSectionId = '';
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSectionId = section.id;
        }
      });
  
      setActiveSection(currentSectionId);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  
  const handleSectionClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView();
      setActiveSection(sectionId);
    }
  };
  
  const menu = [  
    {
      id: 'theEvent',
      title: 'The Event',
    },
    {
      id: 'rulesAndConditions',
      title: 'Rules and Conditions',
    },
    {
      id: 'faq',
      title: 'FAQs',
    },
  ];

  return (
    <div className={`fixed top-0 left-0 mx-auto flex justify-between w-full px-6 sm:px-20 pt-6 pb-12 bg-gradient-to-b from-black  from-30% z-50 ${isNavbarVisible ? '' : ' opacity-0 hover:opacity-100'} transition duration-300`}>
      <div className='w-10'>
        <img src={logo} alt='logo' className='w-full' />
      </div>
      <div className='flex gap-16'>
      <nav className='hidden md:flex gap-16 items-center roboto text-xl text-gray-400 '>
      {
        menu.map((item) => (
          <li>
            <a href={`#${item.id}`} onClick={() => handleSectionClick(item.id)} className={activeSection === item.id ? ' text-white cursor-pointer' : 'hover:text-white cursor-pointer'}>
              {item.title}
            </a>
          </li>
        ))
      }
      </nav>
      <button className='flex justify-center items-center gap-2 text-iocGreen border border-iocGreen py-2 px-4 roboto uppercase'>
        Start
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 20H8V4h2v2h2v3h2v2h2v2h-2v2h-2v3h-2v2z"/></svg>
      </button>
      </div>
        
    </div>
  )
}

export default Navbar
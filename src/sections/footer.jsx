 import React from 'react'
 import mcLogo from '../assets/mc-logo.svg'
 import facebook from '../assets/facebook.svg'
 import insta from '../assets/instagram.svg'
 import linkedin from '../assets/linkedin.svg'
 import discord from '../assets/discord.svg'
import Menu from '../components/Menu'

 
 const Footer = () => {

 const links = [
    {
        icon : facebook,
        link : 'https://www.facebook.com/Micro.Club.USTHB'
    },
    {
        icon : linkedin,
        link : 'https://www.linkedin.com/company/micro-club-usthb'
    },
    {
        icon : insta,
        link : 'https://www.instagram.com/micro_club_usthb/'
    },
    {
        icon : discord,
        link : 'https://discord.gg/2Y5Qz2Q'
    }
]
   return (
     <section className='flex flex-col md:flex-row px-6 md:px-24 py-32 items-center gap-12 md:justify-between'>
     <div className='flex flex-col gap-6 justify-start items-start'>
        <div className='flex items-center gap-6'>
            <p className='roboto text-2xl font-normal text-white uppercase'>Powered by</p>
            <img src={mcLogo} alt='logo' className='h-16 w-24'/>
        </div>
        <p className='roboto text-xl font-normal text-gray-300 max-w-xl'>
       <span className='text-white text-semibold'> Micro Club </span>is the first founded scientific club in Algeria, back in March 5th, 1985. We focus on Computer Science and IT field as we work to popularize among the student community.
        </p>
        <div className='flex gap-6 items-center'>
       {
        links.map((item)=>
        (
        <a href={item.link} target='_blank' rel="noreferrer">
        <img src={item.icon} alt="icon-link" />
        </a>
        )
        )
       }
        </div>
     </div>
     <Menu className="order-first md:order-last"/>
     </section>
   )
 }
 
 export default Footer
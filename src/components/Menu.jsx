import React from 'react'

const Menu = (props) => {
    const handleSectionClick = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView();
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
    <div className={'flex flex-col gap-4 items-center md:items-end roboto text-xl text-gray-400 '+ props.className }>
        {
        menu.map((item) => (
          <li>
            <a href={`#${item.id}`} onClick={() => handleSectionClick(item.id)} className={'block w-full hover:text-white cursor-pointer text-right'}>
              {item.title}
            </a>
          </li>
        ))
      }
    </div>
  )
}

export default Menu
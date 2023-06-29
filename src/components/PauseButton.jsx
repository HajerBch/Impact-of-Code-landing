import React from 'react'

const PauseButton = (props) => {
  return (
    <div {...props} className='cursor-pointer'>
        <svg  width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.959 47.5312H25.8716V12.5312H16.959V47.5312ZM36.2206 12.5312V47.5312H44.959V12.5312H36.2206Z" fill="#73FAC6"/>
        </svg>
    </div>
  )
}

export default PauseButton
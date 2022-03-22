import React from 'react'
import{BsLinkedin} from 'react-icons/bs'
import{FaGithub} from 'react-icons/fa'
import{FiDribbble} from 'react-icons/fi'
const HeaderSocial = () => {
  return (
    <div className='headerSocials'>
        <a href="https://linkedin.com" rel="noreferrer" target='_blank'> <BsLinkedin /> </a>
        <a href="https://github.com" rel="noreferrer" target='_blank'> <FaGithub /> </a>
        <a href="https://instagram.com" rel="noreferrer" target='_blank'> <FiDribbble/> </a>
    </div>
  )
}

export default HeaderSocial
import React from 'react'
import{BsLinkedin} from 'react-icons/bs'
import{FaGithub} from 'react-icons/fa'
import{ FiInstagram} from 'react-icons/fi'
const HeaderSocial = () => {
  return (
    <div className='headerSocials'>
        <a href="https://www.linkedin.com/in/imnurav/" rel="noreferrer" target='_blank'> <BsLinkedin /> </a>
        <a href="https://github.com/kumarnurav9811/" rel="noreferrer" target='_blank'> <FaGithub /> </a>
        <a href="https://www.instagram.com/n.u.r.a.v/" rel="noreferrer" target='_blank'> <FiInstagram/> </a>
    </div>
  )
}

export default HeaderSocial
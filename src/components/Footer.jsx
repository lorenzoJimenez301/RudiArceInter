import logo from '@/assets/images/Logo_RAI.svg'
import Image from 'next/image';
import React from 'react'
import { BsFacebook, BsLinkedin, BsWhatsapp } from "react-icons/bs";

const Footer = () => {

  const date = new Date();
  const year = date.getFullYear()

  return (
    <footer className='flex flex-col items-center justify-center gap-3 py-6 lg:py-11 text-xs md:text-sm px-6 lg:px-0 border-[#272727] border-t-[0.1rem]'>
      <div className='w-auto'>
        <Image className='w-36 lg:w-52' src={logo} alt="RudiArceInternacional" />
      </div>
      <div className=' w-auto flex text-center flex-col gap-4'>
        <ul className='flex items-center justify-center text-2xl gap-4'>
          <li><BsWhatsapp className='cursor-pointer hover:text-azulCustom transition-all duration-300' target='_blank' href='https://wa.me/+50683105134?text=Hola%21%2C%20Brindame%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20seguros%2C%20por%20favor.'/></li>
          <li><BsLinkedin className='cursor-pointer hover:text-azulCustom transition-all duration-300' target='_blank' href='https://www.linkedin.com/in/rudi-arce-moya-3894774a/'/></li>
          <li><BsFacebook className='cursor-pointer hover:text-azulCustom transition-all duration-300' href='#' /></li>
        </ul>
        <p>© Rudi Arce Internacional {year}. Todos los derechos reservados</p>
      </div>
    </footer>
  )
}

export default Footer
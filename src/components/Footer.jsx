import logo from '@/assets/images/NavBarLogo.png'
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
          <li><BsWhatsapp /></li>
          <li><BsLinkedin /></li>
          <li><BsFacebook /></li>
        </ul>
        <p>© Rudi Arce Internacional {year}. Todos los derechos reservados</p>
      </div>
    </footer>
  )
}

export default Footer
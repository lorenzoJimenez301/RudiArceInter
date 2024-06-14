"use client"

import Image from 'next/image'
import callCenter from '@/assets/images/Contact_Image.png'
import { BsLinkedin, BsFacebook, BsWhatsapp } from 'react-icons/bs'
import Formulario from 'src/components/Formulario';

const Contacto = () => {

  return (
    <section className='pt-32 pb-20 lg:px-14 lg:pb-0 lg:pt-0 h-auto lg:h-screen flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-3 xl:gap-28'>
      <div className='px-10 w-full lg:max-w-[35rem]'>
        <h2 className='text-4xl lg:text-6xl font-semibold text-center'>Contacto</h2>
        <div className='flex justify-center items-center gap-3 w-full my-7'>
          <hr className='w-full border-[.5] border-grisCustom' />
        </div>
        <Formulario />
      </div>
      <div className='hidden w-full lg:w-auto lg:flex flex-col justify-center items-center gap-20'>
        <Image className='hidden lg:block w-[35rem] lg:w-[30rem] xl:w-[35rem]' src={callCenter} alt='Contacto Rudi Arce Internacional' />
        <div className='flex gap-24 lg:gap-12 xl:gap-20 justify-start items-start'>
          <div className='flex flex-col items-center justify-center gap-2'>
            <h4 className='text-azulCustom font-semibold'>Correo</h4>
            <p className=''>rarceseguros@hotmail.com</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-2'>
            <h4 className='text-azulCustom font-semibold'>Teléfono</h4>
            <p className=''>8310-5134</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-2'>
            <h4 className='text-azulCustom font-semibold min-w-max'>Redes Sociales</h4>
            <div className='flex gap-5'>
              <a className='hover:text-azulCustom transition-all duration-300' target='_blank' href='https://www.linkedin.com/in/rudi-arce-moya-3894774a/'><BsLinkedin /></a>
              <a className='hover:text-azulCustom transition-all duration-300' target='_blank' href='https://wa.me/+50683105134?text=Hola%21%2C%20Brindame%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20seguros%2C%20por%20favor.'><BsFacebook /></a>
              <a className='hover:text-azulCustom transition-all duration-300' target='_blank' href='#'><BsWhatsapp /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto
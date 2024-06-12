import React from 'react'
import Image from 'next/image'
import Rudi from '@/assets/images/Rudi Editado.png'
import rudiLogo from '@/assets/images/Logo_RAI.svg'
import OleLogo from '@/assets/images/Ole_Logo.svg'
import hiscoxLogo from '@/assets/images/Hiscox_Logo.svg'
import ibmLogo from '@/assets/images/IMB_logo.svg'
import vumiLogo from '@/assets/images/Vumi_Logo.svg'
import { FaArrowRight } from 'react-icons/fa';
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { FaPerson, FaDiamond } from 'react-icons/fa6';


const SobreMi = () => {
  return (
    <section className='flex flex-col-reverse justify-center lg:flex-row lg:gap-20 pt-28 lg:pt-20 px-7'>
      <div className='flex justify-end items-center'>
        <Image priority className='imageIndex w-30 lg:w-[35rem] xl:w-[40rem]' src={Rudi} alt='Foto de Rudi Arce Moya' />
      </div>
      <div className=' flex flex-col justify-center w-full lg:w-3/6'>
        <div>
          <h3 className='font-bold text-3xl lg:text-5xl'>Hola!, soy</h3>
          <h2 className='font-bold text-4xl lg:text-7xl lg:mt-5'>Rudi Arce Moya </h2>
          <div className='flex justify-center items-center gap-3 my-7 w-full'>
            <hr className='w-full border-[.5] border-grisCustom' />
          </div>
          <p className='text-xs lg:text-lg leading-5'>Asesor de seguros en toda América Latina con más de 30 años de experiencia en la industria de seguros. Mi carrera inició en 1993 en la Compañía Aseguradora del Estado de Costa Rica como agente de seguros, donde trabajé desde finales de 2003 hasta finales de 2020. A partir de 2020, me convertí en corredor de seguros, empezando a vender a todas las aseguradoras de Costa Rica. En julio de 2023, International Master Brokers me otorgó la licencia para trabajar internacionalmente con la empresa Ole Life como asesor de seguros internacional.</p>
        </div>
        <div className='md:max-w-[60%] flex lg:flex-row items-center justify-between lg:justify-start gap-0 lg:gap-5 my-4 lg:my-6'>
          <Image className='w-12 lg:w-20' height={200} width={200} src={OleLogo} alt='logos de socios de rudi' />
          <Image className='w-12 lg:w-20' height={200} width={200} src={hiscoxLogo} alt='logos de socios de rudi' />
          <Image className='w-12 lg:w-16' height={200} width={200} src={ibmLogo} alt='logos de socios de rudi' />
          <Image className='w-12 lg:w-20' height={200} width={200} src={vumiLogo} alt='logos de socios de rudi' />
          <Image className='w-12 lg:w-20' height={200} width={200} src={rudiLogo} alt='logos de socios de rudi' />
        </div>
        <div className='flex flex-col lg:flex-row items-center gap-4 lg:gap-12'>
          <p className='flex flex-col lg:items-center lg:flex-row gap-3 text-xs lg:text-lg w-full lg:w-auto text-justify '>Puedes saber mas sobre y mis servicios aquí <FaArrowRight className='rotate-90 lg:rotate-0 text-xl' /></p>
          <div className='text-lg lg:text-2xl flex gap-4 w-full lg:w-auto'>
            <a className='hover:text-azulCustom transition-all duration-300' href='#'><BsLinkedin /></a>
            <a className='hover:text-azulCustom transition-all duration-300' href='#'><BsWhatsapp /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreMi

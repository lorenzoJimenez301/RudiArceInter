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


const SobreMi = () => {
  return (
    <section className='flex flex-col-reverse justify-center xl:flex-row gap-0 lg:gap-10 pt-28  px-7 md:px-8 '>
      <div className='flex justify-center items-center xl:justify-end xl:items-end w-auto md:w-full 2xl:w-auto'>
        <Image priority className='imageIndex w-30 md:w-[40rem] lg:w-[50rem] xl:w-[50rem]' src={Rudi} alt='Foto de Rudi Arce Moya' />
      </div>
      <div className=' flex flex-col justify-center w-full lg:w-auto pb-10 lg:pb-10'>
        <div className='pr-4 md:pr-0'>
          <h3 className='font-bold text-3xl lg:text-5xl'>Hola!, soy</h3>
          <h2 className='font-bold text-4xl lg:text-5xl xl:text-6xl lg:mt-5'>Rudi Arce Moya </h2>
          <div className='flex justify-center items-center gap-3 my-7 md:my-5 w-full'>
            <hr className='w-full border-[.5] border-grisCustom' />
          </div>
          <p className=' w-[100%] lg:w-[80%] max-w-[80rem]'>Asesor de seguros en toda América Latina con más de 30 años de experiencia en la industria de seguros.</p>
          <p className='mt-5  w-[100%] xl:w-[80%] max-w-[80rem]'>Mi carrera inició en el año 1993 en la Compañía Aseguradora (INS) del Estado de Costa Rica. </p>
          <p className='mt-5  w-[100%] xl:w-[80%] max-w-[80rem]'>Como agente de seguros, inicié a finales del año 2003 hasta el año 2020. </p>
          <p className='mt-5  w-[100%] xl:w-[80%] max-w-[80rem]'>A finales del año 2020, me convertí en Corredor de Seguros, lo cual me permite vender a todas las aseguradoras acreditadas en Costa Rica.</p>
          <p className='mt-5  w-[100%] xl:w-[80%] max-w-[80rem]'>En julio de 2023, International Master Brokers me otorgó la acreditación como Asesor Internacional Independiente para trabajar internacionalmente con la empresa Ole Life como Asesor de Seguros Internacional.</p>
        </div>
        <div className='sm:max-w-[50%] flex lg:flex-row items-center justify-between lg:justify-start gap-0 lg:gap-5 my-4 md:my-4 xl:my-6'>
          <Image className='w-12 lg:w-15 xl:w-20' height={200} width={200} src={OleLogo} alt='logos de socios de rudi' />
          <Image className='w-12 lg:w-15 xl:w-20' height={200} width={200} src={hiscoxLogo} alt='logos de socios de rudi' />
          <Image className='w-12 lg:w-15 xl:w-16' height={200} width={200} src={ibmLogo} alt='logos de socios de rudi' />
          <Image className='w-12 lg:w-15 xl:w-20' height={200} width={200} src={vumiLogo} alt='logos de socios de rudi' />
          <Image className='w-12 lg:w-15 xl:w-20' height={200} width={200} src={rudiLogo} alt='logos de socios de rudi' />
        </div>
        <div className='flex flex-col xl:flex-row items-center gap-4 lg:gap-5 xl:gap-12 max-w-[40rem]'>
          <p className='flex flex-col xl:items-center xl:flex-row gap-3 text-xs lg:text-lg w-full text-justify min-w-max'>Puedes saber mas sobre y mis servicios aquí <FaArrowRight className='rotate-90 xl:rotate-0 text-xl' /></p>
          <div className='text-lg lg:text-2xl flex gap-4 w-full'>
            <a className='hover:text-azulCustom transition-all duration-300' href='#'><BsLinkedin /></a>
            <a className='hover:text-azulCustom transition-all duration-300' href='#'><BsWhatsapp /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreMi

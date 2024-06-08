"use client"

import family from '@/assets/images/Index-Family.png'
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {

  const [isHover, setHover] = useState(false);

  function toggler(state) {
    setHover(state)
  }

  return (
    <main className='flex flex-col lg:flex-row items-center justify-start h-full w-full'>
      <div className='flex flex-col lg:flex-row items-center justify-center pt-10 pb-6 px-12 md:px-16 lg:px-0 lg:pl-16 lg:py-0 text-center lg:text-justify'>
        <div className='leading-tight flex flex-col justify-center items-center lg:items-start gap-1'>
          <h1 className='text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-[max(48px,min(5vw,50px))] font-flatline'>Rudi Arce Internacional</h1>
          <h2 className='tracking-tighter w-max text-[1.7rem] sm:text-5xl md:text-6xl xl:text-[max(50px,min(5vw,100px))] font-flatline font-normal mb-3'>Protegiendo tu <strong>futuro</strong>, hoy</h2>
          <p className=' w-[100%] lg:w-[70%] text-xs md:text-sm leading-snug'>Con un firme compromiso con la innovación y la excelencia, cuidamos el futuro de nuestros clientes en la región de America Latina. </p>
          <div className='lg:flex items-center gap-5 hidden'>
            <button onMouseEnter={() => toggler(true)} onMouseLeave={() => toggler(false)} className='text-sm cursor-pointer text-azulCustom flex items-center gap-3 min-w-max'>Mis servicios aplican restricciones* <FaArrowRight /></button>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHover ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className='text-sm p-3 bg-red-500'>
              Países Restringidos de nuestros servicios: <strong>Anguila, Haiti, Cuba, Surinam, Costa Rica.</strong>
            </motion.div>
          </div>
          <Link className='hidden lg:block' href={'/seguros'}>
            <motion.button
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className='bg-azulCustom p-2 px-3 flex items-center justify-center gap-3 text-sm'>Adquirir Seguro
            </motion.button>
          </Link>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center w-full'>
        <Image className='w-[20rem] sm:w-[25rem] lg:w-[38rem] imageIndex' src={family} alt='Family' />
      </div>
    </main>
  );
}

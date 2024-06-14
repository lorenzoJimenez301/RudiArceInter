"use client"

import family from '@/assets/images/Family.png'
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
    <main className='flex  flex-col lg:flex-row items-center justify-between pt-20 lg:pt-0 gap-32")]'>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
        viewport={{once: true}}
        className='flex flex-col lg:flex-row items-center justify-center pt-10 pb-6 px-5 md:px-16 lg:px-0 lg:pl-16 lg:py-0 text-center lg:text-justify'>
        <div className='leading-tight flex flex-col justify-center items-center lg:items-start lg:gap-1 gap-0'>
          <h1 className='text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-[max(48px,min(5vw,50px))] font-flatline'>Rudi Arce Internacional</h1>
          <h2 className='lg:indent-[-5px] tracking-tighter min-w-max text-[1.7rem] sm:text-5xl md:text-6xl xl:text-[max(50px,min(5vw,100px))] font-normal lg:mb-9'>Protegiendo tu <strong>futuro</strong>, hoy!</h2>
          <p className=' w-[100%] lg:w-[70%] text-xs md:text-lg leading-snug mt-3 lg:mt-0 font-light'>Con un firme compromiso con la innovación y la excelencia, cuidamos el futuro de nuestros clientes en la región de America Latina. </p>
          <div className='lg:flex items-center gap-5 hidden'>
            <button onMouseEnter={() => toggler(true)} onMouseLeave={() => toggler(false)} className='text-sm  cursor-pointer text-azulCustom flex items-center gap-3 min-w-max'>Mis servicios aplican restricciones* <FaArrowRight /></button>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHover ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className='text-xs p-3 bg-red-500'>
              Países Restringidos de nuestros servicios: <strong>Anguila, Haiti, Cuba, Surinam, Costa Rica.</strong>
            </motion.div>
          </div>
          <Link className='hidden lg:block' href={'/seguros#cotizador'}>
            <motion.button
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className='bg-azulCustom p-2 px-3 flex items-center justify-center gap-3 text-sm mt-5 font-semibold'>Adquirir Seguro
            </motion.button>
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
        className='flex flex-col items-center justify-center'>
        <Image className='w-[40rem] lg:w-[40rem] imageIndex' src={family} alt='Family' />
      </motion.div>
    </main>
  );
}
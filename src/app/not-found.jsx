"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import { CiFaceFrown } from "react-icons/ci";
import { FaDiamond } from 'react-icons/fa6';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';



const Notfound = () => {
    return (
        <section className='h-screen  flex flex-col justify-center items-center'>
            <div className="flex flex-row-reverse items-center justify-center gap-6">
                <CiFaceFrown className="stroke-1 lg:text-9xl text-7xl" />
                <h2 className='lg:text-[10rem] text-8xl font-bold'>404</h2>
            </div>
            <div className='flex justify-center items-center gap-3 w-[75%] lg:w-[25%] '>
                <hr className='lg:w-full w-[75%] border-[.5] border-grisCustom' />
                <FaDiamond className='lg:text-5xl text-3xl text-[#272727]' />
                <hr className='lg:w-full w-[75%] border-[.5] border-grisCustom' />
            </div>
            <h2 className='lg:text-lg text-sm font-light'>Página no enconcontrada</h2>
            <Link href={'/'}>
                <motion.button
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className=' bg-azulCustom p-2 px-3 flex items-center justify-center gap-2 text-sm mt-9'>
                    <FaArrowLeft />
                    Volver al Inicio
                </motion.button>
            </Link>
        </section>
    );
}

export default Notfound;
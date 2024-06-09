"use client"

import { React, useState, useEffect } from 'react';
import { CiMenuFries } from "react-icons/ci";
import { BsFacebook, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { motion } from 'framer-motion';
import { TfiClose } from "react-icons/tfi";
import Image from 'next/image';
import navLogo from '@/assets/images/Logo_RAI.svg';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const isTablet = useMediaQuery({ maxWidth: 1024 });

    useEffect(() => {
        // setIsOpen(false); // Cierra el menú cuando cambia la consulta de medios
        if (isOpen) {
            // Desactivar el scroll de la página cuando el menú está abierto
            document.body.style.overflowY = 'hidden';
        } else {
            // Habilitar el scroll de la página cuando el menú está cerrado
            document.body.style.overflowY = 'auto';
        }
    }, [isOpen]); // Se ejecuta cuando isTablet cambia

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='text-center w-full text-white text-xs md:text-lg'>
            <div className={`flex w-full items-center justify-between bg-blackCustom z-20 fixed lg:relative top-0 left-0 right-0`}>
                <Image priority className='ml-2 lg:ml-5' src={navLogo} alt='Logo' height={80} />
                {isOpen ?
                    <TfiClose onClick={toggleMenu} className='text-white text-[33px] mr-5 cursor-pointer block lg:hidden' /> :
                    <CiMenuFries onClick={toggleMenu} className='text-white text-[33px] mr-5 cursor-pointer block lg:hidden' />
                }
                <ul className='bg-blackCustom font-poppins font-light justify-center items-center hidden lg:flex text-sm gap-10 w-auto mr-8'>
                    <li className='hover:text-azulCustom transition duration-500'><Link href='/'>Inicio</Link></li>
                    <li className='hover:text-azulCustom transition duration-500'><Link href='/seguros'>Seguro de Vida</Link></li>
                    <li className='hover:text-azulCustom transition duration-500'><Link href='/sobreMi'>Sobre Mi</Link></li>
                    <li className='hover:text-azulCustom transition duration-500'><Link href='/contacto'>Contacto</Link></li>
                    <li><motion.a
                        target='_blank'
                        href='https://wa.me/+50683105134?text=Hola%21%2C%20Brindame%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20seguros%2C%20por%20favor.'
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className='bg-azulCustom p-2 px-3 flex items-center justify-center gap-3'>Whatsapp<BsWhatsapp />
                    </motion.a></li>
                </ul>
            </div>
            <motion.div
                initial={{ transform: 'translateX(100%)' }}
                animate={{ transform: isOpen ? 'translateX(0%)' : 'translateX(100%)' }}
                exit={{transform: 'translateX(0%)'}}
                transition={{ duration: 0.2 }}
                className={`bg-blackCustom min-h-screen h-auto w-full fixed top-[80px] left-0 flex-col font-poppins font-light flex gap-8 justify-start items-center text-xl lg:hidden z-10 overflow-y-auto pt-20 ${isOpen ? 'flex' : 'hidden'}`}>
                <ul className='gap-14 flex justify-center items-center flex-col w-full'>
                    <motion.li initial={{ opacity: 0, y: 50 }} animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 50 }} transition={{ duration: 0.3, stiffness: 1000, velocity: -100 }}>
                        <Link onClick={toggleMenu} href='/'>Inicio</Link>
                    </motion.li>
                    <motion.li initial={{ opacity: 0, y: 50 }} animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 50 }} transition={{ duration: 0.4, stiffness: 1000, velocity: -100 }}>
                        <Link onClick={toggleMenu} href='/seguros'>Seguro de Vida</Link>
                    </motion.li>
                    <motion.li initial={{ opacity: 0, y: 50 }} animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 50 }} transition={{ duration: 0.5, stiffness: 1000, velocity: -100 }}>
                        <Link onClick={toggleMenu} href='/sobreMi'>Sobre Mi</Link>
                    </motion.li>
                    <motion.li initial={{ opacity: 0, y: 50 }} animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 50 }} transition={{ duration: 0.6, stiffness: 1000, velocity: -100 }}>
                        <Link onClick={toggleMenu} href='/contacto'>Contacto</Link>
                    </motion.li>
                    <motion.li initial={{ opacity: 0, y: 50 }} animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 50 }} transition={{ duration: 0.6, stiffness: 1000, velocity: -100 }}>
                        <Link href='https://wa.me/+50683105134?text=Hola%21%2C%20Brindame%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20seguros%2C%20por%20favor.' target='_blank' className='bg-azulCustom py-[11px] px-[30px] font-medium flex items-center justify-center gap-3'>
                            Whatsapp<BsWhatsapp />
                        </Link>
                    </motion.li>
                </ul>
                <div>
                    <ul className='flex gap-6 text-2xl items-center justify-center'>
                        <li><BsLinkedin /></li>
                        <li><BsFacebook /></li>
                        <li className='text-3xl'><MdEmail /></li>
                    </ul>
                </div>
            </motion.div>
        </nav>
    );
}

export default Navbar;

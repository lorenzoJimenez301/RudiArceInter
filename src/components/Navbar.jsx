"use client";

import { React, useState, useEffect } from 'react';
import { } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";
import { BsFacebook, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { motion } from 'framer-motion';
import { TfiClose } from "react-icons/tfi";
import Image from 'next/image';
import navLogo from '/public/assets/images/NavBarLogo.png';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const isTablet = useMediaQuery({ maxWidth: 1024 });

    useEffect(() => {
        setIsOpen(false); // Cierra el menú cuando cambia la consulta de medios
    }, [isTablet]); // Se ejecuta cuando isTablet cambia

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className='text-center w-[100%] text-white text-xs md:text-lg'>
            <div className='flex w-full items-center justify-between bg-blackCustom z-20 '>
                <Image className='ml-5' src={navLogo} alt='Logo' height={80} />
                {isOpen ?
                    <TfiClose onClick={toggleMenu} className='text-white text-[33px] mr-5 cursor-pointer block lg:hidden' /> :
                    <CiMenuFries onClick={toggleMenu} className='text-white text-[33px] mr-5 cursor-pointer block lg:hidden' />
                }
                <ul className='bg-blackCustom  font-poppins font-light justify-center items-center hidden lg:flex text-sm gap-10 w-auto mr-8'>
                    <li className='hover:text-azulCustom transition duration-500'><Link href='/'>Inicio</Link></li>
                    <li className='hover:text-azulCustom transition duration-500'><Link href='/seguros'>Seguro de Vida</Link></li>
                    <li className='hover:text-azulCustom transition duration-500'><Link href='/sobreMi'>Sobre Mi</Link></li>
                    <li className='hover:text-azulCustom transition duration-500'><Link href='/contacto'>Contacto</Link></li>
                    <li><motion.button
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className='bg-azulCustom p-1 px-3 flex items-center justify-center gap-3'>Whatsapp<BsWhatsapp />
                    </motion.button></li>
                </ul>
            </div>
            <motion.div
                initial={{ transform: 'translateX(100%)', display: 'none'}}
                animate={{ transform: isOpen ? 'translateX(0%)' : 'translateX(100%)', display: isOpen ? 'flex' : 'none' }}
                transition={{ duration: 0.1 }}
                className='bg-blackCustom w-full absolute h-full overflow-y-scroll flex-col font-poppins font-light flex gap-8 justify-start items-center text-xl lg:hidden z-50'>
                <ul className='gap-10 h-[70%] flex justify-center items-center flex-col w-fulln'>
                    <motion.li initial={{ opacity: 0, y: 50 }} animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 50 }} transition={{ duration: 0.3, stiffness: 1000, velocity: -100 }}><a href='#'>Inicio</a></motion.li>
                    <motion.li initial={{ opacity: 0, y: 50 }} animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 50 }} transition={{ duration: 0.4, stiffness: 1000, velocity: -100 }}><a href='#'>Seguro de Vida</a></motion.li>
                    <motion.li initial={{ opacity: 0, y: 50 }} animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 50 }} transition={{ duration: 0.5, stiffness: 1000, velocity: -100 }}><a href='#'>Sobre Mi</a></motion.li>
                    <motion.li initial={{ opacity: 0, y: 50 }} animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 50 }} transition={{ duration: 0.6, stiffness: 1000, velocity: -100 }}><a href='#'>Contacto</a></motion.li>
                    <motion.li initial={{ opacity: 0, y: 50 }} animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 50 }} transition={{ duration: 0.6, stiffness: 1000, velocity: -100 }}><button className='bg-azulCustom py-[11px] px-[30px] font-medium flex items-center justify-center gap-3'>Whatsapp<BsWhatsapp /></button></motion.li>
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
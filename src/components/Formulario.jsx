"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion'

const Formulario = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [numero, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const sendEmail = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/emailApi', {
                method: "POST",
                body: JSON.stringify({name, email, numero, message}),
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });

            if(res.ok){
                setStatus('Enviado!')
            }else{
                setStatus('Error al enviar')
            }


        } catch (error) {
            console.error('Error fetching or parsing data:', error.message);
            setStatus(`Error: ${error.message}`);
        }
    };

    return (
        <form onSubmit={sendEmail} className='flex flex-col gap-3 lg:gap-4'>
            <label className='font-semibold' htmlFor="">Nombre Completo</label>
            <input onChange={(e) => setName(e.target.value)} value={name} placeholder='Coloca tu nombre aquí...' className='placeholder:text-[#3b3b3b] placeholder:opacity-75 placeholder:font-light p-3 h-10 bg-transparent border-[0.5px] border-white' type="text" required />
            <label className='font-semibold' htmlFor="">Correo</label>
            <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Coloca tu correo aquí...' className='placeholder:text-[#3b3b3b] placeholder:opacity-75 placeholder:font-light p-3 h-10 bg-transparent border-[0.5px] border-white' type="email" required />
            <label className='font-semibold' htmlFor="">Teléfono</label>
            <input onChange={(e) => setNumber(e.target.value)} value={numero} placeholder='Coloca tu número de teléfono aquí...' className='placeholder:text-[#3b3b3b] placeholder:opacity-75 placeholder:font-light p-3 h-10 bg-transparent border-[0.5px] border-white' type="tel" required />
            <label className='font-semibold' htmlFor="">Mensaje</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Coloca tu mensaje aquí...' className='placeholder:text-[#3b3b3b] placeholder:opacity-75 placeholder:font-light py-1 px-3 bg-transparent border-[0.5px] border-white h-32 min-h-32 max-h-32' type="text" required />
            <motion.button
                type='submit'
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className='bg-azulCustom p-2 px-3 flex items-center justify-center gap-3 font-semibold mt-5 w-max m-auto'>Enviar
            </motion.button>
            {status && <p className='w-full text-center mt-5'>{status}</p> }
        </form>
    );
}
export default Formulario;
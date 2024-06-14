"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import Swal from 'sweetalert2'

const Formulario = () => {

    const [status, setStatus] = useState(null);

    const validate = values => {
        const errors = {};

        if (!values.name) {
        } else if (!/^[^\d]*$/.test(values.name)) {
            errors.name = <p className='text-red-500 mt-2 text-xs lg:text-lg'>El nombre no puede contener números</p>;
        } else if (values.name.length < 3) {
            errors.name = <p className='text-red-500 mt-2 text-xs lg:text-lg'>El nombre debe tener mínimo 3 letras</p>;
        }
        if (!values.email) {
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = <p className='text-red-500 mt-2 text-xs lg:text-lg'>El correo tiene un formato incorrecto</p>;
        }
        if (!values.numero) {
        } else if (!/^\d+$/.test(values.numero)) {
            errors.numero = <p className='text-red-500 mt-2 text-xs lg:text-lg'>Solo se permiten números en este campo</p>;
        } else if (values.numero.length < 8) {
            errors.numero = <p className='text-red-500 mt-2 text-xs lg:text-lg'>El número debe tener mínimo 8 dígitos</p>;
        } else if (values.numero.length > 15) {
            errors.numero = <p className='text-red-500 mt-2 text-xs lg:text-lg'>El número no puede ser mayor a 15 dígitos</p>;
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            numero: "",
            message: "",
        },
        validate,
        onSubmit: async values => {

            try {
                const res = await fetch('/api/emailApi', {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                });

                Swal.fire({
                    background: "#fff",
                    showConfirmButton: false,
                    timer: 2000,
                    title: "Mensaje enviado correctamente",
                    icon: "success"
                });

            } catch (error) {
                Swal.fire({
                    showConfirmButton: false,
                    timer: 2000,
                    title: "Error al enviar el mensaje",
                    icon: "error"
                });
                console.error('Error fetching or parsing data:', error.message);
                setStatus(`Error: ${error.message}`);
            }

        }
    });

    return (
        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-3 lg:gap-1 '>
            <div className='gap-3 flex flex-col py-0 lg:py-4 h-[6rem] lg:h-28'>
                <label className='font-semibold' htmlFor="name">Nombre Completo</label>
                <input onChange={formik.handleChange} value={formik.values.name} id='name' name="name" placeholder='Coloca tu nombre aquí...' className='focus:border-azulCustom outline-none placeholder:text-[#3b3b3b] placeholder:opacity-75 placeholder:font-light p-3 h-10 bg-transparent border-[0.5px] border-white' type="text" required />
                {formik.errors.name}
            </div>
            <div className='gap-3 flex flex-col py-0 lg:py-4 h-[6rem] lg:h-28'>
                <label className='font-semibold' htmlFor="correo">Correo</label>
                <input onChange={formik.handleChange} value={formik.values.email} id='correo' name="email" placeholder='Coloca tu correo aquí...' className='focus:border-azulCustom outline-none placeholder:text-[#3b3b3b] placeholder:opacity-75 placeholder:font-light p-3 h-10 bg-transparent border-[0.5px] border-white' type="email" required />
                {formik.errors.email}
            </div>
            <div className='gap-3 flex flex-col py-0 lg:py-4 h-[6rem] lg:h-28'>
                <label className='font-semibold' htmlFor="tel">Teléfono</label>
                <input onChange={formik.handleChange} value={formik.values.numero} id='tel' name="numero" placeholder='Coloca tu número de teléfono aquí...' className='focus:border-azulCustom outline-none placeholder:text-[#3b3b3b] placeholder:opacity-75 placeholder:font-light p-3 h-10 bg-transparent border-[0.5px] border-white' type="tel" required />
                {formik.errors.numero}
            </div>
            <div className='gap-3 flex flex-col py-0 lg:py-4'>
                <label className='font-semibold' htmlFor="mensaje">Mensaje</label>
                <textarea onChange={formik.handleChange} value={formik.values.message} component='textarea' id='mensaje' name="message" placeholder='Coloca tu mensaje aquí...' className='focus:border-azulCustom outline-none placeholder:text-[#3b3b3b] placeholder:opacity-75 placeholder:font-light py-1 px-3 bg-transparent border-[0.5px] border-white h-32 min-h-32 max-h-32' type="text" required />
            </div>
            <motion.button
                type='submit'
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className='bg-azulCustom p-2 px-3 flex items-center justify-center gap-3 font-semibold mt-5 w-max m-auto'>Enviar
            </motion.button>
            <p className='w-full text-green-500 font-semibold text-center mt-4'>{status && status}</p>
        </form>
    );
}
export default Formulario;
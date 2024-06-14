
'use client'

import { ImgSlider } from 'src/components/ImgSlider';
import data from '../../../public/Data/imagesCarrusel.json'
import Image from 'next/image';
import seguroHero from '@/assets/images/SeguroHero.png'
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FaPerson, FaDiamond } from 'react-icons/fa6';
import Link from 'next/link';


const Seguro = () => {

    const isMobile = useMediaQuery({ maxWidth: 1024 })


    return (
        <section className='pt-20 flex justify-center items-center flex-col'>
            <article className='pt-10 lg:px-9  flex flex-col justify-center items-center lg:flex-row lg:gap-30 gap-16'>
                <div className='text-center lg:gap-7 lg:text-justify flex flex-col justify-center items-center gap-3 px-9 lg:px-0 max-w-max lg:max-w-[40%]'>
                    <h2 className='w-full lg:tracking-tighter text-xl lg:text-5xl font-Poppins font-semibold' >Misión:</h2>
                    <hr className='lg:w-full w-[75%] border-[.5] border-grisCustom' />
                    <h3 className='font-light text-xs lg:text-xl'>Ayudar a las personas en caso de una muerte prematura del pilar economico de la familia. Que su ser querido viva a traves de los ojos de su familia y que gracias a él no les falta nada.  Por que tomó la decision de protejerlos con un seguro de vida.</h3>
                </div>
                <div className='flex justify-center items-center lg:w-max lg:pr-[1.5rem] bg-green'>
                    <Image priority className='w-[19rem] lg:w-[25rem] xl:w-[35rem]' src={seguroHero} alt='Family' />
                </div>
            </article>
            <div className='flex justify-center items-center gap-3 my-[5rem] lg:my-[10rem] w-full'>
                <hr className='lg:w-full w-[75%] border-[.5] border-grisCustom' />
                <FaDiamond className='lg:text-5xl text-3xl text-[#272727]' />
                <hr className='lg:w-full w-[75%] border-[.5] border-grisCustom' />
            </div>
            <article className='w-full flex flex-col items-center gap-12 px-5 lg:px-[3rem]'>
                <div className='text-center flex flex-col justify-center items-center lg:gap-10 gap-3'>
                    <h2 className='text-xl lg:text-4xl font-Poppins font-semibold max-w-[90rem] px-5 lg:px-5'>¿Que es un seguro de vida?</h2>
                    <p className='font-light text-xs lg:text-xl max-w-[70rem] px-5 lg:px-5'>El seguro de Vida es el mejor instrumento para crear un patrimonio donde no lo hay,  ya que te permite tener proteccion, seguridad financiera, paz.  Te garantiza la educacion de tus hijos y una herencia en caso de fallecer prematuramente.</p>
                </div>
                <div className='w-full lg:mt-10'>
                    <Swiper
                        spaceBetween={50}
                        fadeEffect={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        centeredSlides={true}
                        slidesPerView={isMobile ? 1 : 3}
                        loop={true}
                        modules={[Navigation, Autoplay]}
                        className='mySwiper'
                        navigation={{
                            nextEl: '.custom-next-button',
                            prevEl: '.custom-prev-button',
                        }}
                    >
                        {data.map(data => (
                            <SwiperSlide key={data.link}>
                                <ImgSlider link={data.link} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='gap-80 hidden w-full lg:flex justify-center items-center p-7'>
                        <FaArrowLeft className='hover:text-azulCustom transition-all duration-300 custom-prev-button cursor-pointer text-4xl' />
                        <FaArrowRight className='hover:text-azulCustom transition-all duration-300 custom-next-button cursor-pointer text-4xl' />
                    </div>
                </div>
            </article>
            <div className='flex justify-center items-center gap-3 my-[5rem] lg:my-[10rem] w-full'>
                <hr className='lg:w-full w-[75%] border-[.5] border-grisCustom' />
                <FaDiamond className='lg:text-5xl text-3xl text-[#272727]' />
                <hr className='lg:w-full w-[75%] border-[.5] border-grisCustom' />
            </div>
            <article className=' w-full flex flex-col justify-center items-center gap-12 lg:gap-20 px-5 lg:px-[3rem]'>
                <div className='text-center flex flex-col justify-center items-center gap-3'>
                    <h2 className='text-2xl lg:text-4xl font-poppins font-semibold'>En que consisten nuestros seguros de vida?</h2>
                    <p className='text-xs lg:text-lg font-light'>Mis seguros de vida son a término o temporal, el cual te protege por un plazo de: </p>
                </div>
                <div className='w-full flex justify-center items-end gap-10 lg:gap-32 '>
                    <div className='flex flex-col justify-center items-center gap-3 lg:gap-4'>
                        <FaPerson className='text-4xl lg:text-8xl' />
                        <h5 className='text-xs lg:text-lg font-light'>10-15 años</h5>
                        <hr className='w-5 lg:w-14 border-azulCustom' />
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3 lg:gap-4'>
                        <FaPerson className='text-6xl lg:text-9xl' />
                        <h5 className='text-xs lg:text-lg font-light'>20 años</h5>
                        <hr className='w-5 lg:w-14 border-azulCustom' />
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3 lg:gap-4'>
                        <FaPerson className='text-7xl lg:text-[9rem]' />
                        <h5 className='text-xs lg:text-lg font-light'>30 años</h5>
                        <hr className='w-5 lg:w-14 border-azulCustom' />
                    </div>
                </div>
                <div className='w-full lg:w-[50%] lg:max-w-[60rem] text-center px-5 lg:px-[3rem]'>
                    <p className='text-xs font-light lg:text-lg'>Es flexible y con precios accesibles, cuyo costo se establece al contratar y se mantiene igual por todo el tiempo de cobertura. ¡Sin examen médico para pólizas menores de 1 millón de dólares!. </p>
                </div>
            </article>
            <div className='flex justify-center items-center gap-3 my-[5rem] lg:my-[10rem] w-full'>
                <hr className='lg:w-full w-[75%] border-[.5] border-grisCustom' />
                <FaDiamond className='lg:text-5xl text-3xl text-[#272727]' />
                <hr className='lg:w-full w-[75%] border-[.5] border-grisCustom' />
            </div>
            <article className=' w-full flex flex-col gap-12 lg:py-24'>
                <div className='text-center flex flex-col justify-center items-center gap-3 w-full lg:w-auto px-5 lg:px-[3rem]'>
                    <h2 className='text-2xl lg:text-4xl font-poppins font-bold'>¿Cuánto dinero debería destinar a mi seguro de vida?</h2>
                    <p className='text-xs font-light lg:text-lg'>Te ofrezco una gran cantidad de opciones, de acuerdo con tus posibilidades y a tus metas. Para saber más información, <strong><Link href='/contacto' className='font-bold text-azulCustom cursor-pointer'>da clic aquí.</Link></strong></p>
                </div>
            </article>
            <div className='flex justify-center items-center gap-3 my-[5rem] lg:my-[10rem] w-full '>
                <hr className='lg:w-full w-[75%] border-[.5] border-grisCustom' />
                <FaDiamond className='lg:text-5xl text-3xl text-[#272727]' />
                <hr className='lg:w-full w-[75%] border-[.5] border-grisCustom' />
            </div>
            <article id='cotizador' className='flex flex-col justify-center items-center h-full pb-20 lg:pb-48 gap-12 lg:gap-24 px-5 lg:px-[3rem]'>
                <h2 className='text-2xl lg:text-4xl font-poppins font-bold text-center'>Completa el formulario y pronto estare en contacto contigo!</h2>
                <iframe src='https://amedex.web.app/widget?config=c4049edabae0c54e2347c82e21413ec3' loading='lazy' className='max-w-[300px] lg:max-w-none min-h-[1100px] lg:min-h-0' height={isMobile ? 1100 : 900} width={isMobile ? 400 : 500} ></iframe>
            </article>
        </section>
    );
}

export default Seguro;
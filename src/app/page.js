import family from '/public/assets/images/Index-Family.png'
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex flex-row justify-between items-center  h-screen'>
      <div className=' h-full w-[70%] flex flex-col items-center justify-center font-flatine text-left pl-36'>
        <div>
          <h1 className='text-5xl'>Rudi Arce Internacional</h1>
          <h2 className='text-[5.5rem] min-w-max'>Protegiendo tu <strong>futuro</strong>, hoy</h2>
          <p className='font-poppins font-light text-xl'>Con un firme compromiso con la innovación y la excelencia, cuidamos el futuro de nuestros clientes en la región de America Latina. </p>
        </div>
      </div>
      <div className='h-full w-[40%] flex items-end justify-center'>
        <Image className='w-auto h-auto max-h-[80%] z-0' src={family} alt='Family' />
      </div>
    </main>
  );
}

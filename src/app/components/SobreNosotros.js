import Image from 'next/image'
import sobreNosotros from '../images/sobrenosotros/sobreNosotros.jpeg'

export default function SobreNosotros() {
    const text ="Desde nuestra fundación en 2015, somos un restaurante comprometido con la comida orgánica y saludable. Nuestro objetivo es ofrecer platillos deliciosos elaborados con los mejores ingredientes y adaptados a diferentes necesidades dietéticas. Creemos en una alimentación consciente y en el poder de los alimentos para mejorar nuestra salud. Te invitamos a acompañarnos en este camino hacia una vida más saludable y plena."
    return (
        <main id="sobrenosotros" className=''>
            {/* mobile */}
            <div className='md:hidden'>
                <div className='title'>
                    <h1>Sobre Nosotros</h1>
                </div>
                <div className='flex self-center items-center justify-center justify-items-center'>
                    <div className='sobreNosotrosContentMobile'>
                        <div className='p-2'>
                            <p>{text}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* desktop */}
            <div className='hidden md:flex flex-col'>
                <div className='title'>
                    <h1>Sobre Nosotros</h1>
                </div>
                <div className='flex self-center items-center justify-center justify-items-center'>
                    <div className='flex-col w-1/2 self-start ml-4 mr-8'>
                        <p>{text}</p>
                    </div>
                    <div className='flex row w-1/2 mr-8 items-center'>
                        <Image src={sobreNosotros} alt="Sobre Nosotros - Nectario"></Image>
                    </div>
                </div>
            </div>
        </main>
    )
}

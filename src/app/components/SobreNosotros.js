import Image from 'next/image'
import sobreNosotros from '../images/sobrenosotros/sobreNosotros.jpeg'

export default function SobreNosotros() {
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis leo sit amet faucibus condimentum. Nam ut quam a diam sollicitudin mollis. Pellentesque a interdum ex. Nulla facilisi. Cras bibendum nisi at auctor finibus. Curabitur lobortis at ex quis gravida. In tempus, odio et cursus tempus, dolor orci vulputate odio, in egestas orci arcu sed ligula. Quisque ut fringilla eros, ultricies mattis tortor. Etiam ornare interdum massa, at viverra mauris auctor eget. Aenean ultricies magna ac lobortis sagittis. Donec ac sapien malesuada, suscipit arcu aliquet, mattis ante. Nullam efficitur et turpis eget accumsan. Aenean vel dui placerat, molestie lorem et, pretium erat. Suspendisse pretium quam vitae arcu venenatis pretium.</p>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis leo sit amet faucibus condimentum. Nam ut quam a diam sollicitudin mollis. Pellentesque a interdum ex. Nulla facilisi. Cras bibendum nisi at auctor finibus. Curabitur lobortis at ex quis gravida. In tempus, odio et cursus tempus, dolor orci vulputate odio, in egestas orci arcu sed ligula. Quisque ut fringilla eros, ultricies mattis tortor. Etiam ornare interdum massa, at viverra mauris auctor eget. Aenean ultricies magna ac lobortis sagittis. Donec ac sapien malesuada, suscipit arcu aliquet, mattis ante. Nullam efficitur et turpis eget accumsan. Aenean vel dui placerat, molestie lorem et, pretium erat. Suspendisse pretium quam vitae arcu venenatis pretium.</p>
                    </div>
                    <div className='flex row w-1/2 mr-8 items-center'>
                        <Image src={sobreNosotros} alt="Sobre Nosotros - Nectario"></Image>
                    </div>
                </div>
            </div>
        </main>
    )
}

import Image from 'next/image'
import sobreNosotros from '../images/sobreNosotros.jpeg'

export default function Contacto() {
    return (
        <main id="contacto" className=''>
            <div className='md:hidden'>
                <div className='title'>
                    <h1>Contacto</h1>
                </div>
            </div>
            <div className='hidden md:flex flex-col'>
                <div className='title'>
                    <h1>Contacto</h1>
                </div>
                <div className='flex self-center items-center justify-center justify-items-center p-5 mx-5'>
                    <div className='flex-col w-1/2 self-center mx-8'>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis leo sit amet faucibus condimentum. Nam ut quam a diam sollicitudin mollis. Pellentesque a interdum ex. Nulla facilisi. Cras bibendum nisi at auctor finibus. Curabitur lobortis at ex quis gravida. In tempus, odio et cursus tempus, dolor orci vulputate odio, in egestas orci arcu sed ligula. Quisque ut fringilla eros, ultricies mattis tortor. Etiam ornare interdum massa, at viverra mauris auctor eget. Aenean ultricies magna ac lobortis sagittis. Donec ac sapien malesuada, suscipit arcu aliquet, mattis ante. Nullam efficitur et turpis eget accumsan. Aenean vel dui placerat, molestie lorem et, pretium erat. Suspendisse pretium quam vitae arcu venenatis pretium.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

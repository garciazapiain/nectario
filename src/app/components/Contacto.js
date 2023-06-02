import { BsFacebook } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsWhatsapp } from "react-icons/bs"

export default function Contacto() {
    return (
        <main id="contacto" className=''>
            <div>
                <div className='title'>
                    <h1>Contacto</h1>
                </div>
                <div className='contactForm self-center justify-around justify-items-start'>
                    <div className='p-2 contactFormItem'>
                        <h3 className='menuPlateTitle'>Dirrección</h3>
                        <p className='menuNormalText mb-4'>Paseo del Moral 400</p>
                        <a
                            className={'googleMapsButton'}
                            href="https://www.google.com/maps/place/Nectario+Organic+Market/@21.1476429,-101.6904032,15z/data=!4m2!3m1!1s0x0:0x8571bf8e207d165?sa=X&ved=2ahUKEwj_8Zqv4Yv_AhWPhf0HHbGeCOEQ_BJ6BAheEAg"
                            target="a_blank"
                        >
                            Google maps
                        </a>
                    </div>
                    <div className='p-2 contactFormItem'>
                        <h3 className='menuPlateTitle'>horario</h3>
                        <p>lunes - viernes 7:30 am - 10 pm</p>
                        <p>sábado 8:00 am - 10 pm</p>
                        <p>domingo - 8:00 am - 8:45 pm</p>
                    </div>
                    <div className='p-2 contactFormItem'>
                        <h3 className='menuPlateTitle'>contacto</h3>
                        <a href="tel:477-390-0021">
                            <p>tel: 477 390 0021</p>
                        </a>
                    </div>
                </div>
                <div className='flex mb-5 justify-center align-center'>
                    <a href=" https://api.whatsapp.com/send?phone=524778508037" target="_blank"><BsWhatsapp className='mx-3 h-8 w-8'/></a>
                    <a href="https://www.facebook.com/profile.php?id=100054607682526" target="_blank"><BsFacebook className='mx-3 h-8 w-8'/></a>
                    <a href="https://www.instagram.com/nectariomarket/?hl=en" target="_blank"><BsInstagram className='mx-3 h-8 w-8'/></a>
                </div>
            </div>
        </main>
    )
}

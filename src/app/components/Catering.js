"use client"; // This is a client component 👈🏽
import React, {useState, useEffect} from "react";
import { Carousel } from 'react-responsive-carousel';
import { items } from "../data/carousel.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Catering() {
    const { responsive } = items;
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextSlide = (currentSlide + 1) % responsive.length;
            setCurrentSlide(nextSlide);
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [currentSlide, responsive.length])

    return (
        <main id="catering" className='catering-main'> {/* Add the class name 'catering-main' */}
            <div>
                <div className='title'>
                    <h1>Catering</h1>
                </div>
                <div className="m-5">
                    <p>En Nectario te ofrecemos servicio de catering para tu evento. Nos encargaremos de brindarte una experiencia culinaria única y deliciosa para satisfacer los gustos y necesidades de tus invitados. Desde exquisitos aperitivos hasta platos principales y postres deliciosos, nuestro menú ofrece una amplia variedad de opciones para adaptarse a diferentes preferencias y requisitos dietéticos. Si deseas más información sobre nuestros servicios de catering o quieres discutir los detalles de tu evento, puedes contactarnos fácilmente a través de WhatsApp o por teléfono. Queremos ayudarte a crear una experiencia memorable y deliciosa para tu próximo evento.</p>
                </div>
                <div className="">
                    <Carousel
                        showArrows={true}
                        showIndicators={true}
                        infiniteLoop={true}
                        dynamicHeight={false}
                        selectedItem={currentSlide}
                    >
                        {responsive.map((item) => (
                            <div key={item.id}> {/* Add the class name 'carousel-item' */}
                                <div className="image-container-catering">
                                    <img src={item.imageUrl} alt="slides" />
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </main>
    )
}

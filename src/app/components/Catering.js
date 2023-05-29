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
        }, 5000);

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
                <div>
                    <Carousel
                        showArrows={true}
                        showIndicators={true}
                        infiniteLoop={true}
                        dynamicHeight={false}
                        selectedItem={currentSlide}
                    >
                        {responsive.map((item) => (
                            <div key={item.id} className="carousel-item"> {/* Add the class name 'carousel-item' */}
                                <div>
                                    <img src={item.imageUrl} alt="slides" />
                                </div>
                                <div>
                                    <h2>{item.title}</h2>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </main>
    )
}

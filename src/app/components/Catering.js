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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis leo sit amet faucibus condimentum.</p>
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

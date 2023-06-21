"use client"; // This is a client component 👈🏽
import React, { useState, useEffect } from "react";
import { Carousel } from 'react-responsive-carousel';
import { items } from "../data/carousel.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import burger from '../images/banner/burger.jpeg';
import ensalada from '../images/banner/ensalada.jpeg'
import smoothies from '../images/banner/smoothies.jpeg'
import spring from '../images/banner/spring.jpeg'
import tabbouleh from '../images/banner/tabbouleh.jpeg'
import tunapoke from '../images/banner/tunapoke.jpeg'
import dogFriendly from '../images/banner/dogfriendly.jpeg'
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";


export default function Banner() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const scrollToMenu = () => {
        const menuSection = document.getElementById("menu");
        menuSection.scrollIntoView({ behavior: "smooth" });
    };

    const images = [
        {
            id: 1,
            src: spring,
            alt: "spring rolls",
        },
        {
            id: 2,
            src: tunapoke,
            alt: "tuna poke",
        },
        {
            id: 3,
            src: smoothies,
            alt: "smoothies",
        },
        {
            id: 4,
            src: burger,
            alt: "burger",
        },
        {
            id: 5,
            src: tabbouleh,
            alt: "tabbouleh",
        },
        {
            id: 6,
            src: ensalada,
            alt: "enslada",
        },
        {
            id: 7,
            src: dogFriendly,
            alt: "dog friendly",
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            const nextSlide = (currentSlide + 1) % images.length;
            setCurrentSlide(nextSlide);
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [currentSlide, images.length])

    return (
        <main id="banner" className="banner">
            <div className="slider-container-banner">
                <div>
                    <Carousel
                        showArrows={true}
                        showIndicators={true}
                        infiniteLoop={true}
                        dynamicHeight={false}
                        selectedItem={currentSlide}
                    >
                        {images.map((item) => (
                            <div key={item.id} className="carousel-item-banner"> {/* Add the class name 'carousel-item' */}
                                <div className="image-container">
                                    <Image src={item.src}></Image>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
                <IoIosArrowDown onClick={scrollToMenu} className="arrow-down-banner" />
            </div>
        </main>
    )
}

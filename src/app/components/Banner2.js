"use client"; // This is a client component 👈🏽
import React, { useState, useEffect } from "react";
import { Carousel } from 'react-responsive-carousel';
import { items } from "../data/carousel.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import burger from '../images/banner2/burger.jpeg';
import ensalada from '../images/banner2/ensalada.jpeg'
import smoothies from '../images/banner2/smoothies.jpeg'
import spring from '../images/banner2/spring.jpeg'
import tabbouleh from '../images/banner2/tabbouleh.jpeg'
import tunapoke from '../images/banner2/tunapoke.jpeg'
import dogFriendly from '../images/banner2/dogfriendly.jpeg'
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";


export default function Banner2() {
    const { responsive } = items;
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
            const nextSlide = (currentSlide + 1) % responsive.length;
            setCurrentSlide(nextSlide);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [currentSlide, responsive.length])

    return (
        <main id="banner2" className="banner2">
            <div className="slider-container-banner2">
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
                <Link href="#menu">
                    <IoIosArrowDown onClick={scrollToMenu} className="arrow-down-banner"/>
                </Link>
            </div>
        </main>
    )
}

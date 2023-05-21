"use client"; // This is a client component 👈🏽
import { useState, useEffect } from "react";
import Link from "next/link";
import logo from "../images/logo2.png"
import Image from 'next/image'

function NavBar(props) {
    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isVisible = prevScrollPos > currentScrollPos;

            setIsVisible(isVisible);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    function NavItem({ href, children }) {
        return (
            <li className="mr-4">
                <Link href={href}>
                    {children}
                </Link>
            </li>
        );
    }

    return (
        <nav
            {...props}
            className={`navBarContainer fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out transform ${isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <ul className="navBar pr-1 flex items-center justify-around font-medium backdrop-blur">
                <div className="flex">
                    <Link className="w-1/4" href="#inicio" >
                        <Image className="logoNavBar" src={logo}></Image>
                    </Link>
                </div>
                <div className="flex w-3/4 justify-end mr-1">
                    <NavItem href="#sobrenosotros">Sobre Nosotros</NavItem>
                    <NavItem href="#menu">Menu</NavItem>
                    <NavItem href="#visitanos">Visítanos</NavItem>
                    <NavItem href="#contacto">Contacto</NavItem>
                </div>
            </ul>
        </nav>
    );
}

export default NavBar;



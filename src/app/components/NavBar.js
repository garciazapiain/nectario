"use client"; // This is a client component 👈🏽
import { useState } from "react";
import Link from "next/link";
import logo from "../images/logo/logo2.png";
import Image from 'next/image';
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

function NavBar(props) {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      className={`navBarContainer fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out transform z-50 ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <ul className="navBar pr-1 hidden sm:flex items-center justify-around font-medium backdrop-blur">
        <div className="flex">
          <Link className="w-1/4" href="#inicio" >
            <Image className="logoNavBar" src={logo} />
          </Link>
        </div>
        <div className="flex w-3/4 justify-end mr-1">
          <NavItem href="#menu">Menu</NavItem>
          <NavItem href="#catering">Catering</NavItem>
          <NavItem href="#sobrenosotros">Nosotros</NavItem>
          <NavItem href="#contacto">Contacto</NavItem>
        </div>
      </ul>
      <div className="sm:hidden flex navBar justify-around">
        <div className="flex items-center">
          <Link className="w-1/4" href="#inicio" >
            <Image className="logoNavBar" src={logo} />
          </Link>
        </div>
        <button
          className="hamburgerMenu flex items-center focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <AiOutlineClose className="h-8 w-8 mr-4" /> : <FiMenu className="h-8 w-8 mr-4" />}
        </button>
      </div>
      {
        isMenuOpen && (
          <ul onClick={toggleMenu} className="navBarMobileMenu sm:hidden pl-8 text-xl">
            <NavItem href="#menu">Menu</NavItem>
            <NavItem href="#catering">Catering</NavItem>
            <NavItem href="#sobrenosotros">Nosotros</NavItem>
            <NavItem href="#contacto">Contacto</NavItem>
          </ul>
        )
      }
    </nav>
  );
}

export default NavBar;

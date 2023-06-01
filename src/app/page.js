"use client"; // This is a client component 👈🏽
import Image from 'next/image'
import BannerInicio from './components/BannerInicio';
import SobreNosotros from './components/SobreNosotros';
import Menu from './components/Menu';
import NavBar from './components/NavBar';
import Catering from './components/Catering';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (router){
      setTimeout(()=>{
        setIsLoading(false);
      },500)
    }
  }, [router]);

  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <NavBar />
          <BannerInicio />
          <Menu />
          <Catering />
          <SobreNosotros />
          <Contacto />
          <Footer />
        </>
      )}
    </main>
  );
}

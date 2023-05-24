import Image from 'next/image'
import BannerInicio from './components/BannerInicio';
import SobreNosotros from './components/SobreNosotros';
import Menu from './components/Menu';
import NavBar from './components/NavBar';
import Catering from './components/Catering';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <NavBar/>
      <BannerInicio/>
      <Menu/>
      <Catering/>
      <SobreNosotros/>
      <Contacto/>
      <Footer/>
    </main>
  )
}

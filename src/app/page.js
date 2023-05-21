import Image from 'next/image'
import BannerInicio from './components/BannerInicio';
import SobreNosotros from './components/SobreNosotros';
import Menu from './components/Menu';
import NavBar from './components/NavBar';
import Visitanos from './components/Visitanos';
import Contacto from './components/Contacto';

export default function Home() {
  return (
    <main>
      <NavBar/>
      <BannerInicio/>
      <SobreNosotros/>
      <Menu/>
      <Visitanos/>
      <Contacto/>
    </main>
  )
}

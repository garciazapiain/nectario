import Image from 'next/image'
import logo from '../images/logo/logo1.png'

export default function BannerInicio() {
  return (
    <main id="inicio">
      <div className='flex h-screen md:hidden'>
        <div className='bannerContainerMobileSection1'>
          <div className='bannerContainerMobileSection2'>
            <Image src={logo} alt="Logo Nectario Organic Market" />
          </div>
        </div>
      </div>
      <div className='hidden md:flex h-screen'>
        <div className='bannerContainerSection1'></div>
        <div className='bannerContainerSection2'>
          <Image className="mb-10" src={logo} alt="Logo Nectario Organic Market" />
        </div>
      </div>
    </main>
  )
}

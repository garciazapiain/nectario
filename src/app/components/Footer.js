import logo from "../images/logo/logo2.png"
import Image from 'next/image'

export default function Footer() {
    return (
        <main id="footer" className='footer'>
            <div className="footerContainer">
                <Image className="logoFooter" src={logo}></Image>
                <p>© Nectario {new Date().getFullYear()}</p>
            </div>
        </main>
    )
}

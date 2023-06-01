import logo from "../images/logo/logo3.png";
import Image from 'next/image';

export default function Loading() {
  return (
    <main className='loading'>
      <div className="loading-spinner">
        <div className="spinner"></div>
        <Image className="spinnerLogo" src={logo} />
      </div>
    </main>
  );
}

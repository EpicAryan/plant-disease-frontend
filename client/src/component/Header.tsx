
import { useState, useEffect } from 'react';
import { Link , useLocation} from 'react-router-dom';
import { cblogo } from '../assets/index';


export default function Header() {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsScrolledDown(currentScrollPos > prevScrollPos );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`w-full fixed top-0 z-40 transition ease-in-out duration-700 ${
        prevScrollPos === 0 ? 'bg-opacity-0' : isScrolledDown  ? '  hidden' : 'bg-[#E8D8B7] block'
      }`}
    >
      <div className=''>
        <ul className='flex items-center justify-between py-4'>
          <Link to='/'>
            <li className='flex items-center ps-20 pe-0'>
              <img src={cblogo} alt='logo' />
              <p className='text-logoColor font-logo-bold text-2xl'>POTATO</p>
            </li>
          </Link>
          <Link to='/' className={location.pathname === '/' ? 'active-link': ''}>
            <li className='text-2xl font-semibold'>Home</li>
          </Link>
          <Link to='/diseases' className={location.pathname === '/diseases' ? 'active-link': ''}>
            <li className='text-2xl font-semibold'>Diseases</li>
          </Link>
          <Link to='/contact' className={location.pathname === '/contact' ? 'active-link': ''}>
            <li className='text-2xl font-semibold'>Contact</li>
          </Link>
          <Link to='/diseases' className={location.pathname === '/diseases' ? 'active-link': ''}>
            <li className='ps-0 pe-20'>
              <button className='text-white bg-btnColor border-btnColor text-2xl hover:bg-btnColor2 hover:font-semibold rounded-full w-60 h-16'>
                Diagnose here
              </button>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}


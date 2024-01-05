import { Link } from 'react-router-dom';
import {cblogo} from '../assets/index';

export default function Header() {
  return (
    <header >
        <div >
            <ul className='flex items-center justify-between py-4'>
                <Link to="/">
                    <li className='flex items-center ps-20 pe-0'>
                        <img src={cblogo} alt="logo" />
                        <p className='text-logoColor font-logo-bold'>POTATO</p>
                    </li>
                </Link>
                <Link to="/">
                    <li className='font-semibold'>Home</li>
                </Link>
                <Link to="/diseases">
                    <li className='font-semibold'>Diseases</li>
                </Link>
                <Link to="/contact">
                    <li className='font-semibold'>Contact</li>
                </Link>
                <Link to="/diagnose">
                    <li className='ps-0 pe-20'>
                        <button className='text-white bg-btnColor border-btnColor hover:bg-btnColor2 hover:font-semibold hover:text-sm rounded-full w-36 h-10'>Diagnose here</button>
                        

                    </li>
                    
                </Link>
            </ul>
        </div>
    </header>
  )
}



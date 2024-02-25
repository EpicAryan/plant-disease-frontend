import { footer } from "../assets/index";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";
import { cblogo2 } from "../assets/index";

const Footer = () => {
  return (
    <div className="w-full h-screen flex flex-col relative">
      <div className="mx-auto pt-16 flex flex-col items-center gap-8 z-20 ">
        <p className="text-txtColor font-semibold text-xl">
          Don't let diseases hinder your harvest. Take charge now for healthier
          crops and bountiful yields.
        </p>
        <Link to="/diseases">
          <button className="text-white bg-txtColor cursor-pointer text-2xl hover:bg-btnColor hover:font-semibold rounded-full w-60 h-16 ">
            Diagnose here
          </button>
        </Link>
      </div>

      <div
        className="absolute bottom-0 right-0 left-0 h-screen z-10"
        style={{
          backgroundImage: `url(${footer})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute bottom-52 left-20 ">
          <p className="text-white text-4xl font-bold">Akshay Kumar Mourya</p>
          <div className="flex gap-16 mt-16 text-icon-bg">
            <Link to="https://github.com/Amourya03">
              <FaGithub size={90} />
            </Link>
            <Link to="https://github.com/">
              <FaInstagram size={90} />
            </Link>
            <Link to="https://github.com/">
              <FaTwitter size={90} />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-16 w-full">
          <div className="flex items-end">
            <div className="border-t-4 border-txtColor flex-grow mx-16"></div>
            <div className="flex items-center">
              <img src={cblogo2} alt="cblogo2" className="w-24 h-24" />
              <p className="text-6xl text-logoColor font-bold">POTATO</p>
            </div>
            <div className="border-t-4 border-txtColor flex-grow mx-16"></div>
          </div>
        </div>
        
        <div className='absolute bottom-52 right-32 flex flex-col gap-16'>
            <div className="text-white text-4xl font-bold mx-auto">Contributors</div>
            <div className="flex gap-24">
                <div>
                    <p className='text-white text-3xl font-bold'>Satyajit Sahoo</p>
                    <div className='flex gap-16 mt-8 text-icon-bg'>
                        <Link to="https://github.com/KaiAlan" >
                            <FaGithub size={70}/>
                        </Link>
                        <Link to="https://github.com/" >
                            <FaTwitter size={70}/>
                        </Link>
                    </div>
                </div>
                <div>
                    <p className='text-white text-3xl font-bold'>Aryan Kumar</p>
                    <div className='flex gap-16 mt-8 text-icon-bg'>
                        <Link to="https://github.com/EpicAryan" >
                            <FaGithub size={70}/>
                        </Link>
                        <Link to="https://twitter.com/home" >
                            <FaTwitter size={70}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;

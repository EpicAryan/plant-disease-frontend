import { 
  FaLocationDot, 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaTwitter,
} from "react-icons/fa6";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { internet } from "../assets/index";
import { Link } from "react-router-dom";
import { bgland } from "../assets/index";

const Contact = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center relative">
      <div
          className="absolute top-0 bottom-0 right-0 left-0 bg-no-repeat "
          style={{
            backgroundImage: `url(${bgland})`,
            transform: "rotate(180deg)",
            backgroundSize: "70%",
           
          }}
        />
      <div className="w-2/3 h-3/4 relative" >
        <div className="w-1/3 h-4/5 border-2 border-white rounded-md z-30 absolute top-12 bottom-0 right-0 left-28 pt-8 pl-8 backdrop-blur-md drop-shadow-2xl"
        style={{backgroundColor: "rgba(232, 216, 183, 0.2)"}}

        >
          <div className="text-txtColor">
            <h1 className='font-bold text-5xl pb-2'>Contact Us</h1>
            <p className="font-normal">Visit the links below for more information</p>
          </div>
          

          <div className="text-txtColor mt-16 mb-24 flex flex-col gap-4 font-semibold">
            <div className="flex gap-6 items-center">
              <FaLocationDot size={35} />
              <span>Kolkata, India</span>
            </div>
            <div>
              <a href="https://akshaymourya.design" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                <img src={internet} alt="internet" />
                akshaymourya.design
              </a>
            </div>
            <div>
              <a href="https://github.com/Amourya03" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-5"
              >
                <FaGithub size={32} className="ml-1"/>
                @github/akmouryaart
              </a>
            </div>
            <div>
              <a href="https://github.com/Amourya03" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                <IoMdMail  size={40} />
                abcde12345@gmail.com
              </a>
            </div>
          </div>

          <div className="text-txtColor flex justify-between mr-20">
            <Link to="https://github.com/" >
              <FaLinkedin size={50}/>
            </Link>
            <Link to="https://github.com/" >
              <FaInstagram size={50}/>
            </Link>
            <Link to="https://github.com/" >
              <FaTwitter size={50}/>
            </Link>
          </div>
        </div>
        <div className="w-2/3 h-full bg-txtHead z-10 absolute top-0 bottom-0 right-16 rounded-xl flex items-center justify-center">
          <form action="" className="w-3/5 h-3/4 ml-12 ">
            <div className="flex flex-col pl-8">
              <p className="text-white text-5xl font-bold">Get In Touch</p>
              <p className="text-white text-base font-thin tracking-widest">Send an Email</p>
              <input type="email" name="email" id="email" placeholder='Email' 
                className="w-full h-12 rounded-md text-white border-2 bg-txtHead  border-white placeholder-white focus:outline-none p-2 mt-16" 
              />
              <textarea name="message" id="message" placeholder="Your Message" 
                className="w-full h-52 rounded-md text-white border-2 border-white bg-txtHead placeholder-white focus:outline-none p-2 mt-6" 
              />
              <button 
                className="w-48 h-12 bg-white text-txtColor font-bold rounded-full flex items-center justify-center gap-4 text-3xl mx-auto mt-10"
              >
                Send
                <FaArrowAltCircleRight />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
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
import { useRef, useState  } from "react";

const Contact = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const message = messageRef.current?.value;
    if (email && message) {
      const combinedMessage = `Email: ${email}\nMessage: ${message}`;
      console.log(combinedMessage);
    } else {
      console.log("Please fill in both email and message fields.");
    }
  };

  const handleInputChange = () => {
    const email = emailRef.current?.value;
    const message = messageRef.current?.value;
    setIsFormValid(!!email && !!message);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center relative">
      <div
        className="absolute top-0 bottom-0 right-0 left-0 bg-no-repeat "
        style={{
          backgroundImage: `url(${bgland})`,
          transform: "rotate(180deg)",
          backgroundSize: "78%",
          backgroundPosition: "left 70%",
        }}
      />
      <div className="w-full lg:w-3/4 xl:w-2/3 lg:h-2/3 xl:h-3/4  relative">
        <div
          className="w-full lg:w-1/4 xl:w-1/3 h-4/5 border-2 border-white lg:rounded-lg xl:rounded-md z-30 absolute top-12 bottom-0 right-0 lg:left-36 xl:left-28 lg:pt-4 xl:pt-8 lg:pl-6 xl:pl-8 backdrop-blur-md "
          style={{
            backgroundColor: "rgba(232, 216, 183, 0.2)",
            boxShadow: "-15px 25px 30px -15px rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="text-txtColor">
            <h1 className="font-bold lg:text-3xl xl:text-5xl xl:pb-2">Contact Us</h1>
            <p className="font-normal lg:text-[10px] xl:text-base">
              Visit the links below for more information
            </p>
          </div>

          <div className="text-txtColor lg:mt-10 xl:mt-16 lg:mb-10 xl:mb-24 flex flex-col lg:gap-3 xl:gap-4 font-semibold">
            <div className="flex lg:gap-2 xl:gap-5 items-center xl:ml-1">
              <FaLocationDot className="lg:text-xl xl:text-4xl" />
              <span className="lg:text-xs xl:text-base">Kolkata, India</span>
            </div>
            <div>
              <a
                href="https://akshaymourya.design"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center lg:gap-2 xl:gap-4"
              >
                <img src={internet} alt="internet" className="lg:h-5 lg:w-5 xl:h-11 xl:w-11"/>
                <p className="lg:text-xs xl:text-base">akshaymourya.design</p>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/Amourya03"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center lg:gap-2 xl:gap-4"
              >
                <FaGithub className="lg:h-5 lg:w-5 xl:h-11 xl:w-11 " />
                <p className="lg:text-xs xl:text-base">@github/akmouryaart</p>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/Amourya03"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center lg:gap-2 xl:gap-4"
              >
                <IoMdMail className="lg:h-5 lg:w-5 xl:h-11 xl:w-11 "/>
                <p className="lg:text-xs xl:text-base">abcde12345@gmail.com</p>
              </a>
            </div>
          </div>

          <div className="text-txtColor flex justify-between lg:mr-16 xl:mr-20">
            <Link to="https://github.com/">
              <FaLinkedin className="lg:text-4xl xl:text-5xl" />
            </Link>
            <Link to="https://github.com/">
              <FaInstagram className="lg:text-4xl xl:text-5xl"  />
            </Link>
            <Link to="https://github.com/">
              <FaTwitter className="lg:text-4xl xl:text-5xl"  />
            </Link>
          </div>
        </div>
        <div
          className="lg:w-3/5 xl:w-2/3 h-full bg-txtHead z-10 absolute top-0 bottom-0 lg:right-24 xl:right-16 rounded-xl flex items-center justify-center"
          style={{ boxShadow: "20px 25px 30px -10px rgba(0, 0, 0, 0.6)" }}
        >
          <form action=""  onSubmit={handleSubmit} className="lg:w-2/3 lg:h-3/4 xl:w-3/5 xl:h-3/4 xl:ml-12 ">
            <div className="flex flex-col pl-8">
              <p className="text-white lg:text-3xl xl:text-5xl font-bold">Get In Touch</p>
              <p className="text-white lg:text-sm xl:text-base font-thin tracking-widest">
                Send an Email
              </p>
              <input
                ref={emailRef}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full lg:h-8 xl:h-12 rounded-md text-white border-2 bg-txtHead  border-white placeholder-white focus:outline-none p-2 lg:mt-10 xl:mt-16"
                onChange={handleInputChange}
              />
              <textarea
                ref={messageRef}
                name="message"
                id="message"
                placeholder="Your Message"
                className="w-full lg:h-36 xl:h-52 rounded-md text-white border-2 border-white bg-txtHead placeholder-white focus:outline-none p-2 lg:mt-4 xl:mt-6"
                onChange={handleInputChange}
              />
              <button 
                type="submit" 
                disabled={!isFormValid}
                className={`lg:w-36 lg:h-8 xl:w-48 xl:h-12 font-bold rounded-full flex items-center justify-center lg:gap-2 xl:gap-4 lg:text-xl xl:text-3xl mx-auto lg:mt-6 xl:mt-10 ${
                  isFormValid ?  "bg-txtColor text-white":"bg-white text-txtColor" 
                }`}
              >
                Send
                <FaArrowAltCircleRight />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

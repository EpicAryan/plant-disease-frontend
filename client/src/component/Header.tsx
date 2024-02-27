import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cblogo } from "../assets/index";

export default function Header() {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsScrolledDown(currentScrollPos > prevScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`w-full fixed top-0 z-40 transition ease-in-out duration-700 ${
        prevScrollPos === 0
          ? "bg-opacity-0"
          : isScrolledDown
          ? "  hidden"
          : "bg-[#E8D8B7] block"
      }`}
    >
      <div className="">
        <ul className="w-full lg:h-16 xl:h-24 flex items-center justify-between py-4">
          <Link to="/">
            <li className="flex items-center ps-20 pe-0">
              <img src={cblogo} alt="logo" className="lg:w-8 lg:h-8 xl:w-10 xl:h-10"/>
              <p className="text-logoColor font-logo-bold lg:text-xl xl:text-2xl">POTATO</p>
            </li>
          </Link>
          <Link
            to="/"
            className={location.pathname === "/" ? "active-link" : ""}
          >
            <li className="lg:text-xl xl:text-2xl font-semibold">Home</li>
          </Link>
          <Link
            to="/diseases"
            className={location.pathname === "/diseases" ? "active-link" : ""}
          >
            <li className="lg:text-xl xl:text-2xl font-semibold">Diseases</li>
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active-link" : ""}
          >
            <li className="lg:text-xl xl:text-2xl font-semibold">Contact</li>
          </Link>
          <Link
            to="/diseases"
          >
            <li className="ps-0 pe-20">
              {location.pathname !== "/diseases" && ( 
                <button className="text-white bg-btnColor border-btnColor lg:text-xl xl:text-2xl hover:bg-btnColor2 hover:font-semibold rounded-full lg:w-48 lg:h-12 xl:w-60 xl:h-16">
                  Diagnose here
                </button>
              )}
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

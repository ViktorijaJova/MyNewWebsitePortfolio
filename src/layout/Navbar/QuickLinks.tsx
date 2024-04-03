import Link from "next/link";
import Image from "next/image";
import Searchbar from "./Searchbar";
import Button from "@/components/Button";
import React, { useContext, useEffect, useRef, useState } from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import blueArrow from "../../components/assets/arrow-logout.svg";
import Nav from "./Nav";
import MyThemeContext from "../store/store";

interface P {
  setShowModal: (showModal: boolean) => void;
}

const QuickLinks = ({ setShowModal }: P) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
  }

  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = () => {
    // Get the current scroll position
    const scrollY = window.scrollY || window.pageYOffset;

    // Check if the user is at the top of the screen
    setIsAtTop(scrollY === 0);
  };

  const handleOutsideClick = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    // Add the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleOutsideClick); // Add the event listener for outside clicks

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleOutsideClick); // Clean up the event listener
    };
  }, []);

  return (
    <div className='w-full py-10 xlSpecial:hidden smallest:px-[26px]   box-border items- flex justify-end  bg-guyabano dark:bg-[#1F1F1F] dark:text-white fixed z-40 pt-32 shadow-lg dark:border-2 dark:border-solid dark:border-[#CCCDE04D] '>
      <span className='grid justify-items-end	 gap-10 text-[22px] '>
        <Link
          className='hover:font-bold'
          onClick={() => setShowModal(false)}
          href={"/about"}
        >
          About us
        </Link>
        <Link
          className='hover:font-bold'
          onClick={() => setShowModal(false)}
          href={"/clients"}
        >
          Clients
        </Link>
        <span className='grid'>
          <p
            className='flex gap-3 hover:lg:font-bold cursor-pointer select-none	'
            onClick={toggleDropdown}
          >
            Services
            <Image
              className='dark:hidden block'
              alt='dropdwon'
              src={"/dropdown-nav.svg"}
              width={7}
              height={12}
            />
            <Image
              className='dark:block hidden'
              alt='dropdwon'
              src={"/servicesDark.svg"}
              width={7}
              height={12}
            />
          </p>
          {isDropdownOpen && (
            <ul className='justify-items-end  py-[25px] px-[15px] w-[285px] absolute right-3 grid gap-[27px] mt-[20px] rounded-md text-[22px] bg-guyabano dark:bg-[#1F1F1F]'>
              <li onClick={toggleDropdown}>
                <Link
                  onClick={() => setShowModal(false)}
                  className='servicetext'
                  href={"/it-professional-services"}
                >
                  IT Professional Services
                </Link>
              </li>
              <li onClick={toggleDropdown}>
                <Link
                  className='servicetext '
                  onClick={() => setShowModal(false)}
                  href={"/digital-media-services"}
                >
                  Digital Media Services
                </Link>
              </li>
              <li onClick={toggleDropdown}>
                <Link
                  className='servicetext'
                  onClick={() => setShowModal(false)}
                  href={"/erp-solutions-odoo"}
                >
                  ERP Solutions Odoo
                </Link>
              </li>
            </ul>
          )}
        </span>
        {isDropdownOpen ? (
          <>
            <Link
              className='hover:font-bold '
              onClick={() => setShowModal(false)}
              href={"/resources"}
              style={{ marginTop: "160px" }}
            >
              Available resources
            </Link>
            <Link href={"/contact"} style={{ marginTop: "20px" }}>
              <button
                onClick={() => setShowModal(false)}
                className={`text-black hover:bg-gradient-to-l hover:from-yellow hover:to-yellow2 bg-yellow duration-700 whitespace-nowrap cursor-pointer flex items-center gap-3 font-normal text-[20px]  px-[48px] py-[15px] rounded-full`}
              >
                Contact us
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link
              className='hover:font-bold '
              onClick={() => setShowModal(false)}
              href={"/resources"}
            >
              Available resources
            </Link>
            <Link href={"/contact"}>
              <button
                onClick={() => setShowModal(false)}
                className={`text-black hover:bg-gradient-to-l hover:from-yellow hover:to-yellow2 bg-yellow duration-700 whitespace-nowrap cursor-pointer flex items-center gap-3 font-normal text-[20px]  px-[48px] py-[15px] rounded-full`}
              >
                Contact us
              </button>
            </Link>
          </>
        )}
        <Nav />
      </span>
    </div>
  );
};

export default QuickLinks;

import Link from "next/link";
import Image from "next/image";
import Searchbar from "./Searchbar";
import React, { useState, useContext, useEffect, useRef } from "react";
import QuickLinks from "./QuickLinks";
import Nav from "./Nav";
import MyThemeContext from "../store/store";
import lightNav from  "./assets/white.svg";
import lightLogo from "./assets/white.svg";
import darkLogo from "./assets/black.svg";
import { useRouter } from "next/router";

const Navbar = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  let lastScrollY = 0;

  const toggleModal = () => {
    setShowModal(!showModal);
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

    if (scrollY > lastScrollY) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }

    lastScrollY = scrollY;
  };

  const handleOutsideClick = (event: any) => {
    if (dropdownRef.current && !dropdownRef?.current?.contains(event?.target)) {
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

  const handleNavbarClick = () => {
    // When a link in the NavBar is clicked, scroll to the top of the page
    //window.scrollTo(0, 0);
  };

  useEffect(() => {
    const pathSegments = router.asPath.split("/");

    if (pathSegments[1] !== "resources") {
      localStorage.setItem("SENIORITY_LEVEL_FILTER", JSON.stringify([]));
      localStorage.setItem("ROLE_FILTER", JSON.stringify([]));
    }
  }, [router.asPath]);

  return (
    <nav id='header' className={`flex justify-center } `}>
      <div
        ref={dropdownRef}
        className={`${"fixed max-w-[1920px]  dark:transition-all transition-all dark:duration-300 duration-300 shadow-lg dark:shadow-lg registerPopup:rounded-3xl registerPopup:w-[95%] smallest:w-full registerPopup:mt-[1%] mx-auto border-2 border-solid dark:border-2 dark:border-solid dark:border-[#CCCDE04D] border-[#CCCDE04D] border-opacity-30 dark:border-opacity-30 registerPopup:py-4 smallest:py-6"} ${
          scrollDirection === "up"
            ? "border-[#CCCDE04D]" // Change this to the desired color for scroll up
            : ""
        }
      
        
        z-50 2xl:pl-[72px] xlSpecial:pr-[46px] lg:pl-[40px] smallest:px-[26px] dark:box-border box-border items-center flex place-content-between bg-guyabano dark:bg-[#1F1F1F]`}
      >
        <Link
          onClick={() => {
            handleNavbarClick();
            setShowModal(false);
          }}
          href={"/home"}
        >
          <Image
            className={`block dark:hidden ${"xlSpecial:w-[236px] xlSpecial:h-[30px] transition-all duration-300"} md:w-[189px] md:h-[24px] smallest:w-[142px] smallest:h-[18px]`}
            alt='logo'
            src={darkLogo}
            width={142}
            height={18}
          />
          <Image
            className={`dark:block hidden ${"xlSpecial:w-[236px] xlSpecial:h-[30px] transition-all duration-300"} md:w-[189px] md:h-[24px] smallest:w-[142px] smallest:h-[18px]`}
            alt='logo'
            src={lightLogo}
            width={142}
            height={18}
          />
        </Link>

        <span className='flex registerPopup:gap-10 gap-5 items-center  dark:text-white '>
          <span className='flex registerPopup:flex smallest:hidden items-center gap-5 xl:gap-10 text-[17px] heroBreakFour:text-[20px]  2xl:text-[22px] '>
            <Link
              onClick={() => {
                handleNavbarClick();
                setIsDropdownOpen(false);
              }}
              className='hover:text-[#A6AD07]  transition-colors transform duration-300 dark:hover:text-[#C0C81A]  '
              href={"/about"}
            >
              About us
            </Link>
            <Link
              onClick={() => {
                handleNavbarClick();
                setIsDropdownOpen(false);
              }}
              className='hover:text-[#A6AD07] transition-colors transform duration-300 dark:hover:text-[#C0C81A]  '
              href={"/clients"}
            >
              Clients
            </Link>
            <span className='grid'>
              <p
                className='flex hover:text-[#A6AD07] transition-colors transform duration-300 dark:hover:text-[#C0C81A]  gap-3 cursor-pointer  select-none'
                onClick={toggleDropdown}
              >
                Services
                <Image
                  className='dark:hidden block'
                  alt='dropdwon'
                  src={"/dropdown-nav.svg" ?? lightNav.src}
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
                <ul className='services box-border py-[25px] px-[15px] w-[285px] absolute grid gap-[27px] mt-[30px] rounded-md text-[22px] bg-white dark:bg-[#1F1F1F]'>
                  <li onClick={toggleDropdown}>
                    <Link
                      onClick={handleNavbarClick}
                      className='servicetext hover:text-[#A6AD07] transition-colors transform duration-300 dark:hover:text-[#C0C81A] '
                      href={"/it-professional-services"}
                    >
                      IT Professional Services
                    </Link>
                  </li>
                  <li onClick={toggleDropdown}>
                    <Link
                      onClick={handleNavbarClick}
                      className='servicetext hover:text-[#A6AD07] transition-colors transform duration-300 dark:hover:text-[#C0C81A] '
                      href={"/digital-media-services"}
                    >
                      Digital Media Services
                    </Link>
                  </li>
                  <li onClick={toggleDropdown}>
                    <Link
                      onClick={handleNavbarClick}
                      className='servicetext hover:text-[#A6AD07] transition-colors transform duration-300 dark:hover:text-[#C0C81A] '
                      href={"/erp-solutions-odoo"}
                    >
                      ERP Solutions Odoo
                    </Link>
                  </li>
                </ul>
              )}
            </span>
            <Link
              className='hover:text-[#A6AD07] transition-colors transform duration-300 dark:hover:text-[#C0C81A]  '
              href={"/resources"}
              onClick={() => {
                handleNavbarClick();
                setIsDropdownOpen(false);
              }}
            >
              Available resources
            </Link>
            <Link
              onClick={() => {
                handleNavbarClick();
                setIsDropdownOpen(false);
              }}
              href={"/contact"}
            >
              <button
                className={`text-black hover:bg-gradient-to-l hover:from-yellow hover:to-yellow2 transition-colors transform duration-700 bg-yellow  whitespace-nowrap cursor-pointer flex items-center gap-3 font-normal   heroBreakFour:text-[20px]  2xl:text-[20px] text-[17px]  px-[40px] py-[15px] rounded-full`}
              >
                Contact us
              </button>
            </Link>
          </span>
          <span className='smallest:hidden phoneS:block'>
            <Nav />
          </span>
          <button
            className='registerPopup:hidden smallest:flex dark:hidden'
            onClick={toggleModal}
          >
            <Image
              alt='x or hamburger'
              src={!showModal ? "/hamburger.svg" : "/menupp.svg"}
              width={25}
              height={25}
            />
          </button>
          <button
            className='dark:flex dark:registerPopup:hidden hidden'
            onClick={toggleModal}
          >
            <Image
              alt='x or hamburger'
              src={!showModal ? "/darkHamburger.svg" : "/darkMenupp.svg"}
              width={25}
              height={25}
              className=''
            />
          </button>
        </span>
      </div>
      {showModal && <QuickLinks setShowModal={setShowModal} />}
    </nav>
  );
};

export default Navbar;

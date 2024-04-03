import Link from "next/link";
import Image from "next/image";
import React, { useState, useContext, useEffect, useRef } from "react";
import QuickLinks from "./QuickLinks";
import Nav from "./Nav";
import MyThemeContext from "../store/store";
import lightLogo from "./assets/light.svg";
import darkLogo from "./assets/dark.svg";
import { useRouter } from "next/router";

const Navbar = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
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

  useEffect(() => {
    // Add the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav id='header' className={`flex justify-center`}>
      <div
        className={`fixed max-w-[1920px] shadow-neon-rosegold dark:shadow-custom-white bg-pink dark:transition-all transition-all dark:duration-300 duration-300   registerPopup:rounded-3xl registerPopup:w-[95%] smallest:w-full registerPopup:mt-[1%] mx-auto border-2 border-solid dark:border-2 dark:border-solid dark:border-[#CCCDE04D] border-[#CCCDE04D] border-opacity-30 dark:border-opacity-30 registerPopup:py-6 smallest:py-6 z-50 smallest:px-[26px] dark:box-border box-border items-center flex place-content-between dark:bg-[#1F1F1F]`}
      >
        <Link
          onClick={() => {
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
        <span className='smallest:hidden phoneS:block'>
          <Nav />
        </span>
        <span className='flex registerPopup:gap-10 gap-5 pr-16 items-center dark:text-white'>
          <span className='flex registerPopup:flex smallest:hidden items-center gap-5 xl:gap-10 text-[17px] heroBreakFour:text-[20px] 2xl:text-[22px]'>
            <Link
              onClick={() => {}}
              className='hover:text-[#BCC6CC] transition-colors transform duration-300 dark:hover:text-[#4D4D4F]'
              href={"/about"}
            >
              Home
            </Link>
            <Link
              onClick={() => {}}
              className='hover:text-[#BCC6CC] transition-colors transform duration-300 dark:hover:text-[#4D4D4F]'
              href={"/clients"}
            >
              Experience
            </Link>
            <Link
              onClick={() => {}}
              className='hover:text-[#BCC6CC] transition-colors transform duration-300 dark:hover:text-[#4D4D4F]'
              href={"/clients"}
            >
              Projects
            </Link>
            <Link
              className='hover:text-[#BCC6CC] transition-colors transform duration-300 dark:hover:text-[#4D4D4F]'
              href={"/resources"}
              onClick={() => {}}
            >
              About me
            </Link>
            <Link
              className='hover:text-[#BCC6CC] transition-colors transform duration-300 dark:hover:text-[#4D4D4F]'
              onClick={() => {}}
              href={"/contact"}
            >
              Contact
            </Link>
          </span>

          <button className='registerPopup:hidden smallest:flex dark:hidden' onClick={toggleModal}>
            <Image alt='x or hamburger' src={!showModal ? "/hamburger.svg" : "/menupp.svg"} width={25} height={25} />
          </button>
          <button className='dark:flex dark:registerPopup:hidden hidden' onClick={toggleModal}>
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

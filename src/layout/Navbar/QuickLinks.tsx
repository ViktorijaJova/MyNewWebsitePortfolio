import Link from "next/link";
import React, { useContext } from "react";
import Nav from "./Nav";
import MyThemeContext from "../store/store";

interface P {
  setShowModal: (showModal: boolean) => void;
}

const QuickLinks = ({ setShowModal }: P) => {


  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
  }



  return (
    <div className='w-full py-10 xlSpecial:hidden smallest:px-[26px]   box-border items- flex justify-end  bg-pink dark:bg-[#1F1F1F] dark:text-white fixed z-40 pt-32 shadow-lg dark:border-2 dark:border-solid dark:border-[#CCCDE04D] '>
      <span className='grid justify-items-end	 gap-10 text-[22px] '>
        <Link
              className='hover:text-[#BCC6CC] transition-colors transform duration-300 dark:hover:text-[#4D4D4F]'
              href={"/"}
        >
          Home
        </Link>
        <Link
              className='hover:text-[#BCC6CC] transition-colors transform duration-300 dark:hover:text-[#4D4D4F]'
              href={"/"}
        >
          Experience
        </Link>
                 <Link
              className='hover:text-[#BCC6CC] transition-colors transform duration-300 dark:hover:text-[#4D4D4F]'
              href={"/"}
            >
              Projects
            </Link>
            <Link
              className='hover:text-[#BCC6CC] transition-colors transform duration-300 dark:hover:text-[#4D4D4F]'
              href={"/"}
            >
              Projects
            </Link>
            <Link 
                          className='hover:text-[#BCC6CC] transition-colors transform duration-300 dark:hover:text-[#4D4D4F]'

            href={"/"}>
            
                Contact 
            </Link>
        <Nav />
      </span>
    </div>
  );
};

export default QuickLinks;

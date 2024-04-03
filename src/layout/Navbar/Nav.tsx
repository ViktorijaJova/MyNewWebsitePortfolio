import { useContext } from "react";
import MyThemeContext from "../store/store";
import Image from "next/image";
import darkThemeImage from '../Navbar/assets/black.svg';
import lightThemeImage from  '../Navbar/assets/white.svg';


const ThemeToggle = () => {
  const { isDarkTheme, toggleThemeHandler } = useContext(MyThemeContext);

  const handleToggle = () => {
    toggleThemeHandler();
  };

  return (
    <div
      className={` items-center flex justify-center	 border-solid border-2 relative w-[77px] h-[48px] rounded-full transition-transform duration-300 bg-transparent ${
        isDarkTheme
          ? "border-[#626262] border-opacity-100 transition-colors transform duration-300"
          : "border-[#3D3D3D4D] border-opacity-30 transition-colors transform duration-300"
      }`}
    >
      <button
        className={`relative w-[48px] h-[26px] rounded-full transition-transform duration-300 ${
          isDarkTheme ? "bg-[#626262] transition-colors transform duration-300" : " transition-colors transform duration-300 bg-[#E9E9E9]"
        }`}
        onClick={handleToggle}
      >
        <div
          className={`relative left-0.5  w-[22px] h-[22px] rounded-full shadow-md transform transition-transform duration-300 ${
            isDarkTheme
              ? "translate-x-full  transition-colors transform duration-300 bg-[#333333]"
              : "translate-x-0 bg-white transition-colors transform duration-300"
          }`}
        >
          {isDarkTheme ? (
            <Image
              width={24}
              height={24}
              src={darkThemeImage.src}
              alt="Dark Theme"
            />
          ) : (
            <Image
              width={24}
              height={24}
              src={lightThemeImage}
              alt="Light Theme"
            />
          )}
        </div>
      </button>
    </div>
  );
};

export default ThemeToggle;

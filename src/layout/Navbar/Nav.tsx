import { useContext } from "react";
import MyThemeContext from "../store/store";
import Image from "next/image";
import darkThemeImage from '../Navbar/assets/lightbulbLight.svg';
import lightThemeImage from  '../Navbar/assets/lightbulb.svg';


const ThemeToggle = () => {
  const { isDarkTheme, toggleThemeHandler } = useContext(MyThemeContext);

  const handleToggle = () => {
    toggleThemeHandler();
  };

  return (
  
      <button
        className={`absolute top-20 left-[15%]  transition-transform duration-300 ${
          isDarkTheme ? " transition-colors transform duration-300" : " transition-colors transform duration-300 "
        }`}
        onClick={handleToggle}
      >
      
          {isDarkTheme ? (
            <Image
              width={222}
              height={60}
              src={darkThemeImage.src}
              alt="Dark Theme"
            />
          ) : (
            <Image
              width={222}
              height={60}
              src={lightThemeImage}
              alt="Light Theme"
            />
          )}
      </button>
  );
};

export default ThemeToggle;

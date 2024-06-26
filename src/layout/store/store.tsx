import { createContext, ReactElement, useEffect, useState } from "react";

const MyThemeContext = createContext({
  isDarkTheme: true,
  toggleThemeHandler: () => {},
});

interface ThemePropsInterface {
  children?: JSX.Element | Array<JSX.Element>;
}

export function MyThemeContextProvider(
  props: ThemePropsInterface
): ReactElement {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  useEffect(() => initialThemeHandler());

  function isLocalStorageEmpty(): boolean {
    return !localStorage.getItem("isDarkTheme");
  }

  function initialThemeHandler(): void {
    if (isLocalStorageEmpty()) {
      localStorage.setItem("isDarkTheme", "true");
      setIsDarkTheme(true);
      document!.querySelector("body")!.classList.add("dark");
    } else {
      const isDarkTheme: boolean = JSON.parse(
        localStorage.getItem("isDarkTheme")!
      );
      // const isDarkTheme: boolean = JSON.parse(
      // localStorage.getItem("isDarkTheme")!
      // );

      setIsDarkTheme(isDarkTheme);
      if (isDarkTheme) {
        document!.querySelector("body")!.classList.add("dark");
      } else {
        document!.querySelector("body")!.classList.remove("dark"); // Remove the "dark" class for light mode
      }
    }
  }

  function toggleThemeHandler(): void {
    const isDarkTheme: boolean = JSON.parse(
      localStorage.getItem("isDarkTheme")!
    );
    setIsDarkTheme(!isDarkTheme);
    toggleDarkClassToBody();
    setValueToLocalStorage();
  }

  function toggleDarkClassToBody(): void {
    document!.querySelector("body")!.classList.toggle("dark");
  }

  function setValueToLocalStorage(): void {
    localStorage.setItem("isDarkTheme", `${!isDarkTheme}`);
  }

  return (
    <MyThemeContext.Provider value={{ isDarkTheme, toggleThemeHandler }}>
      {props.children}
    </MyThemeContext.Provider>
  );
}

export default MyThemeContext;

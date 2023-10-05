import { createContext, useEffect } from "react";
import React from "react";

const lightTheme = "light";
const darkTheme = "dark";

export const ThemeContext = createContext();
const toggleTheme = () => {
  const theme = getTheme();
  const newTheme = theme === lightTheme ? darkTheme : lightTheme;

  setTheme(newTheme)
  document.documentElement.classList.toggle(newTheme);
  document.documentElement.classList.remove(theme);
};

export const ThemeProvider = ({ children }) => {
  useEffect(() => {
    const theme = getTheme();

    if (!theme) document.documentElement.classList.add(lightTheme);
    else document.documentElement.classList.add(theme);
  }, []);
  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const getTheme = () => localStorage.getItem("theme");
const setTheme = (theme) => localStorage.setItem("theme", theme);

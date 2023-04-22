import React, { useContext, useEffect } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { ThemeContext } from "../ThemeProvider";

const Header = () => {
  const { toggleTheme, theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div className="py-5 shadow-lg bg-secondary">
      <div className="container max-w-7xl px-3 mx-auto flex justify-between">
        <h2 className="font-semibold sm:text-xl ">Where in the world?</h2>
        <div
          onClick={toggleTheme}
          className="flex gap-3 items-center cursor-pointer sm:text-base"
        >
          {theme === "light" ? <HiOutlineMoon /> : <HiOutlineSun />}

          <p>{theme === "light" ? "Dark" : "Light"} Mode</p>
        </div>
      </div>
    </div>
  );
};

export default Header;

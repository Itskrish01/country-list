import React, { createContext, useMemo, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("");
  const [countries, setCountries] = useState();
  const [isFilter, setIsFilter] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const themes = {
    theme,
    toggleTheme,
    setTheme,
    isFilter,
    setIsFilter,
    countries,
    setCountries,
    isLoading,
    setIsLoading,
    setSearchTerm,
    searchTerm,
  };

  return (
    <ThemeContext.Provider value={themes}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;

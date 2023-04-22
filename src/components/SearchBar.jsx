import React, { useContext, useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { ThemeContext } from "../ThemeProvider";
import axios from "axios";

const SearchBar = () => {
  const {
    isFilter,
    setIsFilter,
    setCountries,
    setIsLoading,
    setSearchTerm,
    searchTerm,
  } = useContext(ThemeContext);

  const [region, setRegion] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const getCountryByRegion = async () => {
    setIsLoading(true);
    if (isFilter) {
      const response = await axios.get(
        `https://restcountries.com/v3.1/region/${region}`
      );
      setCountries(response?.data);
      setIsLoading(false);
    } else {
      return;
    }
  };

  useEffect(() => {
    getCountryByRegion();
  }, [region]);

  return (
    <div className="container mt-12 max-w-7xl px-3 mx-auto flex justify-between lg:gap-0 md:gap-0 gap-8 flex-wrap">
      <form className="relative">
        <input
          type="text"
          placeholder="Type here"
          onChange={handleSearchChange}
          className="input input-bordered  w-full sm:max-w-xs bg-secondary"
        />
      </form>
      <div className="dropdown">
        <label tabIndex={0} className="btn m-1 flex gap-5">
          {isFilter ? region : "Filter By Region"}
          <IoMdArrowDropdown />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 bg-secondary shadow-lg rounded-box w-52"
        >
          <li
            onClick={() => {
              setIsFilter(true);
              setRegion("africa");
            }}
          >
            <a>Africa</a>
          </li>
          <li
            onClick={() => {
              setIsFilter(true);
              setRegion("america");
            }}
          >
            <a>America</a>
          </li>
          <li
            onClick={() => {
              setIsFilter(true);
              setRegion("asia");
            }}
          >
            <a>Asia</a>
          </li>
          <li
            onClick={() => {
              setIsFilter(true);
              setRegion("europe");
            }}
          >
            <a>Europe</a>
          </li>
          <li
            onClick={() => {
              setIsFilter(true);
              setRegion("oceania");
            }}
          >
            <a>Oceania</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;

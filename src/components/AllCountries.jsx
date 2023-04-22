import React, { useContext, useEffect } from "react";
import SearchBar from "./SearchBar";
import CountryCard from "./CountryCard";
import { ThemeContext } from "../ThemeProvider";
import axios from "axios";

const AllCountries = () => {
  const { countries, setIsLoading, isLoading, setCountries } =
    useContext(ThemeContext);

  const getAllCountries = async () => {
    setIsLoading(true);
    const response = await axios.get("https://restcountries.com/v3.1/all");
    setCountries(response?.data);
    setIsLoading(false);
  };

  console.log(countries);

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <div>
      <SearchBar />
      <CountryCard AllCountries={countries} isLoading={isLoading} />
    </div>
  );
};

export default AllCountries;

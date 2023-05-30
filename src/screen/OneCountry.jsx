import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const OneCountry = () => {
  const params = useParams();
  const [countryInfo, setCountryInfo] = useState();
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  const countryFetching = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${params.countryName}?fullText=true`
    );
    setCountryInfo(response?.data[0]);
    setLoading(false);
  };

  const countryFetchingByCodes = async () => {
    if (countryInfo?.borders !== undefined) {
      for (const item of countryInfo?.borders) {
        const response = await axios.get(
          `https://restcountries.com/v3.1/alpha/${item}`
        );

        if (countries.includes(response?.data[0].name.common)) {
          setCountries([...countries]);
        } else {
          setCountries((prevCountries) => [
            ...prevCountries,
            response?.data[0].name.common,
          ]);
        }
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    countryFetchingByCodes();
  }, [countryInfo]);

  useEffect(() => {
    countryFetching();
  }, [params]);

  const languageValues = countryInfo?.languages
    ? Object.keys(countryInfo.languages).map(
        (key) => countryInfo.languages[key]
      )
    : [];

  const languageList = languageValues?.map((value) => (
    <li key={value}>{value + ","}</li>
  ));

  const currencyValues = countryInfo?.currencies
    ? Object.keys(countryInfo.currencies).map(
        (key) => countryInfo.currencies[key]
      )
    : [];

  const currencyList = currencyValues?.map((value, idx) => (
    <li key={idx}>{value.name + ","}</li>
  ));

  if (loading) {
    return (
      <div role="status" className="flex justify-center items-center h-[70vh]">
        <svg
          aria-hidden="true"
          class="inline w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <div className="container mb-20 max-w-7xl px-3 mx-auto mt-20">
        <Link to="/" className="btn w-32 flex items-center gap-3">
          <BsArrowLeft />
          <p className="">Back</p>
        </Link>
        <div className="flex items-center flex-wrap sm:flex-nowrap justify-evenly gap-20 sm:gap-44 mt-10">
          <motion.img
            initial={{ opacity: 0, translateY: -10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3, delay: 0 }}
            src={countryInfo?.flags.png}
            alt={countryInfo?.flags.alt}
            className="rounded-lg sm:h-[24rem] sm:w-[34rem] h-full w-full"
          />
          <div className="">
            <motion.h2
              initial={{ opacity: 0, translateY: -10 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-4xl font-medium mb-10"
            >
              {countryInfo?.name.common}
            </motion.h2>
            <ul className="flex sm:flex-row flex-col gap-10 sm:gap-20 text-base">
              <div className="flex flex-col gap-3">
                <motion.li
                  initial={{ opacity: 0, translateY: -10 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="whitespace-nowrap"
                >
                  <span className="font-semibold">Native Name:</span>{" "}
                  {countryInfo?.name.common}
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, translateY: -10 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <span className="font-semibold">Population:</span>{" "}
                  {countryInfo?.population}
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, translateY: -10 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                >
                  <span className="font-semibold">Region:</span>{" "}
                  {countryInfo?.region}
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, translateY: -10 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 0.3, delay: 1 }}
                  className=" whitespace-nowrap"
                >
                  <span className="font-semibold">Sub Region:</span>{" "}
                  {countryInfo?.subregion}
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, translateY: -10 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 0.3, delay: 1.2 }}
                >
                  <span className="font-semibold">Capital:</span>{" "}
                  {countryInfo?.capital}
                </motion.li>
              </div>
              <motion.div
                initial={{ opacity: 0, translateX: -10 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.3, delay: 1.4 }}
                className="flex flex-col md:mt-0 mt-5 sm:mt-0 gap-4"
              >
                <li className=" whitespace-nowrap">
                  <span className="font-semibold">Top Level Domain:</span>{" "}
                  {countryInfo?.tld}
                </li>

                <li>
                  <div className="flex gap-2 flex-wrap">
                    <span className="font-semibold">Currencies:</span>{" "}
                    {currencyList}
                  </div>
                </li>
                <li>
                  <div className="flex gap-2 flex-wrap">
                    <span className="font-semibold">Languages:</span>{" "}
                    {languageList}
                  </div>
                </li>
              </motion.div>
            </ul>

            {countryInfo?.borders !== undefined && (
              <div className="mt-20 flex flex-wrap items-center gap-5">
                <span className="font-semibold">Border Countries: </span>
                {countries.map((item, idx) => (
                  <motion.div
                    initial={{ opacity: 0, translateY: -10 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.3, delay: 0 + idx * 0.2 }}
                    key={idx}
                    className="bg-secondary rounded-md border cursor-pointer"
                  >
                    <Link to={`/country/${item}`}>
                      <div className="px-4 py-0.5  shadow-md">{item}</div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OneCountry;

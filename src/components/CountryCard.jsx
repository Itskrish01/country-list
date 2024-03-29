import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../ThemeProvider";
import { motion } from "framer-motion";

const CountryCard = ({ AllCountries, isLoading }) => {
  const { searchTerm } = useContext(ThemeContext);
  const navigate = useNavigate();

  if (isLoading) {
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
    <div className="container grid mb-20  place-items-center grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4 max-w-7xl px-3 mx-auto mt-20">
      {AllCountries?.filter((item) =>
        item?.name.common.includes(
          searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1)
        )
      ).map((item, idx) => (
        <motion.div
          initial={{ opacity: 0, translateY: -10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0 + idx * 0.2 }}
          key={idx}
          onClick={() => navigate(`/country/${item?.name.common}`)}
          className="card rounded-lg cursor-pointer h-96 w-96 sm:w-72 bg-secondary shadow-xl border  border-black/10"
        >
          <figure>
            <img
              src={item?.flags.png}
              className=" object-cover w-full h-48"
              alt="Flags"
            />
          </figure>
          <div className="card-body px-5 py-7">
            <h2 className="text-xl mb-2 font-semibold">{item?.name.common}</h2>

            <div className="flex gap-2 text-base">
              <h5 className="font-semibold">Population: </h5>
              <p>{item?.population}</p>
            </div>
            <div className="flex gap-2">
              <h5 className="font-semibold">Region: </h5>
              <p>{item?.region} </p>
            </div>
            <div className="flex gap-2">
              <h5 className="font-semibold">Capital:</h5>
              <p>{item?.capital}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CountryCard;

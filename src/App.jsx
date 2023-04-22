import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AllCountries from "./components/AllCountries";
import OneCountry from "./screen/OneCountry";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<AllCountries />} />
        <Route path="/country/:countryName" element={<OneCountry />} />
      </Routes>
    </div>
  );
}

export default App;

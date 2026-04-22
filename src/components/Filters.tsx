import { useCompany } from "../context/CompanyContext";
import { industries, cities } from "../../public/data.ts";
import { useState } from "react";

const Filters = () => {
  const {
    search,
    setSearch,
    location,
    setLocation,
    industry,
    setIndustry,
    setCurrentPage,
  } = useCompany();

  console.log(cities, industries, "industries");
  const [cityLimit, setCityLimit] = useState(10);
  const [industryLimit, setIndustryLimit] = useState(10);

  const handleReset = () => {
    setSearch("");
    setLocation("");
    setIndustry("");
    setCurrentPage(1); // reset pagination
  };
  return (
    <div className="flex flex-wrap gap-4">
      <input
        className="border rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Search company..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="border rounded-lg px-4 py-2"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        <option value="">All Locations</option>

        {cities.slice(0, cityLimit).map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}

        {cityLimit < cities.length && (
          <option disabled>--- More available ---</option>
        )}
      </select>

      <select
        className="border rounded-lg px-4 py-2"
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
      >
        <option value="">All Industry</option>

        {industries.slice(0, industryLimit).map((ind, index) => (
          <option key={index} value={ind}>
            {ind}
          </option>
        ))}

        {industryLimit < industries.length && (
          <option disabled>--- More available ---</option>
        )}
      </select>
{/* Reset Button */}
      <button
        onClick={handleReset}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Reset
      </button>
    </div>
  );
};

export default Filters;

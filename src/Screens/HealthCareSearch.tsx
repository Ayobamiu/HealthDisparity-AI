import React, { useEffect, useMemo, useState } from "react";
import {
  BasicInfoNPI1,
  BasicInfoNPI2,
  Provider,
  SearchData,
} from "../Data/types";
import { statesAndCounties, taxonomyGroupings } from "../Data/data";
import {
  getQueryParam,
  setQueryParam,
} from "../serverless/functions/querySearch";
import { handleSearchHeathCare } from "../serverless/backend/apis";

const HealthcareSearch: React.FC = () => {
  const [searchData, setSearchData] = useState<SearchData>({
    search_city: "",
    search_state: "",
    search_postalCode: "",
    search_taxonomy: "",
  });

  // Effect to get the query value on initial render
  useEffect(() => {
    const search_city = getQueryParam("search_city");
    const search_state = getQueryParam("search_state");
    const search_postalCode = getQueryParam("search_postalCode");
    const search_taxonomy = getQueryParam("search_taxonomy");
    const auto_search = getQueryParam("auto_search");

    const d_data = {
      search_city: search_city || "",
      search_state: search_state || "",
      search_postalCode: search_postalCode || "",
      search_taxonomy: search_taxonomy || "",
    };
    if (
      (search_city || search_state || search_postalCode || search_taxonomy) &&
      auto_search === "true"
    ) {
      (async () => {
        const res = await handleSearchHeathCare(d_data);
        setResults(res);
      })();
    }
    setSearchData(d_data);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value,
    });
    setQueryParam(e.target.name, e.target.value);
  };

  const [results, setResults] = useState<Provider[]>([]);

  const cities = useMemo(() => {
    const selectedState = statesAndCounties.find(
      (i) => i.state_abbr === searchData.search_state
    );
    const search_city = getQueryParam("search_city");

    setSearchData({
      ...searchData,
      search_city:
        search_city &&
        selectedState &&
        selectedState?.counties?.includes(search_city)
          ? search_city
          : "",
    });
    setQueryParam("city", "");
    if (selectedState) {
      return selectedState.counties;
    } else {
      return [];
    }
  }, [searchData.search_state]);

  const getBasicType = (provider: Provider): BasicInfoNPI1 | BasicInfoNPI2 => {
    if (provider.enumeration_type === "NPI-1")
      return provider.basic as BasicInfoNPI1;
    return provider.basic as BasicInfoNPI2;
  };

  const search = async () => {
    const searchResults = await handleSearchHeathCare(searchData);
    if (searchResults) {
      setResults(searchResults);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Healthcare Provider Search</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <select
          className="p-2 border border-gray-300 rounded"
          value={searchData.search_state}
          name="search_state"
          onChange={handleChange}
        >
          <option value="">Select State</option>
          {statesAndCounties.map((item, index) => (
            <option key={index} value={item.state_abbr}>
              {item.state}
            </option>
          ))}
        </select>
        <select
          className="p-2 border border-gray-300 rounded"
          value={searchData.search_city}
          name="search_city"
          onChange={handleChange}
        >
          <option value="">Select City</option>
          {cities.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          className="p-2 border border-gray-300 rounded"
          value={searchData.search_taxonomy}
          name="search_taxonomy"
          onChange={handleChange}
        >
          <option value="">Select Taxonomy</option>
          {taxonomyGroupings.map((group, index) => (
            <option key={index} value={group}>
              {group}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={search}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Search
      </button>

      <div className="mt-6">
        {results?.length > 0 ? (
          <div>
            <h2 className="text-xl font-semibold mb-4">Search Results:</h2>
            <ul>
              {results.map((provider, index) => (
                <li key={index} className="mb-4 border p-4 rounded">
                  <p>
                    <strong>Name:</strong>{" "}
                    {provider.enumeration_type === "NPI-1"
                      ? (getBasicType(provider) as BasicInfoNPI1).first_name
                      : (getBasicType(provider) as BasicInfoNPI2)
                          .organization_name}
                    {provider.enumeration_type === "NPI-1"
                      ? (getBasicType(provider) as BasicInfoNPI1).last_name
                      : ""}
                  </p>
                  <p>
                    <strong>Address:</strong> {provider.addresses[0]?.address_1}
                    , {provider.addresses[0]?.city},{" "}
                    {provider.addresses[0]?.state}{" "}
                    {provider.addresses[0]?.postal_code}
                  </p>
                  <p>
                    <strong>Phone:</strong>{" "}
                    {provider.addresses[0]?.telephone_number}
                  </p>
                  <p>
                    <strong>Taxonomy:</strong> {provider.taxonomies[0]?.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No results found. Try adjusting your search criteria.</p>
        )}
      </div>
    </div>
  );
};

export default HealthcareSearch;

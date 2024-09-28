import React, { useMemo, useState } from "react";
import { statesAndCounties } from "../Data/data";

const SocialDeterminantsForm: React.FC = () => {
  const [state, setState] = useState("");
  const cities = useMemo(() => {
    const selectedState = statesAndCounties.find((i) => i.state_abbr === state);
    if (selectedState) {
      return selectedState.counties;
    } else {
      return [];
    }
  }, [state]);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Health Tracking and Social Determinants
      </h1>

      <form action="/resource-recommendations" className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Non-Medical Factors</h2>
        <div className="mb-6">
          <label className="block">Location:</label>

          <div className="grid  md:grid-cols-2 grid-cols-1 gap-4 w-full">
            <select
              className="p-2 border border-gray-300 rounded col-span-1"
              name="state"
              required
              onChange={(e) => {
                setState(e.target.value);
              }}
            >
              <option value="">Select State</option>
              {statesAndCounties.map((item, index) => (
                <option key={index} value={item.state_abbr}>
                  {item.state}
                </option>
              ))}
            </select>
            <select
              required
              className="p-2 border border-gray-300 rounded col-span-1"
              name="city"
            >
              <option value="">Select City</option>
              {cities.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mb-6">
          <label className="block">Employment Status:</label>
          <select
            required
            name="employmentStatus"
            className="border p-2 w-full rounded"
          >
            <option value="">Select Status</option>
            <option value="Employed">Employed</option>
            <option value="Unemployed">Unemployed</option>
            <option value="Self-Employed">Self-Employed</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block">Income Level:</label>
          <select
            required
            name="incomeLevel"
            className="border p-2 w-full rounded"
          >
            <option value="">Select Income Level</option>
            <option value="Low">Low</option>
            <option value="Middle">Middle</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <label>
            <input type="checkbox" name="foodAccess" />
            <span className="ml-2">I have Access to Food</span>
          </label>
          <label>
            <input type="checkbox" name="transportation" />
            <span className="ml-2">I have Access to Transportation</span>
          </label>
          <label>
            <input type="checkbox" name="housingAccess" />
            <span className="ml-2">I have Access to Housing</span>
          </label>
          <label>
            <input type="checkbox" name="educationAccess" />
            <span className="ml-2">I have Access to Education</span>
          </label>
          <label>
            <input type="checkbox" name="healthcareAccess" />
            <span className="ml-2">I have Access to Healthcare</span>
          </label>
          <label>
            <input type="checkbox" name="socialSupport" />
            <span className="ml-2">I have Social Support</span>
          </label>
          <label>
            <input type="checkbox" name="safetyInNeighborhood" />
            <span className="ml-2">There is Safety in my Neighborhood</span>
          </label>
          <label>
            <input type="checkbox" name="digitalAccess" />
            <span className="ml-2">I have Access to Digital Resources</span>
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 my-4 rounded w-full hover:bg-blue-600"
        >
          Get Community Resource Recommendations
        </button>
      </form>
    </div>
  );
};

export default SocialDeterminantsForm;

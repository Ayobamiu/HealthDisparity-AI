import SignInForm from "../Components/SignInForm";
import { useEffect, useMemo, useState } from "react";
import { raceGroups, statesAndCounties } from "../Data/data";
import { getQueryParam } from "../serverless/functions/querySearch";
import { useAuth } from "../Context/AuthContext";
import { getHealthData } from "../serverless/firebase/app";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";

const HealthDisparityForm = () => {
  const editmode = getQueryParam("editmode") === "on";
  const navigate = useNavigate();
  const { user } = useAuth();
  const [state, setState] = useState("");
  const [findingExistingDoc, setFindingExistingDoc] = useState(false);

  useEffect(() => {
    const userEmail = user?.email;
    if (userEmail) {
      if (editmode) {
        //Prefill form
      } else {
        //check if data is in database
        (async () => {
          setFindingExistingDoc(true);
          const existingData = await getHealthData(userEmail);
          //yes?
          if (existingData) {
            // redirect to disparity result
            navigate("/disparity-result", { replace: true });
          }
          setFindingExistingDoc(false);
        })();
      }
    }
  }, [user]);

  const cities = useMemo(() => {
    const selectedState = statesAndCounties.find((i) => i.state_abbr === state);
    if (selectedState) {
      return selectedState.counties;
    } else {
      return [];
    }
  }, [state]);

  return (
    <div>
      <div className="w-full flex justify-center">
        <Spin className="m-8" spinning={findingExistingDoc} />
      </div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 my-5 rounded-lg shadow-md max-w-xl w-full">
          <h1 className="text-2xl font-bold text-center mb-6">
            Health Disparity Dashboard
          </h1>

          <form action="disparity-result" className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Age
              </label>
              <input
                type="number"
                name="age"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                name="gender"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              >
                <option value="">Select Gender</option>
                <option value="Man">Man </option>
                <option value="Woman">Woman</option>
                <option value="Transgender Man">Transgender Man</option>
                <option value="Transgender Woman">Transgender Woman</option>
                <option value="Non-Binary">Non-Binary</option>
                <option value="No Gender">
                  Agender/I don’t identify with any gender
                </option>
                <option value="Other">Other</option>
                <option value="Prefer not to state">Prefer not to state</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <div className="grid w-full grid-cols-2 gap-x-2">
                <select
                  className="p-2 border border-gray-300 rounded-md"
                  name="state"
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
                  className="p-2 border border-gray-300 rounded-md"
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
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Ethnicity
              </label>
              <select
                name="ethnicity"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              >
                <option value="">Select Ethnicity</option>
                {raceGroups.map((i) => (
                  <option key={i.value} value={i.value}>
                    {i.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Blood Pressure
              </label>
              <input
                type="text"
                name="bloodPressure"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="e.g., 130/85"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Glucose (mg/dL)
              </label>
              <input
                type="number"
                name="glucose"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                BMI
              </label>
              <input
                type="number"
                name="bmi"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                step="0.1"
                required
              />
            </div>
            {/* This is indicate in the form action that data needs to be saved in the database */}
            <input
              type="checkbox"
              name="needsToBeSaved"
              checked={true}
              hidden
              readOnly
            />

            {user ? (
              <button
                type="submit"
                disabled={findingExistingDoc}
                className="disabled:cursor-wait w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Compare
              </button>
            ) : (
              <SignInForm className="w-full" title="Sign In to get started" />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default HealthDisparityForm;

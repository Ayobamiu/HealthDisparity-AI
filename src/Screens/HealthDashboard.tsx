import React, { useState } from "react";
import { empytyCategory, HealthCategory } from "../Data/types";
import { getBMICategory } from "../Calc/bmi";
import { calculateBloodPressureCategory } from "../Calc/bloodPressure";
import { getGlucoseCategory } from "../Calc/glucose";

const defaultCategory = {
  bloodPressure: empytyCategory,
  glucose: empytyCategory,
  bmi: empytyCategory,
};
const defaultUserData = {
  age: "",
  gender: "",
  location: "",
  ethnicity: "",
  bloodPressure: "",
  glucose: "",
  bmi: "",
};
const HealthDashboard = () => {
  const [userData, setUserData] = useState(defaultUserData);
  const [healthCategory, setHealthCategory] = useState<{
    [index: string]: HealthCategory;
  }>(defaultCategory);

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    switch (e.target.name) {
      case "bmi":
        const bmi = getBMICategory(Number(e.target.value));
        setHealthCategory({
          ...healthCategory,
          bmi,
        });
        break;
      case "bloodPressure":
        const systolic = e.target.value.split("/")[0] || 0;
        const diastolic = e.target.value.split("/")[1] || 0;
        const bloodPressure = calculateBloodPressureCategory(
          Number(systolic),
          Number(diastolic)
        );
        setHealthCategory({
          ...healthCategory,
          bloodPressure,
        });
        break;
      case "glucose":
        const glucose = getGlucoseCategory(
          Number(e.target.value),
          Number(userData.age) || 18
        );
        setHealthCategory({
          ...healthCategory,
          glucose,
        });
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Mock national/regional averages
  const nationalAverages = {
    bloodPressure: "120/80",
    glucose: "100 mg/dL",
    bmi: "24.9",
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-xl w-full">
        <h1 className="text-2xl font-bold text-center mb-6">
          Health Disparity Dashboard
        </h1>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Age
              </label>
              <input
                type="number"
                name="age"
                value={userData.age}
                onChange={handleChange}
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
                value={userData.gender}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={userData.location}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Ethnicity
              </label>
              <input
                type="text"
                name="ethnicity"
                value={userData.ethnicity}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Blood Pressure
              </label>
              <input
                type="text"
                name="bloodPressure"
                value={userData.bloodPressure}
                onChange={handleChange}
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
                value={userData.glucose}
                onChange={handleChange}
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
                value={userData.bmi}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                step="0.1"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Your Metrics vs National Averages
            </h2>
            <div className="space-y-2">
              <div>
                <p className="font-bold">Blood Pressure:</p>
                <p>
                  Yours: {userData.bloodPressure} vs National Average:{" "}
                  {nationalAverages.bloodPressure}
                </p>
                <p>Category: {healthCategory["bloodPressure"].category}</p>
                <p>Message: {healthCategory["bloodPressure"].message}</p>
              </div>
              <div>
                <p className="font-bold">Glucose:</p>
                <p>
                  Yours: {userData.glucose} mg/dL vs National Average:{" "}
                  {nationalAverages.glucose}
                </p>
                <p>Category: {healthCategory["glucose"].category}</p>
                <p>Message: {healthCategory["glucose"].message}</p>
              </div>
              <div>
                <p className="font-bold">BMI:</p>
                <p>
                  Yours: {userData.bmi} vs National Average:{" "}
                  {nationalAverages.bmi}
                </p>
                <p>Category: {healthCategory["bmi"].category}</p>
                <p>Message: {healthCategory["bmi"].message}</p>
              </div>
            </div>

            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthDashboard;

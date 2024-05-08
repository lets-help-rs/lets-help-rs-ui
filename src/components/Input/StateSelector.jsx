import React, { useState, useEffect } from "react";
import Api from "../../services/Api";

const StateSelector = ({ onStateSelected }) => {
  const [states, setStates] = useState([]);

  const fetchStates = async () => {
    try {
      const statesFetched = await Api.getStates();
      setStates(statesFetched);
    } catch (error) {
      console.error("Failed to fetch states", error);
    }
  };

  useEffect(() => {
    fetchStates();
  }, []);

  return (
    <select
      onChange={(e) => onStateSelected(e.target.value)}
      defaultValue=""
      className="h-8 bg-white rounded-md shadow-sm border-gray-300 focus:ring focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out px-2"
    >
      <option value="" disabled>
        UF
      </option>
      {states.map((state) => (
        <option key={state} value={state}>
          {state}
        </option>
      ))}
    </select>
  );
};

export default StateSelector;

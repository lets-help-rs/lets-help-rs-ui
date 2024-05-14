import React, { useState, useEffect, useContext } from "react";
import Select from "react-select";
import Api from "../../services/Api";
import { MapContext } from "../../context/MapContext";

const StateSelector = () => {
  const [states, setStates] = useState([]);
  const { setState } = useContext(MapContext);

  const fetchStates = async () => {
    try {
      const statesFetched = await Api.getStates();
      const stateOptions = statesFetched.map((state) => ({
        value: state,
        label: state,
      }));
      setStates(stateOptions);
    } catch (error) {
      console.error("Failed to fetch states", error);
    }
  };

  useEffect(() => {
    fetchStates();
  }, []);

  const handleSelectState = (selectedOption) => {
    setState(selectedOption.value);
  };

  return (
    <Select
      options={states}
      onChange={handleSelectState}
      placeholder="UF"
      className="basic-single"
      classNamePrefix="select"
    />
  );
};

export default StateSelector;

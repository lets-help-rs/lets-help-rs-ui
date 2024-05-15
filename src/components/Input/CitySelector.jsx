import React, { useState, useEffect, useContext } from "react";
import Select from "react-select";
import Api from "../../services/Api";
import { MapContext } from "../../context/MapContext";

const CitySelector = ({ onClose }) => {
  const [cities, setCities] = useState([]);
  const { state, setCity } = useContext(MapContext);

  const fetchCities = async () => {
    try {
      const citiesFetched = await Api.getCitiesByState(state);
      const formattedCities = citiesFetched.map(city => ({
        label: city.nome,
        value: city.id
      }));
      setCities(formattedCities);
    } catch (error) {
      console.error("Failed to fetch cities", error);
    }
  };

  useEffect(() => {
    if (state) {
      fetchCities();
    }
  }, [state]);

  const handleSelectCity = (selectedOption) => {
    setCity(selectedOption.label);
    onClose();
  };

  return (
    <Select
      options={cities}
      onChange={handleSelectCity}
      placeholder="Selecione uma cidade"
      className="basic-single min-w-44"
      classNamePrefix="select"
    />
  );
};

export default CitySelector;

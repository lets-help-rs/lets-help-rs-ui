import React, { useState, useEffect, useContext } from "react";
import Api from "../../services/Api";
import { MapContext } from "../../context/MapContext";

const CitySelector = () => {
  const [cities, setCities] = useState([]);

  const {state, setCity} = useContext(MapContext)


  const fetchCities = async () => {
    try {
      const citiesFetched = await Api.getCitiesByState(state);
      setCities(citiesFetched);
    } catch (error) {
      console.error("Failed to fetch cities", error);
    }
  };

  useEffect(() => {
    fetchCities();
  }, [state]);

  return (
    <select
      onChange={(e) => setCity(e.target.value)}
      defaultValue=""
      className="h-8 bg-white rounded-md shadow-sm border-gray-300 focus:ring transition duration-200 ease-in-out px-2"
    >
      <option value="">Selecione uma cidade</option>
      {cities.map((city) => (
        <option key={city.id} value={city.nome}>
          {city.nome}
        </option>
      ))}
    </select>
  );
};

export default CitySelector;

import React, { useState, useEffect, useContext } from "react";
import Api from "../../services/Api";
import { MapContext } from "../../context/MapContext";

const CitySelector = ({onClose}) => {
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

  const handleSelectCity = (city) => {
    setCity(city)
    onClose();
  }

  useEffect(() => {
    fetchCities();
  }, [state]);

  return (
    <select
      onChange={(e) => handleSelectCity(e.target.value)}
      defaultValue=""
      className="h-10 bg-white rounded-md shadow-sm border border-gray-300 focus:ring transition duration-200 ease-in-out px-2"
    >
      <option value="">Selecione uma cidade</option>
      {cities && cities.map((city) => (
        <option key={city.id} value={city.nome}>
          {city.nome}
        </option>
      ))}
    </select>
  );
};

export default CitySelector;

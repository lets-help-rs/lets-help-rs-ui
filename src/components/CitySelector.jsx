import React, { useState, useEffect } from 'react';

const CitySelector = ({ stateId }) => {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        if (stateId) {
            const fetchCities = async () => {
                try {
                    const response = await fetch(`URL_API_CITIES/${stateId}`); // Substitua pela URL correta
                    const data = await response.json();
                    setCities(data);
                } catch (error) {
                    console.error('Failed to fetch cities', error);
                }
            };

            fetchCities();
        }
    }, [stateId]);

    return (
        <select defaultValue="">
            <option value="" disabled>Selecione uma cidade</option>
            {cities.map(city => (
                <option key={city.id} value={city.id}>{city.name}</option>
            ))}
        </select>
    );
};

export default CitySelector;

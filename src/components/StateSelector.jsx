import React, { useState, useEffect } from 'react';

const StateSelector = ({ onStateSelected }) => {
    const [states, setStates] = useState([]);

    useEffect(() => {
        const fetchStates = async () => {
            try {
                const response = await fetch('URL_API_STATES'); 
                const data = await response.json();
                setStates(data);
            } catch (error) {
                console.error('Failed to fetch states', error);
            }
        };

        fetchStates();
    }, []);

    return (
        <select onChange={(e) => onStateSelected(e.target.value)} defaultValue="">
            <option value="" disabled>Selecione um estado</option>
            {states.map(state => (
                <option key={state.id} value={state.id}>{state.name}</option>
            ))}
        </select>
    );
};

export default StateSelector;

import React, { createContext, useState, useCallback } from 'react';
import Api from '../services/Api';

export const MapContext = createContext();

export const MapProvider = ({ children }) => {
  const [collectPoints, setCollectPoints] = useState([]);
  const [addingMarker, setAddingMarker] = useState(false);

  const fetchCollectPoints = useCallback(async () => {
    const params = {
      page: 1,
      take: 100,
      orderBy: "id",
      ordering: "desc",
      state: "SC",
      city: "Tubarao",
    };
    try {
      const data = await Api.getCollectPoints(params);
      setCollectPoints(data);
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  const handleCreateCollectPoint = useCallback(
    async (latlng) => {
      const collectPointData = {
        state: "SC",
        city: "Tubarao",
        description: "Farol Shopping",
        latitude: latlng.lat,
        longitude: latlng.lng,
        reviews: 1,
      };
      try {
        await Api.createCollectPoint(collectPointData);
        fetchCollectPoints();
      } catch (error) {
        console.error(error.message);
      }
    },
    [fetchCollectPoints]
  );

  const value = {
    collectPoints,
    setCollectPoints,
    addingMarker,
    setAddingMarker,
    fetchCollectPoints,
    handleCreateCollectPoint
  };

  return (
    <MapContext.Provider value={value}>
      {children}
    </MapContext.Provider>
  );
};

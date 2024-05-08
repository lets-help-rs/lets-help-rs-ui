import React, { createContext, useState, useCallback } from "react";
import Api from "../services/Api";

export const MapContext = createContext();

export const MapProvider = ({ children }) => {
  const [collectPoints, setCollectPoints] = useState([]);
  const [addingMarker, setAddingMarker] = useState(false);
  const [city, setCity] = useState();
  const [state, setState] = useState();

  const fetchCollectPoints = useCallback(async () => {
    const params = {
      city: city,
      state: state,
    };
    try {
      const { data } = await Api.getCollectPoints(params);
      setCollectPoints(data);
    } catch (error) {
      console.error(error.message);
    }
  }, [city]);

  const handleCreateCollectPoint = useCallback(
    async (latlng) => {
      console.log("latlng", latlng);
      const collectPointData = {
        state: state,
        city: city,
        latitude: latlng.lat,
        longitude: latlng.lng,
        description: " teste",
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
    handleCreateCollectPoint,
    state,
    setState,
    city,
    setCity,
  };

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
};

import React, { createContext, useState, useCallback, useEffect } from "react";
import Api from "../services/Api";

export const MapContext = createContext();

export const MapProvider = ({ children }) => {
  const [collectPoints, setCollectPoints] = useState([]);
  const [addingMarker, setAddingMarker] = useState(false);
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [mapDetails, setMapDetails] = useState({
    coordinates: { lat: null, lng: null },
    zoom: null,
  });

  const fetchCollectPoints = useCallback(async () => {
    const params = {
      latitude: mapDetails.coordinates.lat,
      longitude: mapDetails.coordinates.lng,
    };

    try {
      const { data } = await Api.getCollectPoints(params);
      setCollectPoints(data);
    } catch (error) {
      console.error(error.message);
    }
  }, [mapDetails.coordinates]);

  const handleCreateCollectPoint = useCallback(
    async (collectPointData) => {
      try {
        await Api.createCollectPoint(collectPointData);
        fetchCollectPoints();
      } catch (error) {
        console.error(error.message);
      }
    },
    [fetchCollectPoints]
  );

  useEffect(() => {
    const { coordinates } = mapDetails;

    if (coordinates.lat && coordinates.lng) {
      fetchCollectPoints();
    }
  }, [mapDetails, fetchCollectPoints]);

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
    mapDetails,
    setMapDetails,
  };

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
};

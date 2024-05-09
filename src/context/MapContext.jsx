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


  console.log(`collectPoints`, collectPoints)

  const fetchCollectPoints = useCallback(async () => {
    const params = {
      latitude: mapDetails.coordinates.lat,
      longitude: mapDetails.coordinates.lng,     
    };

    try {
      const { data } = await Api.getCollectPoints(params);
      console.log(`data`, data)
      setCollectPoints(data);
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  const handleCreateCollectPoint = useCallback(
    async (latlng) => {
      const collectPointData = {
        latitude: latlng.lat,
        longitude: latlng.lng,
        description: "teste",
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

  useEffect(() => {
    const { coordinates, zoom } = mapDetails;

    console.log(`coordinates`, coordinates)

    if (coordinates.lat && coordinates.lng) {

      console.log('ENTROU:', coordinates)
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

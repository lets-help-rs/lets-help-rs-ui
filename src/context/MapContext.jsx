import React, { createContext, useState } from "react";
import Api from "../services/Api";
import useCollectPoints from "../hooks/useCollectPoints";

const MapContext = createContext();

const MapProvider = ({ children }) => {
  const [addingMarker, setAddingMarker] = useState(false);
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [mapDetails, setMapDetails] = useState({ coordinates: { lat: null, lng: null }, zoom: null });

  const { data, refetch } = useCollectPoints(mapDetails);

  const handleCreateCollectPoint = async (collectPointData) => {
    try {
      await Api.createCollectPoint(collectPointData);
      refetch();
    } catch (error) {
      console.error(error.message);
    }
  };

  const sendReview = async (id, type) => {
    try {
      await Api.patchReview(id, type);
    } catch (error) {
      console.error(error.message);
    }
  }

  const value = {
    collectPoints: data?.data ,
    addingMarker,
    setAddingMarker,
    refetch,
    handleCreateCollectPoint,
    state,
    setState,
    city,
    setCity,
    mapDetails,
    setMapDetails,
    sendReview
  };

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
};

export { MapContext, MapProvider };

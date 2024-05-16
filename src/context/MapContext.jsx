import React, { createContext, useState } from "react";
import Api from "../services/Api";
import useCollectPoints from "../hooks/useCollectPoints";

const MapContext = createContext();

const MapProvider = ({ children }) => {
  const [addingMarker, setAddingMarker] = useState(false);
  const [city, setCity] = useState(
    JSON.parse(localStorage.getItem("selectedLocation"))?.city || undefined
  );
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem("selectedLocation"))?.state || undefined
  );
  const [mapDetails, setMapDetails] = useState({
    coordinates: { lat: null, lng: null },
    zoom: null,
  });

  const { data, refetch } = useCollectPoints(mapDetails);

  const handleCreateCollectPoint = async (collectPointData) => {
    try {
      await Api.createCollectPoint(collectPointData);
      refetch();
    } catch (error) {
      console.error(error.message);
    }
  };

  const sendReview = async (id, type, collectPoint) => {
    try {
      await Api.patchReview(id, type);
      if (type === "REPORT") {
        collectPoint.badReviews++;

        if (collectPoint.badReviews >= import.meta.env.VITE_REPORT_DELETE) {
          refetch();
        }
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const value = {
    collectPoints: data,
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
    sendReview,
  };

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
};

export { MapContext, MapProvider };

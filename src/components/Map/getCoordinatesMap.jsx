import React, { useState } from 'react';
import { useMap, useMapEvents } from 'react-leaflet';

const GetCoordinatesMap = () => {
  const map = useMap();
  const [mapDetails, setMapDetails] = useState({ coordinates: map.getCenter(), zoom: map.getZoom() });

  useMapEvents({
    moveend: () => {
      setMapDetails({ coordinates: map.getCenter(), zoom: map.getZoom() });
    },
    zoomend: () => {
      setMapDetails({ coordinates: map.getCenter(), zoom: map.getZoom() });
    }
  });

  console.log(mapDetails)

  return null;
};

export default GetCoordinatesMap;

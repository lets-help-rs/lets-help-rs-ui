import { useContext, useEffect } from "react";
import { useMap, useMapEvents } from "react-leaflet";
import { MapContext } from "../../context/MapContext";

const GetCoordinatesMap = () => {
  const map = useMap();
  const { mapDetails, setMapDetails, setCollectPoints } =
    useContext(MapContext);

  const checkSignificantChange = (newDetails) => {
    if (newDetails.zoom < 13) {
      setCollectPoints([]);
      return false;
    }

    const { coordinates } = mapDetails;
    const distanceThreshold = 0.05;

    const latChanged =
      Math.abs(coordinates.lat - newDetails.coordinates.lat) >
      distanceThreshold;
    const lngChanged =
      Math.abs(coordinates.lng - newDetails.coordinates.lng) >
      distanceThreshold;

    return latChanged || lngChanged;
  };

  useMapEvents({
    moveend: () => {
      const newDetails = { coordinates: map.getCenter(), zoom: map.getZoom() };
      if (checkSignificantChange(newDetails)) {
        setMapDetails(newDetails);
      }
    },
    zoomend: () => {
      const newDetails = { coordinates: map.getCenter(), zoom: map.getZoom() };
      if (checkSignificantChange(newDetails)) {
        setMapDetails(newDetails);
      }
    },
  });

  useEffect(() => {
    setMapDetails({ coordinates: map.getCenter(), zoom: map.getZoom() });
  }, []);

  return null;
};

export default GetCoordinatesMap;

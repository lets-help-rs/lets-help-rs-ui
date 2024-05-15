import { useQuery } from "react-query";
import Api from "../services/Api";

const useCollectPoints = (mapDetails) => {
  const fetchCollectPoints = () => {
    if (mapDetails.zoom <= 13) {
      return false;
    } else {
      return Api.getCollectPoints({
        latitude: mapDetails.coordinates.lat,
        longitude: mapDetails.coordinates.lng,
      });
    }
  };

  return useQuery(
    ["collectPoints", mapDetails.coordinates.lat, mapDetails.coordinates.lng],
    fetchCollectPoints,
    {
      enabled: !!mapDetails.coordinates.lat && !!mapDetails.coordinates.lng,
      onError: (error) => console.error(error.message),
    }
  );
};

export default useCollectPoints;

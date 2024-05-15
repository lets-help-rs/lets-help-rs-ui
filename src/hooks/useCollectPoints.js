import { useQuery } from "react-query";
import Api from "../services/Api";
import CollectPoint from "../entities/collect-point.entity";

const useCollectPoints = (mapDetails) => {
  const fetchCollectPoints = async () => {
    if (mapDetails.zoom <= 13) {
      return false;
    } else {
      const response = await Api.getCollectPoints({
        latitude: mapDetails.coordinates.lat,
        longitude: mapDetails.coordinates.lng,
      });

      if (!response?.data)
        throw new Error(
          "Ops! Houve um problema interno. Tente novamente mais tarde."
        );

      const { data } = response;

      const formattedData = data.map((point) => {
        return CollectPoint.make(point);
      });

      return formattedData;
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

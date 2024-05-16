import { useMap } from "react-leaflet";
import { OpenStreetMapProvider, GeoSearchControl } from "leaflet-geosearch";
import { useEffect, useCallback, useMemo, useContext } from "react";
import { MapContext } from "../../context/MapContext";
import useUserGeolocation from "../../hooks/useUserLocation";

const Search = () => {
  const { city, state } = useContext(MapContext);
  const { permission, isLoading } = useUserGeolocation();

  const map = useMap();

  const provider = useMemo(() => new OpenStreetMapProvider(), []);

  const performSearchLocation = useCallback(
    (query) => {
      provider
        .search({ query })
        .then((results) => {
          if (results && results.length > 0) {
            const { x, y } = results[0];
            map.flyTo([y, x], 13);
          }
        })
        .catch((error) => {
          console.error("Search failed:", error);
        });
    },
    [map, provider]
  );

  useEffect(() => {
    const searchControl = new GeoSearchControl({
      provider: provider,
      style: "bar",
      autoComplete: true,
      autoCompleteDelay: 250,
      showMarker: false,
      showPopup: false,
      searchLabel: "Procure por um endereço",
      animateZoom: true,
    });

    map.addControl(searchControl);

    const cityFromLocalStorage = JSON.parse(
      localStorage.getItem("selectedLocation")
    )?.city;
    const stateFromLocalStorage = JSON.parse(
      localStorage.getItem("selectedLocation")
    )?.state;

    if (cityFromLocalStorage && stateFromLocalStorage && !isLoading) {
      if (permission === "granted") return;

      performSearchLocation(`${cityFromLocalStorage} ${stateFromLocalStorage}`);
    }

    return () => {
      map.removeControl(searchControl);
    };
  }, [
    map,
    city,
    state,
    performSearchLocation,
    provider,
    permission,
    isLoading,
  ]);

  return null;
};

export default Search;

import { useMap } from "react-leaflet";
import { OpenStreetMapProvider, GeoSearchControl } from "leaflet-geosearch";
import { useEffect, useCallback, useMemo, useContext } from "react";
import { MapContext } from "../../context/MapContext";

const Search = () => {
  const {city, state} = useContext(MapContext)
  const map = useMap();

  const provider = useMemo(() => new OpenStreetMapProvider(), []);

  const performSearchLocation = useCallback((query) => {
    provider.search({ query }).then(results => {
      if (results && results.length > 0) {
        const { x, y } = results[0]; 
        map.flyTo([y, x], 13); 
      }
    }).catch(error => {
      console.error("Search failed:", error);
    });
  }, [map, provider]); 

  useEffect(() => {
    const searchControl = new GeoSearchControl({
      provider: provider,
      style: "bar",
      autoComplete: true,
      autoCompleteDelay: 250,
      showMarker: false,
      showPopup: false,
      searchLabel: 'Procure por um endereço',
      animateZoom: true,
    });

    map.addControl(searchControl);

    if (city && state) {
      performSearchLocation(`${city} ${state}`);
    }

    return () => {
      map.removeControl(searchControl);
    };

  }, [map, city, state, performSearchLocation, provider]);

  return null;
};

export default Search;

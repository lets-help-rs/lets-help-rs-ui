import { useMap } from "react-leaflet";
import { OpenStreetMapProvider, GeoSearchControl } from "leaflet-geosearch";
import { useEffect, useCallback, useMemo } from "react";

const Search = ({ location }) => {
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

    if (location) {
      performSearchLocation(location);
    }

    return () => {
      map.removeControl(searchControl);
    };

  }, [map, location, performSearchLocation, provider]);

  return null;
};

export default Search;

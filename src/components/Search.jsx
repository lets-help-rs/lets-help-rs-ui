import { useMap } from "react-leaflet";
import { OpenStreetMapProvider, GeoSearchControl } from "leaflet-geosearch";
import L from "leaflet";
import { useEffect } from "react";

const Search = () => {
  const map = useMap();

  const provider = new OpenStreetMapProvider();

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

  useEffect(() => {
    map.addControl(searchControl);


    return () => {
      map.removeControl(searchControl);
    };

  }, [map]);

  return null;
};

export default Search;

import React, { useContext } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

import useUserGeolocation from "../hooks/useUserLocation";

import { useTour } from "@reactour/tour";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import CustomPopup from "../components/CustomPopup/CustomPopup";
import AddMarkerOnClick from "../components/Map/AddMarkerOnClick";
import HelpButton from "../components/Map/HelpButton";
import Search from "../components/Map/Search";
import GetCoordinatesMap from "../components/Map/getCoordinatesMap";
import { MapContext } from "../context/MapContext";
import { useShowTour } from "../hooks/useShowTour";
import { createColorIconById } from "../utils/customMarkers";
import AddLocationButton from "../components/Map/AddLocationButton";

const TILE_LAYER_URL = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";

const Map = () => {
  const { collectPoints } = useContext(MapContext);
  const { location } = useUserGeolocation();
  const { setIsOpen } = useTour()
  const { tourWasShown } = useShowTour();

  useEffect( () => {
    setTimeout(() => {
      if (!tourWasShown) setIsOpen(true);
    }, 200);
  })

  return (
    location && (
      <div className="h-[calc(100vh-6rem)] relative z-0">
        <MapContainer center={location} zoom={13} className="h-full z-0">
          <TileLayer url={TILE_LAYER_URL} />
          <Search />
            {collectPoints &&
              collectPoints.map((point, index) => (
                <Marker
                  key={index}
                  position={[point.latitude, point.longitude]}
                  icon={createColorIconById(point.id)}
                  >
                  <CustomPopup point={point}/>
                </Marker>
              ))}
          <AddMarkerOnClick />
          <GetCoordinatesMap />
        </MapContainer>
        <HelpButton />
        <AddLocationButton />
      </div>
    )
  );
};

export default Map;

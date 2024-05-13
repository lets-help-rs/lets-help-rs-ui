import React, { useContext } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import useUserGeolocation from "../hooks/useUserLocation";

import "leaflet/dist/leaflet.css";
import AddMarkerOnClick from "../components/Map/AddMarkerOnClick";
import ButtonAddLocation from "../components/Map/ButtonAddLocation";
import Search from "../components/Map/Search";
import GetCoordinatesMap from "../components/Map/getCoordinatesMap";
import { MapContext } from "../context/MapContext";
import { createColorIconById } from "../utils/customMarkers";

const TILE_LAYER_URL = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";

const Map = () => {
  const { collectPoints } = useContext(MapContext);
  const { location } = useUserGeolocation();

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
                  <Popup>
                    {point.description}
                  </Popup>
                </Marker>
              ))}
          <AddMarkerOnClick />
          <GetCoordinatesMap />
        </MapContainer>
        <ButtonAddLocation />
      </div>
    )
  );
};

export default Map;

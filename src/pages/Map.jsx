import React, { useContext } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import EditablePopup from "react-leaflet-editable-popup";

import useUserGeolocation from "../hooks/useUserLocation";

import "leaflet/dist/leaflet.css";
import AddMarkerOnClick from "../components/Map/AddMarkerOnClick";
import ButtonAddLocation from "../components/Map/ButtonAddLocation";
import Search from "../components/Map/Search";
import GetCoordinatesMap from "../components/Map/getCoordinatesMap";
import { MapContext } from "../context/MapContext";

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
          <MarkerClusterGroup>
            {collectPoints &&
              collectPoints.map((point, index) => (
                <Marker
                  key={index}
                  position={[point.latitude, point.longitude]}
                  ref={point.ref}
                >
                  <Popup>
                    {point.description}
                  </Popup>
                </Marker>
              ))}
          </MarkerClusterGroup>
          <AddMarkerOnClick />
          <GetCoordinatesMap />
        </MapContainer>
        <ButtonAddLocation />
      </div>
    )
  );
};

export default Map;

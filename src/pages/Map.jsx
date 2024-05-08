import React, { useContext } from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import EditablePopup from "react-leaflet-editable-popup";

import useUserGeolocation from "../hooks/useUserLocation";


import "leaflet/dist/leaflet.css";
import { MapContext } from "../context/MapContext"; 
import Search from "../components/Map/Search";
import CircleRadius from "../components/Map/CircleRadius";
import ButtonAddLocation from "../components/Map/ButtonAddLocation";
import AddMarkerOnClick from "../components/Map/AddMarkerOnClick";

const TILE_LAYER_URL = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";

const Map = () => {
  const {
    collectPoints,

    fetchCollectPoints,
  } = useContext(MapContext);

  const center = useUserGeolocation();


  return (
    center && (
      <div className="h-[calc(100vh-6rem)]">
        <MapContainer center={center} zoom={13} className="relative z-0 h-full">
          <TileLayer url={TILE_LAYER_URL} />
          <Search />
          <CircleRadius fetchCollectPoints={fetchCollectPoints} />
          <MarkerClusterGroup>
            {collectPoints.map((point, index) => (
              <Marker
                key={index}
                position={[point.latitude, point.longitude]}
              >
                <EditablePopup editable open>
                  Adicione aqui informações pertinentes e clique em SALVAR.
                </EditablePopup>
              </Marker>
            ))}
          </MarkerClusterGroup>
          <AddMarkerOnClick />
        </MapContainer>
        <ButtonAddLocation />
      </div>
    )
  );
};

export default Map;

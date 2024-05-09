import React, { useContext } from "react";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import EditablePopup from "react-leaflet-editable-popup";

import useUserGeolocation from "../hooks/useUserLocation";

import "leaflet/dist/leaflet.css";
import { MapContext } from "../context/MapContext";
import Search from "../components/Map/Search";
import ButtonAddLocation from "../components/Map/ButtonAddLocation";
import AddMarkerOnClick from "../components/Map/AddMarkerOnClick";
import GetCoordinatesMap from "../components/Map/getCoordinatesMap";

const TILE_LAYER_URL = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";

const Map = () => {
  const { collectPoints } = useContext(MapContext);
  const {location} = useUserGeolocation();

  return (
    location && (
      <div className="h-[calc(100vh-6rem)] relative z-0">
        <MapContainer center={location} zoom={13} className="h-full">
          <TileLayer url={TILE_LAYER_URL} />
          <Search />
          <MarkerClusterGroup>
            {collectPoints && collectPoints.map((point, index) => (
              <Marker key={index} position={[point.latitude, point.longitude]}>
                <EditablePopup editable open>
                  Adicione aqui informações pertinentes e clique em SALVAR.
                </EditablePopup>
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

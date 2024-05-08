import React, { useState, useCallback, useEffect, useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { MdAddLocationAlt } from "react-icons/md";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import EditablePopup from "react-leaflet-editable-popup";
import "leaflet/dist/leaflet.css";
import Api from "../services/Api";
import useUserGeolocation from "../hooks/useUserLocation";
import Search from "./Search";


const TILE_LAYER_URL = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";

const Map = () => {
  const center = useUserGeolocation();
  const [collectPoints, setCollectPoints] = useState([]);
  const [addingMarker, setAddingMarker] = useState(false);

  const pointRef = useRef(null);

  const fetchCollectPoints = useCallback(async () => {
    const params = {
      page: 1,
      take: 100,
      orderBy: "id",
      ordering: "desc",
      state: "SC",
      city: "Tubarao",
    };
    try {
      const data = await Api.getCollectPoints(params);
      setCollectPoints(data);
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  const handleCreateCollectPoint = useCallback(
    async (latlng) => {
      const collectPointData = {
        state: "SC",
        city: "Tubarao",
        description: "Farol Shopping",
        latitude: latlng.lat,
        longitude: latlng.lng,
        reviews: 1,
      };
      try {
        await Api.createCollectPoint(collectPointData);
        fetchCollectPoints();
      } catch (error) {
        console.error(error.message);
      }
    },
    [fetchCollectPoints]
  );

  const AddMarkerOnClick = () => {
    useMapEvents({
      click: (e) => {
        if (addingMarker) {
          const newMarker = e.latlng;
          handleCreateCollectPoint(newMarker);
          setAddingMarker(false);
        }
      },
    });
    return null;
  };

  useEffect(() => {
    fetchCollectPoints();
  }, [fetchCollectPoints]);

  return (
    center && (
      <div className="h-[calc(100vh-6rem)]">
        <MapContainer
          center={center}
          zoom={13}
          className="relative z-0 h-full"
        >
          <TileLayer url={TILE_LAYER_URL} />
          <Search /> 
          <MarkerClusterGroup>
            {collectPoints.map((point, i) => (
              <Marker
                key={point.id}
                position={[point.latitude, point.longitude]}
                ref={pointRef}
              >
                <EditablePopup editable open>
                  Adicione aqui informações pertinentes e clique em SALVAR.
                </EditablePopup>
              </Marker>
            ))}
          </MarkerClusterGroup>
          <AddMarkerOnClick />
        </MapContainer>
        <button
          onClick={() => setAddingMarker(!addingMarker)}
          className={`fixed bottom-4 right-4 w-20 h-20 rounded-full cursor-pointer ${
            addingMarker ? "bg-red-500" : "bg-blue-400"
          } flex justify-center items-center`}
        >
          {addingMarker ? (
            <IoCloseSharp className="text-4xl" />
          ) : (
            <MdAddLocationAlt className="text-4xl" />
          )}
        </button>
      </div>
    )
  );
};

export default Map;

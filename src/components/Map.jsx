import axios from 'axios';
import { useEffect, useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { MdAddLocationAlt } from 'react-icons/md';
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import EditablePopup from 'react-leaflet-editable-popup';
import "leaflet/dist/leaflet.css";

const Map = () => {
  const [center, setCenter] = useState();
  const [markers, setMarkers] = useState([]);
  const [addingMarker, setAddingMarker] = useState(false);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setCenter([position.coords.latitude, position.coords.longitude]);
      });
    } else {
      setCenter([51.505, -0.09]);
    }
    fetchMarkers();
  }, []);

  const fetchMarkers = async () => {
    try {
      const response = await axios.get('https://yourapi.com/markers');
      setMarkers(response.data);
    } catch (error) {
      console.error('Failed to fetch markers:', error);
    }
  };

  const addMarker = async (newMarker) => {
    try {
      await axios.post('https://yourapi.com/markers', newMarker);
      setMarkers(prevMarkers => [...prevMarkers, newMarker]);
    } catch (error) {
      console.error('Failed to add marker:', error);
    }
  };

  const AddMarkerOnClick = () => {
    useMapEvents({
      click: (e) => {
        if (addingMarker) {
          const newMarker = e.latlng;
          addMarker(newMarker);
          setAddingMarker(false);
        }
      },
    });
    return null;
  };

  return (
    center && (
      <div>
        <MapContainer center={center} zoom={13} className="h-screen w-screen relative z-0">
          <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MarkerClusterGroup>
            {markers.map((position, i) => (
              <Marker key={i} position={position}>
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
          className={`z-50 fixed bottom-4 right-4 w-20 h-20 rounded-full cursor-pointer ${!addingMarker ? "bg-blue-400" : "bg-red-500"} flex justify-center items-center`}
        >
          {addingMarker ? <IoCloseSharp className="text-4xl" /> : <MdAddLocationAlt className="text-4xl" />}
        </button>
      </div>
    )
  );
};

export default Map;

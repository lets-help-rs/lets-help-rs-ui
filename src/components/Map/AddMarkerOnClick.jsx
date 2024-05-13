import React, { useContext, useEffect, useState } from "react";
import { useMapEvents, Marker } from "react-leaflet";
import { MapContext } from "../../context/MapContext";
import CustomEditablePopup from "./CustomEditablePopup";

const AddMarkerOnClick = () => {
  const { addingMarker, setAddingMarker, handleCreateCollectPoint } =
    useContext(MapContext);
  const [tempMarker, setTempMarker] = useState(null);

  const handleSavePopup = (content) => {
    const collectPoint = {
      latitude: tempMarker.latitude,
      longitude: tempMarker.longitude,
      description: content,
    };
    handleCreateCollectPoint(collectPoint);
    setAddingMarker(false);
    setTempMarker(null);
  };

  useMapEvents({
    click: (e) => {
      if (addingMarker) {
        const newMarker = {
          latitude: e.latlng.lat,
          longitude: e.latlng.lng,
        };
        setTempMarker(newMarker);
      }
    },
  });

  useEffect(() => {
    if (!addingMarker) {
      setTempMarker(null);
    }
  }, [addingMarker]);

  return (
    <>
      {tempMarker && (
        <Marker
          position={[tempMarker.latitude, tempMarker.longitude]}
          autoPan={true}
          eventHandlers={{
            add: (e) => {
              e.target.openPopup();
            },
          }}
        >
          <CustomEditablePopup onSave={handleSavePopup} />
        </Marker>
      )}
    </>
  );
};

export default AddMarkerOnClick;

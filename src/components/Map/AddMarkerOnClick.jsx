import React, { useContext, useState } from 'react';
import { useMapEvents, Marker } from 'react-leaflet';
import EditablePopup from 'react-leaflet-editable-popup';
import { MapContext } from '../../context/MapContext';

const AddMarkerOnClick = () => {
    const { addingMarker, setAddingMarker, handleCreateCollectPoint } = useContext(MapContext);
    const [tempMarker, setTempMarker] = useState(null);

    const handleSavePopup = (content) => {
      const collectPoint = {
        latitude: tempMarker.latitude,
        longitude: tempMarker.longitude,
        description: content
      }
      handleCreateCollectPoint(collectPoint)
      setAddingMarker(false)
      setTempMarker(null)
    };

    useMapEvents({
      click: (e) => {
        if (addingMarker) {
          const newMarker = {
            id: Date.now(), // Simulando um ID único para o exemplo
            latitude: e.latlng.lat,
            longitude: e.latlng.lng
          };
          setTempMarker(newMarker);
        }
      }
    });

    return (
      <>
        {tempMarker && (
          <Marker
            position={[tempMarker.latitude, tempMarker.longitude]}
            autoPan={true}
            eventHandlers={{
              add: (e) => {
                e.target.openPopup();
              }
            }}
          >
            <EditablePopup 
              editable
              saveContentCallback={(content) => handleSavePopup(content)}
              nametag="ponto de coleta"
            >
              Para enviar o ponto, edite aqui e clique em salvar!
            </EditablePopup>
          </Marker>
        )}
      </>
    );
};

export default AddMarkerOnClick;

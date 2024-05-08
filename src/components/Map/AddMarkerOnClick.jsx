import React, { useContext } from 'react'
import { useMapEvents } from 'react-leaflet';
import { MapContext } from '../../context/MapContext';


const AddMarkerOnClick = () => {
    const {
        addingMarker,
        setAddingMarker,
        handleCreateCollectPoint,
      } = useContext(MapContext);
      
    useMapEvents({
      click: (e) => {
        if (addingMarker) {
          handleCreateCollectPoint(e.latlng);
          setAddingMarker(false);
        }
      },
    });
    return null;
  };

export default AddMarkerOnClick
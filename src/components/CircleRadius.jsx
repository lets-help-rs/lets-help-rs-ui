import React, { useEffect } from "react";
import { FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";

const CircleRadius = ({ fetchCollectPoints }) => {
  const onCreated = (e) => {
    console.log("Layer created:", e.layer);
  };

  useEffect(() => {
    fetchCollectPoints();
  }, [fetchCollectPoints]);

  return (
    <FeatureGroup>
      <EditControl
        position="topright"
        onCreated={onCreated}
        draw={{
          rectangle: false,
          polygon: false,
          circle: true,
          marker: false,
          polyline: false,
        }}
      />
    </FeatureGroup>
  );
};

export default CircleRadius;

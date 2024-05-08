import React, { useEffect, useState } from "react";

const useUserGeolocation = () => {
  const [location, setLocation] = useState();

  const DEFAULT_CENTER = [-30.033056, -51.230000];

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error('Error getting location: ', error.message);
          setLocation(DEFAULT_CENTER);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
      setLocation(DEFAULT_CENTER);
    }
  }, []);

  return location;
};

export default useUserGeolocation;

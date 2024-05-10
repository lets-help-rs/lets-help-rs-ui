import React, { useEffect, useState } from "react";

const useUserGeolocation = () => {
  const [location, setLocation] = useState();
  const [permission, setPermission] = useState('prompt');
  const [isLoading, setIsLoading] = useState(true)

  const DEFAULT_CENTER = [-30.033056, -51.230000];

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation([position.coords.latitude, position.coords.longitude]);
          setPermission('granted');
          setIsLoading(false);
        },
        (error) => {
          console.error('Error getting location: ', error.message);
          setLocation(DEFAULT_CENTER);
          setPermission('denied');
          setIsLoading(false);
        }
      );
    } else {
      setLocation(DEFAULT_CENTER);
    }
  }, []);


  return { location, permission, isLoading };
};

export default useUserGeolocation;

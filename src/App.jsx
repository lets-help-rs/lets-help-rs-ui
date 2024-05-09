import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import { MapProvider } from "./context/MapContext";
import Map from "./pages/Map";
import { ToastContainer } from "react-toastify";
import ModalLocation from "./components/ModalLocation";
import useUserGeolocation from "./hooks/useUserLocation";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const { permission } = useUserGeolocation();


  useEffect(() => {
    if (permission === 'granted' || permission === 'prompt') {
      setModalOpen(false);
    } else {
      setModalOpen(true)
    }
  }, [permission]);


  return (
    <>
      <MapProvider>
        <ToastContainer />
        <div className="h-screen overflow-hidden">
          <ModalLocation
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
          />
          <Header />

          <Map />
        </div>
      </MapProvider>
    </>
  );
}

export default App;

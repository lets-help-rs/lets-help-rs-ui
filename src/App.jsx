import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import Map from "./pages/Map";
import ModalLocation from "./components/ModalLocation";
import useUserGeolocation from "./hooks/useUserLocation";
import Toast from "./components/Toast";

function App() {
  const [isModalOpen, setModalOpen] = useState(true);

  const { permission, isLoading } = useUserGeolocation();

  useEffect(() => {
    if (!isLoading) {
      if (permission === "granted") {
        setModalOpen(false);
      } else {
        setModalOpen(true);
      }
    }
  }, [permission, isLoading]);

  return (
    <>
      <div className="h-screen overflow-hidden">
        <Toast />
        <ModalLocation
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
        />
        <Header />

        <Map />
      </div>
    </>
  );
}

export default App;

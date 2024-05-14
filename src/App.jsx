import React, { useEffect } from "react";
import Header from "./components/Header";
import Map from "./pages/Map";
import ModalLocation from "./components/Modal/ModalLocation";
import useUserGeolocation from "./hooks/useUserLocation";
import Toast from "./components/Toast";
import { useModal } from "./context/ModalContext";

function App() {
  const { permission, isLoading } = useUserGeolocation();
  const { showModal, hideModal } = useModal();

  useEffect(() => {
    if (!isLoading) {
      if (permission === "granted") {
        hideModal();
      } else {
        showModal(<ModalLocation onClose={hideModal} />);
      }
    }
  }, [permission, isLoading]);

  return (
    <div className="h-screen overflow-hidden">
      <Toast />
      <Header />
      <Map />
    </div>
  );
}

export default App;

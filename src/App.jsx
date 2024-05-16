import { TourProvider } from "@reactour/tour";
import React, { useEffect } from "react";
import { TOUR_STEPS, TOUR_STYLES } from "./assets/contants/tour";
import Header from "./components/Header";
import ModalLocation from "./components/Modal/ModalLocation";
import Toast from "./components/Toast";
import { useModal } from "./context/ModalContext";
import { useShowTour } from "./hooks/useShowTour";
import useUserGeolocation from "./hooks/useUserLocation";
import Map from "./pages/Map";

function App() {
  const { permission, isLoading } = useUserGeolocation();
  const { showModal, hideModal } = useModal();
  const { setTourWasShown } = useShowTour();

  function hasSelectedLocation() {
    return Boolean(localStorage.getItem("selectedLocation"));
  }

  useEffect(() => {
    if (!isLoading) {
      if (permission === "granted") {
        hideModal();
      } else {
        if (hasSelectedLocation()) return hideModal();

        showModal(<ModalLocation onClose={hideModal} />);
      }
    }
  }, [permission, isLoading]);

  return (
    <TourProvider
      steps={TOUR_STEPS}
      beforeClose={() => setTourWasShown(true)}
      styles={TOUR_STYLES}
    >
      <div className="h-screen overflow-hidden">
        <Toast />
        <Header />
        <Map />
      </div>
    </TourProvider>
  );
}

export default App;

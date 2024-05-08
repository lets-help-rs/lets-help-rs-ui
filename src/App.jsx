import React from "react";

import Header from "./components/Header";
import { MapProvider } from "./context/MapContext";
import Map from "./pages/Map";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <MapProvider>
        <ToastContainer/>
        <div className="h-screen overflow-hidden">
          <Header />
          <Map />
        </div>
      </MapProvider>
    </>
  );
}

export default App;

import React from "react";

import Header from "./components/Header";
import { MapProvider } from "./context/MapContext";
import Map from "./pages/Map";

function App() {
  return (
    <>
      <MapProvider>
        <div className="h-screen overflow-hidden">
          <Header />
          <Map />
        </div>
      </MapProvider>
    </>
  );
}

export default App;

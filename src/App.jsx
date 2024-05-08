import React from "react";
import Map from "./components/Map";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="h-screen overflow-hidden">
        <Header />
        <Map />
      </div>
    </>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { MapProvider } from "./context/MapContext.jsx";
import { ModalProvider } from "./context/ModalContext.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MapProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </MapProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

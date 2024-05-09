import React from "react";
import { Toaster } from "react-hot-toast";

const Toast = () => {
  const isMobile = window.innerWidth < 768;
  const toastPosition = isMobile ? "bottom-center" : "top-right";
  const toasterStyle = isMobile ? {} : { top: "100px" };
  return <Toaster position={toastPosition} containerStyle={toasterStyle} />;
};

export default Toast;

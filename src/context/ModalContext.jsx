import React, { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);

  const showModal = (content) => {
    setModalContent(content);
  };

  const hideModal = () => {
    setModalContent(null);
  };

  const handleClickOutside = (e) => {
    if (e.target.id === "modal-overlay") {
      hideModal();
    }
  };

  return (
    <ModalContext.Provider value={{ modalContent, showModal, hideModal }}>
      {children}
      {modalContent && (
        <div
          id="modal-overlay"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-0"
          onClick={handleClickOutside}
        >
          <div
            className="bg-white p-4 rounded-md z-50"
            onClick={(e) => e.stopPropagation()}
          >
            {modalContent}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);

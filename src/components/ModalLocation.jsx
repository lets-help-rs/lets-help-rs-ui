import React, { useEffect } from "react";
import StateSelector from "./Input/StateSelector";
import CitySelector from "./Input/CitySelector";
import { IoClose } from "react-icons/io5";

const ModalLocation = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-50 overflow-y-auto">
      <div className="relative top-1/3 mx-auto p-5 border w-96 md:w-96 shadow-lg rounded-md bg-white">
        <div className="flex w-full justify-end">
          <IoClose className="cursor-pointer" onClick={() => onClose()} />
        </div>
        <div className="mt-3 text-center flex flex-col">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Permitir Localização
          </h3>
          <div className="mt-2 px-7 py-3 pb-5">
            <p className="text-sm text-gray-500">
              Para uma melhor experiência, permita que a plataforma acesse sua
              localização ou, se preferir, selecione sua cidade manualmente.
            </p>
          </div>
          <div className="flex gap-x-2 justify-center">
            <StateSelector />
            <CitySelector onClose={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLocation;

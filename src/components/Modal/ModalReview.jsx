import React from "react";
import { useModal } from "../../context/ModalContext";
import { IoClose } from "react-icons/io5";

const ModalReview = ({ type, confirmReview, description }) => {
  const { hideModal } = useModal();

  const text = type === "REPORT" ? "reportar" : "aprovar";

  return (
    <div>
      <div className="flex justify-end w-full cursor-pointer mb-5">
        <IoClose onClick={hideModal} />
      </div>
      <div className="flex justify-center items-center flex-col">
        <p>Tem certeza de que deseja {text} este ponto?</p>
        <p className="text-sm">{description}</p>
      </div>

      <div className="flex justify-center mt-4">
        <button
          className={`p-2 text-white uppercase rounded-md ${
            type === "REPORT"
              ? "bg-red-rs hover:bg-red-dark"
              : "bg-green-check hover:bg-green-check-dark"
          }`}
          onClick={() => confirmReview(type)}
        >
          {text}
        </button>
      </div>
    </div>
  );
};

export default ModalReview;

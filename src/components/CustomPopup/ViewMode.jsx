import { format } from "date-fns";
import React, { useContext } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdReport } from "react-icons/md";
import { MapContext } from "../../context/MapContext";
import { useModal } from "../../context/ModalContext";
import ModalReview from "../Modal/ModalReview";

const ViewMode = ({ point }) => {
  const { id, description, updatedAt } = point;
  const { showModal, hideModal } = useModal();
  const { sendReview } = useContext(MapContext);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "dd/MM/yy");
  };

  const handleReview = (type) => {
    showModal(
      <ModalReview
        type={type}
        confirmReview={confirmReview}
        description={description}
      />
    );
  };

  const confirmReview = (type) => {
    sendReview(id, type, point);
    hideModal();
  };

  return (
    <>
      <div className="h-full">
        <p>{description}</p>
        <div className="flex items-end justify-center">
          <span className="text-sm xl:text-smaller text-gray-400 m-0">
            Atualizado em: {formatDate(updatedAt)}
          </span>
          <div className="flex justify-center items-center px-2">
            <MdReport
              className="text-red-rs w-7 h-7 xl:w-5 xl:h-5 cursor-pointer"
              onClick={() => handleReview("REPORT")}
            />
            <FaCheckCircle
              onClick={() => handleReview("APPROVE")}
              className="cursor-pointer text-green-check h-6 w-6 xl:w-4 xl:h-4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewMode;

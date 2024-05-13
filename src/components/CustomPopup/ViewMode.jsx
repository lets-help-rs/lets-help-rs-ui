import { format } from "date-fns";
import React, { useContext } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdReport } from "react-icons/md";
import { MapContext } from "../../context/MapContext";

const ViewMode = ({ point }) => {
  const { id, description, updatedAt } = point;

  const {sendReview} = useContext(MapContext)

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "dd/MM/yy");
  };

  const handleReview = (type) => {
    sendReview(id, type);
  };

  return (
    <>
      <div className="h-full">
        <p>{description}</p>
        <div className="flex items-end justify-center">
          <span className="text-[12px] text-gray-400 m-0">
            Atualizado em: {formatDate(updatedAt)}
          </span>
          <div className="flex justify-center items-center px-2">
            <MdReport className="text-red-rs w-5 h-5 cursor-pointer" onClick={() => handleReview("REPORT")} />
            <FaCheckCircle
              onClick={() => handleReview("APPROVE")}
              className="cursor-pointer text-green-rs-light h-4 w-4"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default ViewMode;

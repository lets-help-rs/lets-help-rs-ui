import React, { useContext } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { MdAddLocationAlt } from 'react-icons/md';
import { MapContext } from '../../context/MapContext';

const ButtonAddLocation = () => {
    const {
        addingMarker,
        setAddingMarker,

      } = useContext(MapContext);
  return (
    <button
          id="add-marker-button"
          onClick={() => setAddingMarker(!addingMarker)}
          className={`fixed bottom-14 md:bottom-8 right-4 md:w-20 md:h-20 w-16 h-16 rounded-full cursor-pointer  ${
            addingMarker ? "bg-red-rs text-white" : "bg-yellow-rs text-black"
          } flex justify-center items-center`}
        >
          {addingMarker ? <IoCloseSharp className="text-4xl" /> : <MdAddLocationAlt className="text-4xl" />}
        </button>
  )
}

export default ButtonAddLocation
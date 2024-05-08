import React, { useContext } from 'react'
import { MapContext } from '../../context/MapContext';
import { IoCloseSharp } from 'react-icons/io5';
import { MdAddLocationAlt } from 'react-icons/md';

const ButtonAddLocation = () => {
    const {
        addingMarker,
        setAddingMarker,

      } = useContext(MapContext);
  return (
    <button
          onClick={() => setAddingMarker(!addingMarker)}
          className={`fixed bottom-4 right-4 w-20 h-20 rounded-full cursor-pointer ${
            addingMarker ? "bg-red-500" : "bg-blue-400"
          } flex justify-center items-center`}
        >
          {addingMarker ? <IoCloseSharp className="text-4xl" /> : <MdAddLocationAlt className="text-4xl" />}
        </button>
  )
}

export default ButtonAddLocation
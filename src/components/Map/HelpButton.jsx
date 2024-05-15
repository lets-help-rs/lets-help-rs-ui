import { useTour } from '@reactour/tour';
import React from 'react';
import { IoHelpSharp } from 'react-icons/io5';

const HelpButton = () => {
  const { setIsOpen } = useTour();

  return (
    <button
          id="help-button"
          className={`fixed bottom-14 md:bottom-8 left-4 md:w-12 md:h-12 w-16 h-16 rounded-full cursor-pointer bg-yellow-rs text-black flex justify-center items-center`}
          onClick={() => setIsOpen(true)}
        >
          <IoHelpSharp className="text-4xl md:text-2xl" />
        </button>
  )
}

export default HelpButton
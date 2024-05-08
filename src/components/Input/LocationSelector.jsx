import React, { useContext, useState } from 'react'
import StateSelector from './StateSelector'
import CitySelector from './CitySelector'
import { MapContext } from '../../context/MapContext';

const LocationSelector = () => {

  return (
    <div className='absolute z-50 2xl:left-96 xl:left-40 md:top-3 bottom-5 left-2 '>
    <StateSelector />
    <CitySelector   />
    </div>
  )
}

export default LocationSelector
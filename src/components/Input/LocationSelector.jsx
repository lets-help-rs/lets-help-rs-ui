import React, { useContext, useState } from 'react'
import StateSelector from './StateSelector'
import CitySelector from './CitySelector'
import { MapContext } from '../../context/MapContext';

const LocationSelector = () => {
    const {state, setState} = useContext(MapContext)

  return (
    <div className='absolute z-50 left-96 top-3'>
    <StateSelector onStateSelected={setState}/>
    <CitySelector   />
    </div>
  )
}

export default LocationSelector
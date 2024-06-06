import React from 'react'
import './portionloader.css'
import PortionLoaderSvg from './portionloader.svg'
export default function PortionLoader() {
  
  return (
    <div className='portion-loader-cont'>
        <object data={PortionLoaderSvg} aria-label='portion-loader'></object>
    </div>
  )
}

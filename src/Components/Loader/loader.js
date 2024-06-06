import React from 'react'
import loaderSVG from './loader.svg';
import './loader.css'
export default function Loader() {
  return (
    <div className='loader-cont'>
      <img className='loader' src={loaderSVG} alt='loading...' />
    </div>
  )
}

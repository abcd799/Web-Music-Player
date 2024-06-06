import React from 'react'
import './waveanimation.css';

export default function WaveAnimation({isPlaying}) {
  const wave = isPlaying? "box active" :"box";
  return (
    <div className='box-container'>
    <div className={`${wave} box1`}></div>
    <div className={`${wave} box2`}></div>
    <div className={`${wave} box3`}></div>
    <div className={`${wave} box4`}></div>
    <div className={`${wave} box5`}></div>
    <div className={`${wave} box6`}></div>
    <div className={`${wave} box7`}></div>
    <div className={`${wave} box8`}></div>
    <div className={`${wave} box9`}></div>
    <div className={`${wave} box10`}></div>
    <div className={`${wave} box11`}></div>
    </div>
  )
}


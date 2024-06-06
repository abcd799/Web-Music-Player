import React from 'react';
import { PiShuffleFill } from "react-icons/pi";
import { FaShuffle } from "react-icons/fa6";
import { MdSkipPrevious } from "react-icons/md";
import { IoIosPlay } from "react-icons/io";
import { IoIosPause } from "react-icons/io";
import { MdSkipNext } from "react-icons/md";
import { LuRepeat } from "react-icons/lu";
import { LuRepeat1 } from "react-icons/lu";
import './audiocontrols.css'
import WaveAnimation from './waveanimation';

export default function AudioControls({isPlaying,isRepeat,isShuffle,handlePlayPause,handleRepeat,handleNext,handlePrev,handleShuffle}) {
  return (
    <div className='controls-container'>
      <div className='controls-wave-animation'>
        <WaveAnimation isPlaying={isPlaying}/>
      </div>
        <div className='btn-container'>
        {isShuffle?<FaShuffle className='shuffle-btn' onClick={handleShuffle}/>:<PiShuffleFill className='noshuffle-btn' onClick={handleShuffle}/>}
        
        <MdSkipPrevious onClick={handlePrev} className='pre-btn'/>
        {isPlaying?<IoIosPause onClick={handlePlayPause} className='play-btn'/>:<IoIosPlay onClick={handlePlayPause} className='pause-btn'/>}
        
        <MdSkipNext onClick={handleNext} className='next-btn'/>
        {isRepeat?<LuRepeat1 onClick={handleRepeat} className='repone-btn'/>:<LuRepeat onClick={handleRepeat} className='norep-btn'/>}
        </div>
    </div>
  )
}

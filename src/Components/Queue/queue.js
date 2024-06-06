import React from 'react'
import './queue.css'
export default function Queue({tracks,setCurrentIndex}) {
  
  const msToTime=(duration)=>{
    let seconds=Math.floor((duration/1000)%60);
    let minutes=Math.floor((duration/(1000*60)%60));
      if(seconds<9){
        seconds=`0${seconds}`
      }
    return `${minutes}:${seconds}`;
  }
  return (
    <div className='queue-container'>
      <div className='next-container'>
      <div className='next-head'>Up Next...</div>
      <div className='track-container'>
      {tracks?.map((track,index)=>
        <div className='next-tracks' onClick={()=>setCurrentIndex(index)  }>
          <div className='track-name'>{track?.track?.name}</div>
        <div className='track-duration'>{msToTime(track?.track?.duration_ms)}</div>
        </div>
      )}
        </div>
        </div>
      </div>
  )
}

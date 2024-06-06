import React from 'react'
import  './progress.css'
export default function ProgressBar({progress}) {
    const parentDiv={
        height:10,
        width:"60%",
        borderRadius: 50,
    }
    const childDiv={
      height:"100%",
      width: `${progress}%`,
      borderRadius:"inherit"
    }
    
  return (
    <div className='parent' style={parentDiv}>
        <div className='child' style={childDiv}>
        </div>
    </div>
  )
}


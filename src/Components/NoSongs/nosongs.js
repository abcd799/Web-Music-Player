import React from 'react'
import './nosongs.css'
import { useNavigate } from 'react-router-dom'
export default function NoSongs() {
    const navigate=useNavigate()
    const handleNoSongs=()=>{
        navigate('/playlist')
    }
  return (
    <div className='nosongs-container'>
            <p className='nosongs-heading'>Sorry, currently no tracks available.</p>
            <p className='nosongs-subheading'>I apologize for the inconvenience. Please check out playlists for more music options.</p>
            <button className='nosongs-button' onClick={handleNoSongs}>Checkout Playlists</button>
    </div>
  )
}

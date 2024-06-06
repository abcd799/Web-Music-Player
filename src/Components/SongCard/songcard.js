import React, { } from 'react';
import './songcard.css';
export default function SongCard({ currentTrack }) {

  const albumType=(track)=>{
    return (track.album.total_tracks>1)?"an album":" a single"
  }

  return (
    <div className='song-card-container'>
      <div className='album-image'>
        <img src={currentTrack?.album?.images[0].url} className="card-current-image" alt='album-img' />
        <img src={currentTrack?.album?.images[0].url} className='current-image-shadow' alt='album-img' />
      </div>
      <div className='albumInfo-card'>
        <div className='albumName-container'>
          <div className='marguee'>

            <p className='album-title'>{currentTrack?.name + " - " + currentTrack?.album?.artists?.map(artist => artist.name).join(", ")}</p>
          </div>

          <div className='album-desc'><p>{currentTrack?.album?.name + " is " + albumType(currentTrack) + " by " + currentTrack?.album?.artists?.map(artist => artist.name).join(" and ") + " with " + currentTrack?.album?.total_tracks + ((albumType(currentTrack)===" a single")?" track.":" tracks.")} </p></div>
          <p className='album-release'>{" Released on : " + currentTrack?.album?.release_date}</p>
        </div>

      </div>
    </div>
  )
}

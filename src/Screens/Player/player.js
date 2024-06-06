import React, { useEffect, useState } from 'react'
import AudioPlayer from '../../Components/AudioPlayer/audioplayer';
import apiClient from '../../spotify';
import { useLocation } from 'react-router-dom';
import SongCard from '../../Components/SongCard/songcard';
import Queue from '../../Components/Queue/queue';
import './player.css'
import Widget from '../../Components/Widget/widget';
import NoSongs from '../../Components/NoSongs/nosongs';

export default function Player() {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();
  const fetchPlayer = async () => {
    try {
      if (location.state) {
        const response = await apiClient.get("playlists/" + location.state?.id + "/tracks");
        setTracks(response.data.items)
        setCurrentTrack(response.data.items[currentIndex].track);
      }
    } catch (e) {
      console.log("Something went wrong.", e);
    }

  }
  useEffect(() => {
    fetchPlayer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state, currentIndex])

  useEffect(() => {
    if (tracks.length > 0) {
      setCurrentTrack(tracks[currentIndex]?.track)

    }
  }, [tracks, currentIndex])
  return (
    <div className='screen-container'>
      <div className='player'>
        <div className='player-left'>
          {tracks.length > 0 ? (
            <>
              <AudioPlayer currentTrack={currentTrack} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} tracks={tracks} />
              <Widget id={location.state?.id} artistId={currentTrack?.album?.artists[0].id} />
            </>) :
            <NoSongs/>}

      </div>
        <div className="player-right">
          {currentTrack?.album && <SongCard currentTrack={currentTrack} />}
          <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
        </div>
      </div>
    </div>
  )
}






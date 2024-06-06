import React, { useEffect, useRef, useState } from 'react';
import './liked.css';
import apiClient from '../../spotify';
import Loader from '../../Components/Loader/loader';
import { GiHearts } from "react-icons/gi";
import { FaCirclePlay } from "react-icons/fa6";
import { FaCirclePause } from "react-icons/fa6";
import WaveAnimation from '../../Components/AudioPlayer/waveanimation';
import AudioPlayer from '../../Components/SmallAudioPlayer/audioplayer';
export default function Liked() {


  const [liked, setLiked] = useState([]);
  const [loader, setLoader] = useState(true);
  const [currentTrack, setCurrentTrack] = useState();
  const [isPlaying, setIsPlaying] = useState(false)

  const audioRef = useRef(new Audio())

  const msToTime = (duration) => {
    const seconds = Math.floor((duration / 1000) % 60);
    const minutes = Math.floor((duration / (1000 * 60) % 60));
    return `${minutes}:${seconds}`;
  }


  const fetchFavourites = async () => {
    try {
      const favourite = await apiClient.get("me/tracks");
      setLiked(favourite.data.items);
    }
    catch (e) {
      console.log("Something went wrong.", e);
    } finally {
      setLoader(false);
    }
  };


  const handleLikeClick = (like) => {
    const clickedTrack = like?.track;
    if (currentTrack && currentTrack?.id === clickedTrack?.id) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false)
      } else {
        audioRef.current.play();
        setIsPlaying(true)
      }
    } else {
      setCurrentTrack(clickedTrack)
      setIsPlaying(false)
    }
  }
  const checkActive = (like) => {
    return isPlaying && currentTrack?.id === like?.track?.id
  }
  useEffect(() => {
    fetchFavourites();
  }, []);

  return (
    <div className='screen-container'>
      {loader ? <Loader /> : (
        <>
          <div className='like-head'><GiHearts className='like-icon'/> Liked songs</div>
          <div className='main-container'>
            <div className='liked-headings'>

              <div className='title-head'>Title</div>
              <div className='album-name'>Album</div>
              <div className='duration-title'>Duration</div>
            </div>
            <hr />
            {liked?.map((like, index) =>
              <div className={`liked-cont ${checkActive(like) ? 'like-active-card' : ''}`} key={like?.track.id} onClick={() => handleLikeClick(like)}>
                <div className='title-container'>
                  <div className='song-info'>
                    <img src={like?.track.album.images[0].url} className='fav-images' alt='liked' />
                    <div>
                      <div className='title-name'>{like?.track.name}</div>
                      <div className='artist-name'>by {like?.track.artists.map(artist => artist.name).join(", ")}</div>
                    </div>
                  </div>
                </div>
                <div className='like-wave-animation'>
                  {checkActive(like) && <WaveAnimation isPlaying={true} />}
                </div>
                <div className='like-play-circle-container'>
                  {checkActive(like) ? <FaCirclePause className='like-pause-circle active' /> :
                    <FaCirclePlay className={`like-play-circle ${checkActive(like) ? 'active' : ''}`} />
                  }
                </div>
                <div className='album'>{like?.track.album.name}</div>
                <div className='duration'>{msToTime(like?.track.duration_ms)}</div>
              </div>
            )}
          </div>
          {currentTrack && <AudioPlayer track={currentTrack} setIsPlaying={setIsPlaying} audioRef={audioRef} />}
        </>
      )}
    </div>
  )

}
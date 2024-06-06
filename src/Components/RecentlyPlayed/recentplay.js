import React, { useRef, useState } from 'react'
import './recentplay.css'
import { FaCirclePlay } from "react-icons/fa6";
import { FaCirclePause } from "react-icons/fa6";
import WaveAnimation from '../AudioPlayer/waveanimation';
import AudioPlayer from '../SmallAudioPlayer/audioplayer';
import PortionLoader from '../PortionLoader/portionloader';

export default function RecentlyPlayed({ recentTracks, isLoading }) {

    const [currentTrack, setCurrentTrack] = useState()
    const [isPlaying, setIsPlaying] = useState(false)

    const audioRef = useRef(new Audio())

    const checkActive = (item) => {
        return isPlaying && currentTrack?.id === item?.track?.id
    }


    const handleRecentClick = (item) => {
        const clickedTrack = item?.track
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


    return (

        <div className='recently-played-container'>
            <p className='recently-title'>Recently Played</p>
            <div className='recent-items-container'>
                {isLoading ? <PortionLoader /> : (
                    recentTracks?.map((item, index) => (
                        <div className={`recent-play-item ${checkActive(item) ? 'recent-active-card' : ''}`} onClick={() => { handleRecentClick(item) }} key={index}>
                            <img src={item?.track?.album?.images[1]?.url} className='recent-image' alt='recent-img' />
                            <p className='recent-trackname'>{item?.track?.name}</p>
                            <div className='recent-wave-animation'>
                                {isPlaying && currentTrack?.id === item?.track?.id && <WaveAnimation isPlaying={true} />}
                            </div>
                            {checkActive(item) ? <FaCirclePause className='recent-pause-circle active' /> :
                                <FaCirclePlay className={`recent-play-circle ${checkActive(item)? 'active' : ''}`} />
                            }
                        </div>
                    )))}
            </div>
            {currentTrack && <AudioPlayer track={currentTrack} audioRef={audioRef} setIsPlaying={setIsPlaying} />}
        </div>

    )
}

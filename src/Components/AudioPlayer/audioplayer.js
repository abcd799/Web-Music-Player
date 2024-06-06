import React, { useEffect, useRef, useState, useCallback } from 'react';
import './audioplayer.css';
import MusicImage from './music.png';
import ProgressBar from '../ProgressBar/progress';
import AudioControls from './audiocontrols';

export default function AudioPlayer({ tracks, currentTrack, currentIndex, setCurrentIndex }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const audioRef = useRef(new Audio());
  const intervalRef = useRef();

  const audioSrc = tracks[currentIndex]?.track?.preview_url;
  const { duration } = audioRef.current;
  const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

  const imageRotate = isPlaying ? "audioPlayer-images active" : "audioPlayer-images";

  const handleNext = useCallback(() => {
    setCurrentIndex(prevIndex => (
      isShuffle ? Math.floor(Math.random() * tracks.length) : (prevIndex + 1) % tracks.length
    ));
    setIsPlaying(true);
  }, [isShuffle, setCurrentIndex, tracks.length]);

  const startTimer = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        if (isRepeat) {
          audioRef.current.play();
        } else {
          handleNext();
        }
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, 1000);
  }, [isRepeat, handleNext]);
  

  useEffect(() => {
    if (audioSrc) {
      audioRef.current.src = audioSrc;
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().then(startTimer).catch(error => {
          console.error("Failed to play audio:", error);
        });
      }
    }
  }, [audioSrc, isPlaying, startTimer]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play().then(startTimer).catch(error => {
        console.error("Failed to play audio:", error);
      });
    } else {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    }
  }, [isPlaying, startTimer]);

  useEffect(() => {
    const handleCanPlay = () => {
      if (isPlaying) {
        audioRef.current.play().then(startTimer).catch(error => {
          console.error("Failed to play audio:", error);
        });
      }
    };
    audioRef.current.addEventListener('canplay', handleCanPlay);

    return () => {
      audioRef.current.removeEventListener('canplay', handleCanPlay);
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, [isPlaying, startTimer]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const handlePlayPause = () => {
    setIsPlaying(prevState => !prevState);
  };

  const handleRepeat = () => {
    setIsRepeat(prevState => !prevState);
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (
      isShuffle ? Math.floor(Math.random() * tracks.length) : (prevIndex - 1 + tracks.length) % tracks.length
    ));
    setIsPlaying(true);
  };

  const handleShuffle = () => {
    setIsShuffle(prevState => !prevState);
  };

  const formatTime = (n) => {
    const result = Math.floor(n);
    const formatted = (result < 10) ? `0${result}` : result;
    return `0:${formatted}`;
  };

  return (
    <div className='player-container'>
      <div className='audioplayer-left'>
        <p className='main-heading'>Now Playing</p>
        <div className={imageRotate}>
          <img src={MusicImage} alt='defaultImg' className='player-image' />
          <img src={currentTrack?.album?.images[0]?.url} alt='album' className='current-image' />
        </div>
      </div>

      <div className='audioplayer-right'>
        <p className='current-title'>{currentTrack?.name} - {currentTrack?.artists[0]?.name}</p>
        <div className='dur-progress'>
          <p>{formatTime(audioRef.current.currentTime)}</p>
          <ProgressBar progress={currentPercentage} tracks={tracks} />
          <p>{formatTime(duration)}</p>
        </div>

        <AudioControls 
          isPlaying={isPlaying} 
          isRepeat={isRepeat} 
          isShuffle={isShuffle} 
          handlePlayPause={handlePlayPause} 
          handleRepeat={handleRepeat} 
          handleNext={handleNext} 
          handlePrev={handlePrev} 
          handleShuffle={handleShuffle} 
        />
      </div>
    </div>
  );
}

import React,{useEffect} from 'react'

export default function AudioPlayer({track,setIsPlaying,audioRef}) {
    

    useEffect(() => {
        const audio = audioRef.current
        const handleCanPlayThrough = () => {
            audio.play();
            setIsPlaying(true)
        }
        const handleEnded = () => {
            audio.pause();
            setIsPlaying(false)
        }
        if (track) {
            audio.src = track?.preview_url
            audio.addEventListener("canplaythrough", handleCanPlayThrough)
            audio.addEventListener("ended", handleEnded)
        }

        return () => {
            audio.pause()
            setIsPlaying(false)
            audio.removeEventListener("ended", handleEnded)
            audio.removeEventListener("canplaythrough", handleCanPlayThrough)
        }
    }, [track])


  return null;
}


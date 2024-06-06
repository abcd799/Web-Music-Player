import React from 'react';
import { useNavigate } from 'react-router-dom';
import './listcard.css';
import { FaCirclePlay } from "react-icons/fa6";
import { IconContext } from "react-icons";
export default function ListCard({ playlist, browse }) {
    const navigate = useNavigate();
    const playPlayList = (id) => {
        navigate('/player',{state:{id: id}});
    }
    
    if (playlist) {
        return (
            <div className='card-container' key={playlist.id} onClick={()=>{playPlayList(playlist.id)}}>
                <img className="playlist-image" src={playlist.images[0].url} alt='playlist' />
                <div className='playlist-name'>{playlist.name}</div>
                <div className='playlist-total'>{playlist.tracks.total} songs</div>
                <IconContext.Provider value={{ color: "#00ff00", className: "play-icon" }}>
                    <div>
                        <FaCirclePlay />
                    </div>
                </IconContext.Provider>
            </div>
        )
    }


    if (browse) {
        return (
            <div className='card-container' key={browse.id} >
                <img className="browse-image" src={browse.icons[0].url} alt='playlist' />
                <div className='browse-name'>{browse.name}</div>
                <IconContext.Provider value={{ color: "#00ff00", className: "play-icon" }}>
                    <div>
                        <FaCirclePlay />
                    </div>
                </IconContext.Provider>
            </div>
        )
    }
}

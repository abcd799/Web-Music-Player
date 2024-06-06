import React, { useEffect, useState } from 'react';
import apiClient from '../../spotify';
import './playlist.css';
import Loader from '../../Components/Loader/loader';
import ListCard from '../../Components/ListCards/listcard';

export default function PlayList() {
  const [playlists, setPlaylists] = useState(null);
  const [loader, setLoader] = useState(true);

  const fetchPlaylist = (async () => {
    try {
      const response = await apiClient.get("me/playlists");
      setPlaylists(response.data.items);
    }
    catch (error) {
      console.log(error);
    }
    finally {
      setLoader(false);
    }
  });
  useEffect(() => {

    fetchPlaylist();
  }, [playlists])

  return (

    <div className='screen-container'>
      {loader?<Loader/>:
      <div className='playlists-container'>
        {playlists?.map((playlist,index) => {
          return (
            <ListCard playlist={playlist} key={index}/>
          )
        })}
      </div>}
    </div>
  )
}

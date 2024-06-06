import React, { useEffect, useState } from 'react'
import apiClient from '../../spotify'
import './library.css'
import ItemCard from "../../Components/ItemCard/itemcard";
import RecentlyPlayed from '../../Components/RecentlyPlayed/recentplay'

export default function Library() {
  const [artists, setArtists] = useState([])
  const [featurelist, setFeatureList] = useState([])
  const [recentTracks, setRecentTracks] = useState([])
  const [topArtist, setTopArtist] = useState([])
  const [isLoading, setIsLoading] = useState(true)



  const fetchData = async () => {
    try {
       
      //  Using Promise.all to make all the request simultaneously to increase the speed of fetching.
      const [followArtistResponse, featureListResponse, recentPlayResponse, topArtistResponse] = await Promise.all([
        apiClient.get("me/following?type=artist"),
        apiClient.get("browse/featured-playlists?limit=25"),
        apiClient.get("me/player/recently-played?limit=25"),
        apiClient.get("me/top/artists")
      ]);
      
      setArtists(followArtistResponse?.data?.artists?.items);
      setFeatureList(featureListResponse?.data?.playlists?.items);
      setRecentTracks(recentPlayResponse?.data?.items);
      setTopArtist(topArtistResponse?.data?.items);
    }

    catch (e) {
      console.log(e);
    }
    finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (

    <div className='screen-container'>
      <div className='library-container'>
      <RecentlyPlayed recentTracks={recentTracks} isLoading={isLoading} />
      <ItemCard title="Follow Artists" isLoading={isLoading} items={artists} imagePath={(item) => item?.images[2]?.url} />
      <ItemCard title="Top Artists For You" isLoading={isLoading} items={topArtist} imagePath={(item) => item?.images[0]?.url} />
      <ItemCard title="Feature Playlists" isLoading={isLoading} items={featurelist} imagePath={(item) => item?.images[0]?.url} />
      </div>
    </div>
  )
}

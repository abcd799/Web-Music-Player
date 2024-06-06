import React, { useEffect, useState } from 'react';
import './widget.css'
import apiClient from '../../spotify';
import Widgetcard from './widgetcard';

export default function Widget({artistId}) {
  const [similar,setSimilar]=useState([]);
  const [newRelease,setNewRelease]=useState(null);
  const[featured,setFeatured]=useState(null);
  const [isLoading,setIsLoading]=useState(true)
  
  const fetchWidge=async()=>{
    if(artistId){
      try{
        const relatedArtistResponse=await apiClient.get(`artists/${artistId}/related-artists`);
        const newReleaseResponse=await apiClient.get("/browse/new-releases")
        const featureListResponse=await apiClient.get("browse/featured-playlists");


        setSimilar(relatedArtistResponse.data?.artists?.slice(0,3));
        setNewRelease(newReleaseResponse.data?.albums?.items.slice(0,3));
        setFeatured(featureListResponse.data?.playlists?.items?.slice(0,3));
        
      }catch(e){
        console.log("error",e)
      }
      finally{
        setIsLoading(false)
      }
    }
  }
  useEffect(()=>{
    fetchWidge();
  },[artistId])

  return (
    <div className='widget-container'>
    <Widgetcard title="Similar Artists" similar={similar}  isLoading={isLoading}/>
    <Widgetcard title="New Releases" newRelease={newRelease} isLoading={isLoading}/>
    <Widgetcard title="Made For You" featured={featured} isLoading={isLoading}/>
    </div>
  )
}

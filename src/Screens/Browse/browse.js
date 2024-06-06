import React,{useState,useEffect} from 'react'
import apiClient from '../../spotify.js'
import ListCard from '../../Components/ListCards/listcard.js';
import Loader from '../../Components/Loader/loader.js';

export default function Browse() {
  const [browses,setBrowses]=useState(null);
  const [loader, setLoader] = useState(true);

  const fetchBrowse = async () => {
    try {
      const browse = await apiClient.get('browse/categories')
      setBrowses(browse.data.categories.items);
    } catch (error) {
      console.error('Error fetching browse data:', error);
    }finally {
      setLoader(false);
    }
  };
  

  useEffect(() => {
    fetchBrowse();
  }, []);
  return (
    <div className='screen-container'>
      {loader?<Loader/>:
      <div className='playlists-container'>
        {browses?.map(browse => {
          return (
            <ListCard browse={browse}/>
          )
        })}
      </div>}
    </div>
  )
}

import React,{useState,useEffect} from 'react'
import Profile from './logo192.png';
import './sidebar.css'
import SidebarButton from './sidebarButton';
import { MdHome } from "react-icons/md";
import { MdTravelExplore } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { BiSolidPlaylist } from "react-icons/bi";
import { PiSignOutBold } from "react-icons/pi";
import { TbPlayerPlayFilled } from "react-icons/tb";
import apiClient from '../../spotify'


export default function Sidebar() {
  const [image,setImage]=useState(Profile)
  const [uname,setUname]=useState("Name");
  const getImage = async () => {
    try {
      const response = await apiClient.get("me");
    setUname(response?.data?.display_name)
      setImage(response?.data?.images[0]?.url);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };
  
  useEffect(() => {
    getImage();
  }, []);
  
  return (
    <>
      <div className='sidebar'>
        <div>
        <img className="profile-pic" src={image} alt="profile" />
        <p className='username'>{uname}</p>
        </div>

        <div className='sidebar-btns'>
          <SidebarButton icon={MdHome} to="/" title="Home" />
          <SidebarButton icon={MdTravelExplore} to="/browse" title="Browse" />
          <SidebarButton icon={TbPlayerPlayFilled} to="/player" title="Player" />
          <SidebarButton icon={MdFavorite} to="/liked" title="Liked" />
          <SidebarButton icon={BiSolidPlaylist} to="/playlist" title="Playlist" />
        </div>
        <div className='sign-out'>
          <SidebarButton icon={PiSignOutBold} to="/login" title="Sign Out" />
        </div>
      </div>
    </>

  )
}

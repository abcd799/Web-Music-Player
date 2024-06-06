import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Browse from '../Browse/browse';
import Sidebar from '../../Components/SideBar/sidebar';
import Liked from '../Liked/liked';
import PlayList from '../Playlist/playlist';
import Login from '../Login/login';
import Library from '../Library/library';
import Player from '../Player/player';
import './home.css'
import { setClientToken } from '../../spotify';


export default function Home() {
  const [token, setToken] = useState("");

  

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = '';
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      console.log(_token);
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, [])


  return (

    <Router>
    {!token ?(
      <Login /> ) : (
          <div className='main-cont' >
            <Sidebar />
            <Routes>
              <Route path='/' element={<Library />} />
              <Route path='/liked' element={<Liked />} />
              <Route path='/browse' element={<Browse />} />
              <Route path='/player' element={<Player />} />
              <Route path='/playlist' element={<PlayList />} />
            </Routes>
          </div>)}
        </Router>
  )
}

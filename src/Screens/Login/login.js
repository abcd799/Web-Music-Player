import React from 'react'
import { loginEndPoint } from '../../spotify.js'
import './login.css';
import spotifyImage from './spotify.avif';

export default function Login() {
  return (
    <>
      <div className="login-container">
        <div className='login-card'>
          <p>Please sign up to continue...</p>
          <img src={spotifyImage} alt='logo here' className='login-img' />
          <a href={loginEndPoint} className='login-btn'>Sign up</a>
        </div>
      </div>
    </>
  )
}

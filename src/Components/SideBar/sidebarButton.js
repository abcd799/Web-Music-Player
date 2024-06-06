import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom'
import './sidebar.css';

export default function SidebarButton(props) {
  const location = useLocation();
  const isActive = location.pathname === props.to;
  const btnStyle = isActive ? 'button active' : 'button';
  

  const handleClick=()=>{
    if(props.to==="/login"){
      window.localStorage.removeItem("token");
      window.location.reload();
    }
  
  }
  return (
    <>
      <Link to={props.to} className='sidebar-links' onClick={handleClick} >
        <button className={btnStyle}>< props.icon className="icon" />{props.title}</button>
      </Link>
    </>
  )
}

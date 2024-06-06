import React from 'react';
import './widgetcard.css';
import Widgetinfo from './widgetinfo';
import { BsChevronRight } from "react-icons/bs";
import PortionLoader from '../PortionLoader/portionloader';



export default function Widgetcard({ similar, newRelease, featured, title, isLoading }) {
  return (
    <div className='widgetcard-container'>
      <p className='widgetcard-title'>{title}</p>
      {isLoading ? <PortionLoader /> :
        <>
          {similar && similar.map((artist) => {
            return (
              <Widgetinfo image={artist?.images[2]?.url} title={artist?.name} subTitle={artist?.followers?.total + " Followers "} />
            )
          })}
          
          {featured && featured.map((playlist) => {
              return (
                <Widgetinfo image={playlist?.images[0]?.url} title={playlist?.name} subTitle={playlist?.tracks?.total + " Songs "} />
              )
            })}

          {newRelease && newRelease.map((album) => {
              return (
                <Widgetinfo image={album?.images[1]?.url} title={album?.name} subTitle={album?.artists[0]?.name} />
              )
            })}

        </>
      }

      <BsChevronRight className='explore-icon' />

    </div>
  )
}


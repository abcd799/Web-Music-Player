import React from 'react'
import './widgetinfo.css';

export default function Widgetinfo({image,title,subTitle}) {
    
  return (
    <div className='widgetinfo-body'>
        <img src={image} alt='artist' className='widgetinfo-image' />
        <div className='widgetinfo-right'>
            <p className='info-title'>{title}</p>
            <p className='info-subtitle'>{subTitle}</p>
        </div>
    </div>
  )
}

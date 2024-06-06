import React from 'react';
import './itemcard.css';
import PortionLoader from '../PortionLoader/portionloader'

export default function ItemCard({ title, items, imagePath, isLoading }) {
    
    

    return (
        <div className='follow-container'>
            <p className='follow-title'>{title}</p>
            <div className='artist-container'>
                {isLoading ? <PortionLoader /> :
                    items?.map((item, index) => (
                        <div className='follow-artists' key={index}>
                            <img src={imagePath(item)} className='artist-image' alt=''/>
                            <p className='artist-title'>{item?.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

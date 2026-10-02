import { useState, useEffect } from 'react'
import { starIcon } from '../../utils/constants'
import { RESTRO_IMAGE_URL } from '../../utils/constants'
import default_restaurant_logo from '../../assets/default_restaurant_logo.jpg'

const MenuItem = ({ category }) => {
  return (
    <div className='menu-items-container'>
      {category?.itemCards.map(item => {
        const info = item?.card?.info
        return (
          <div className='menu-item' key={info?.id}>
            <div className='menu-items-row'>
              <div className='item-details'>
                <div className='item-name'>{info?.name}</div>

                <div style={{ fontWeight: 'bold' }}>
                  {'₹' + (info?.price / 100 || info?.defaultPrice / 100)}
                </div>

                {info?.ratings?.aggregatedRating?.rating && (
                  <div className='menu-rating flex items-center'>
                    <div className='star-container'>{starIcon}</div>
                    <div>
                      {info?.ratings?.aggregatedRating?.rating +
                        ' (' +
                        info?.ratings?.aggregatedRating?.ratingCountV2 +
                        ')'}
                    </div>
                  </div>
                )}

                {info?.description && (
                  <p className='menu-desc'>{info?.description}</p>
                )}
              </div>
              <div className='menu-image-container min-h-22'>
                <img
                  src={
                    info?.imageId
                      ? RESTRO_IMAGE_URL + info?.imageId
                      : default_restaurant_logo
                  }
                />
              </div>
            </div>

            <div className='item-sep' />
          </div>
        )
      })}
    </div>
  )
}

export default MenuItem

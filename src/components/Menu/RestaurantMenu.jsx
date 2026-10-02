import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { RESTRO_IMAGE_URL, starIcon } from '../../utils/constants.jsx'
import MenuAccordian from './MenuAccordian.jsx'
import default_restaurant_logo from '../../assets/defaultRestaurantLogo.jpg'
import MenuShimmerUI from '../Shimmer/MenuShimmerUI.jsx'
import useRestaurantMenu from '../../utils/useRestaurantMenu.jsx'

const RestaurantMenu = () => {
  const [menu, setMenu] = useState()
  const { state } = useLocation() // THis does not work when the URL is opened separately

  const {
    name,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    isOpen,
    totalRatingsString,
    veg
  } = state
  const { slaString: deliveryTime } = state?.sla

  useRestaurantMenu(menu, setMenu, cuisines)

  if (menu == null) return <MenuShimmerUI />

  return (
    <div className='restaurant-menu-container'>
      <div className='restaurant-menu-header'>
        <div className='restaurant-menu-image'>
          <img
            src={RESTRO_IMAGE_URL + cloudinaryImageId}
            onError={e => {
              e.target.src = default_restaurant_logo
            }}
          ></img>
        </div>

        <div className='restaurant-menu-details'>
          <h2 className='font-extrabold text-xl'>{name}</h2>
          <div className='restaurant-menu-info'>
            {avgRating && (
              <div className='restaurant-menu-rating'>
                <span className='star-container'> {starIcon}</span>
                <span>{avgRating}</span>
                <p>{' (' + totalRatingsString + ')'}</p>
              </div>
            )}

            <span className='menu-sep'>•</span>

            <span>{deliveryTime.toLowerCase()}</span>
          </div>

          <p className='restaurant-menu-cost'>{costForTwo}</p>

          <p className='restaurant-menu-cuisines'>{cuisines.join(', ')}</p>

          <div className='restaurant-menu-tag-container'>
            <span className='restaurant-menu-status'>
              {isOpen ? 'Open' : 'Closed'}
            </span>

            {veg ? (
              <div className='restaurant-menu-veg'>Veg</div>
            ) : (
              <div className='restaurant-menu-nonveg'>Serves Non-veg</div>
            )}
          </div>
        </div>
      </div>

      <div className='seperator'></div>

      <MenuAccordian menu={menu} />
    </div>
  )
}

export default RestaurantMenu

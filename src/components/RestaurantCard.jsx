import { RESTRO_IMAGE_URL, starIcon } from '../utils/constants.jsx'
import default_restaurant_logo from '../assets/Default_Restaurant_LOGO.jpg'

const RestaurantCard = props => {
  const {
    name,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    sla: { slaString: time }
  } = props?.data?.info

  return (
    <div className='restro-card'>
      <div className='restro-image'>
        <img
          alt=''
          src={RESTRO_IMAGE_URL + cloudinaryImageId}
          onError={e => (e.target.src = default_restaurant_logo)}
        ></img>
      </div>
      <div className='restro-info'>
        <h4 className='font-bold'>{name}</h4>
        <p className='cuisines'>{cuisines.join(', ')}</p>
        {avgRating && (
          <div className='rating'>
            <span>{avgRating}</span>
            <span className='star-container'> {starIcon}</span>
          </div>
        )}

        <p className='font-medium'>{costForTwo}</p>
        <p>{time}</p>
      </div>
    </div>
  )
}

export default RestaurantCard

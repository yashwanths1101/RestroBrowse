import { useEffect } from 'react'

const useFetchRestaurantData = (setResList, setFilteredList) => {
  const getRestaurantList = async () => {
    const restaurantList = []

    for (let page = 1; page < 10; page++) {
      const response = await fetch(`/restaurants/page-${page}.json`)
      const json = await response.json()

      const curResList =
        json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ?? []

      restaurantList.push(...curResList)
    }

    return restaurantList
  }

  useEffect(() => {
    const loadRestaurants = async () => {
      const restaurantList = await getRestaurantList()

      setResList(restaurantList)
      setFilteredList(restaurantList)
    }

    loadRestaurants()
  }, [])
}

export default useFetchRestaurantData
